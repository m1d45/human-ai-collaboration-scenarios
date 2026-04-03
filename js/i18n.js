/**
 * i18n.js — Lightweight internationalisation engine.
 *
 * Usage:
 *   i18n.setLocale('en')
 *   i18n.t('ui.modes.aug')           // → 'Augmentation'
 *   i18n.t('scenarios.1.title')      // → 'Blind Sweep'
 *   i18n.applyToDOM()                // Re-renders all [data-i18n] elements
 *
 * Fallback chain: requested locale → 'en' → 'ru'
 */

window.i18n = (() => {
  let _current = 'ru';

  // ── helpers ─────────────────────────────────────────────────────────────
  function _get(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
  }

  function _locale(lang) {
    return window.LOCALES && window.LOCALES[lang];
  }

  function _supportedLocales() {
    return ['ru', 'en', 'de', 'fr', 'hu', 'es', 'zh'];
  }

  function _normalizeBrowserLang(lang) {
    if (!lang || typeof lang !== 'string') return null;

    const supported = _supportedLocales();
    const lower = lang.toLowerCase().trim();

    // Exact match
    if (supported.includes(lower)) return lower;

    // Chinese variants: zh-CN, zh-TW, zh-Hans, zh-Hant etc.
    if (lower.startsWith('zh')) return 'zh';

    // Primary subtag match: de-DE -> de, fr-CA -> fr
    const primary = lower.split('-')[0];
    if (supported.includes(primary)) return primary;

    return null;
  }

  // ── public API ───────────────────────────────────────────────────────────
  function setLocale(lang) {
    if (!_locale(lang)) {
      console.warn(`[i18n] Locale "${lang}" not loaded — falling back to "ru".`);
      lang = 'ru';
    }

    _current = lang;

    // Update <html> lang attribute and rendering hint
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-locale', lang);

    // Persist choice
    try {
      localStorage.setItem('i18n_locale', lang);
    } catch (e) {}

    applyToDOM();
    return lang;
  }

  function getLocale() {
    return _current;
  }

  /**
   * Translate a dot-path key.
   * Falls back: current → en → ru → key itself.
   */
  function t(key) {
    const locales = [_current, 'en', 'ru'];

    for (const lang of locales) {
      const loc = _locale(lang);
      if (!loc) continue;
      const val = _get(loc, key);
      if (val !== undefined && val !== null) return val;
    }

    return key;
  }

  /**
   * Translate a scenario-specific key.
   * t_scenario(5, 'title') → t('scenarios.5.title')
   */
  function t_scenario(id, key) {
    return t(`scenarios.${id}.${key}`);
  }

  /**
   * Apply translations to all DOM elements with [data-i18n] attributes.
   * Also handles [data-i18n-placeholder] for input elements.
   */
  function applyToDOM() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);

      // Important:
      // allow empty string to overwrite previous content
      if (val !== undefined && val !== null && val !== key) {
        el.textContent = val;
      }
    });

    // Placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);

      if (val !== undefined && val !== null && val !== key) {
        el.setAttribute('placeholder', val);
      }
    });

    // Page title
    const titleKey = 'meta.title';
    const titleVal = t(titleKey);
    if (titleVal !== undefined && titleVal !== null && titleVal !== titleKey) {
      document.title = titleVal;
    }
  }

  /**
   * Initialise:
   * 1. Try saved preference
   * 2. Otherwise detect from browser languages
   * 3. Fall back to 'ru'
   */
  function init() {
    const supported = _supportedLocales();
    let lang = 'ru';
    let saved = null;

    try {
      saved = localStorage.getItem('i18n_locale');
    } catch (e) {}

    if (saved && supported.includes(saved) && _locale(saved)) {
      lang = saved;
    } else {
      const browserCandidates = [
        ...(Array.isArray(navigator.languages) ? navigator.languages : []),
        navigator.language,
        navigator.userLanguage
      ].filter(Boolean);

      for (const candidate of browserCandidates) {
        const normalized = _normalizeBrowserLang(candidate);
        if (normalized && _locale(normalized)) {
          lang = normalized;
          break;
        }
      }
    }

    setLocale(lang);
  }

  return {
    setLocale,
    getLocale,
    t,
    t_scenario,
    applyToDOM,
    init
  };
})();