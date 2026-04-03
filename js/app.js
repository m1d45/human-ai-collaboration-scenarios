/**
 * app.js — Main application logic.
 * Filter questionnaire lives in a modal; active answers shown as chips in the filter bar.
 */

(function () {
  'use strict';

  // ── State ──────────────────────────────────────────────────────────────────
  const answers = {
    stage: null, expertise: null, speed: null, motivation: null, cost: null
  };

  let searchQuery = '';
  let isListView  = false;

  // ── i18n helpers ───────────────────────────────────────────────────────────
  const t  = key       => i18n.t(key);
  const ts = (id, key) => i18n.t_scenario(id, key);
  const tArr = (id, key) => { const v = ts(id, key); return Array.isArray(v) ? v : []; };

  // ── Chip labels for active filters ─────────────────────────────────────────
  const CHIP_LABEL_KEYS = {
    stage: {
      research: 'ui.questionnaire.q1.research',
      impl:     'ui.questionnaire.q1.impl'
    },
    expertise: {
      low:  'ui.questionnaire.q2.low',
      high: 'ui.questionnaire.q2.high'
    },
    speed: {
      low:  'ui.questionnaire.q3.low',
      high: 'ui.questionnaire.q3.high'
    },
    motivation: {
      low:  'ui.questionnaire.q4.low',
      high: 'ui.questionnaire.q4.high'
    },
    cost: {
      low:  'ui.questionnaire.q5.low',
      high: 'ui.questionnaire.q5.high'
    }
  };

  function chipLabel(question, value) {
    const full = t(CHIP_LABEL_KEYS[question][value]);
    // Trim to first fragment before '—' dash for brevity
    return full.split('—')[0].split('–')[0].trim();
  }

  // ── DOM references ─────────────────────────────────────────────────────────
  const $  = id => document.getElementById(id);
  const $$ = sel => document.querySelectorAll(sel);

  // ── Rendering helpers ───────────────────────────────────────────────────────
  function buildCodeDots(scenario) {
    const cls = scenario.mode;
    return scenario.code_b.split('').map(b =>
      `<span class="code-dot ${b === '1' ? 'on-' + cls : ''}"></span>`
    ).join('');
  }

  function buildAttrChips(scenario) {
  const defs = [
    { key: 'expertise' },
    { key: 'speed' },
    { key: 'motivation' },
    { key: 'cost' }
  ];

  return defs.map(d => {
    const val = scenario[d.key];
    const label = t(`attr_chips.${d.key}.${val}`);

    return `<span class="attr-chip ${val}">${label !== `attr_chips.${d.key}.${val}` ? label : `${d.key}:${val}`}</span>`;
  }).join('');
}

  function getCodeA(scenario) {
    const key = `codes.a.${scenario.id}`;
    const v = i18n.t(key);
    return (v !== key) ? v : scenario.code_b;
  }

  // ── Card HTML ───────────────────────────────────────────────────────────────
  function buildCard(s) {
    const mc      = s.mode;
    const stageCls = s.stage === 'research' ? 'research' : 'impl';
    const num     = String(s.id).padStart(2, '0');
    const codeA   = getCodeA(s);
    const title   = ts(s.id, 'title');
    const humanRole = ts(s.id, 'human_role');
    const aiRole    = ts(s.id, 'ai_role');

    if (isListView) {
      return `
        <div class="card ${mc}" data-id="${s.id}"
          data-stage="${s.stage}" data-expertise="${s.expertise}"
          data-speed="${s.speed}" data-motivation="${s.motivation}" data-cost="${s.cost}">
          <div class="card-num-large">${num}</div>
          <div>
            <div class="card-top">
              <div></div>
              <div class="card-badges">
                <span class="badge ${stageCls}">${t('ui.stages.' + s.stage)}</span>
                <span class="badge ${mc}">${t('ui.modes.' + mc)}</span>
              </div>
            </div>
            <div class="card-title">${title}</div>
            <div class="card-code"><span>${codeA}</span><div class="code-dots">${buildCodeDots(s)}</div></div>
          </div>
        </div>`;
    }

    return `
      <div class="card ${mc}" data-id="${s.id}"
        data-stage="${s.stage}" data-expertise="${s.expertise}"
        data-speed="${s.speed}" data-motivation="${s.motivation}" data-cost="${s.cost}">

        <div class="card-top">
          <span class="card-num">С-${num}</span>
          <div class="card-badges">
            <span class="badge ${stageCls}">${t('ui.stages.' + s.stage)}</span>
            <span class="badge ${mc}">${t('ui.modes.' + mc)}</span>
          </div>
        </div>

        <div class="card-title">${title}</div>
        <div class="card-code"><span>${codeA}</span><div class="code-dots">${buildCodeDots(s)}</div></div>

        <hr class="card-divider">
        <div class="card-section-label">${t('ui.card.human_role')}</div>
        <div class="card-text">${humanRole}</div>

        <div class="card-expandable">
          <hr class="card-divider">
          <div class="card-section-label">${t('ui.card.ai_role')}</div>
          <div class="card-text">${aiRole}</div>
        </div>

        <button class="expand-btn" data-id="${s.id}">
          <span class="expand-icon">+</span>
          <span class="expand-label">${t('ui.card.expand')}</span>
        </button>
      </div>`;
  }

  function renderCards() {
    const grid = $('cardsGrid');
    grid.className = 'cards-grid' + (isListView ? ' list-view' : '');
    grid.innerHTML = window.SCENARIOS_DATA.map(buildCard).join('');
    applyFilters();
  }

  // ── Filter logic ────────────────────────────────────────────────────────────
  function applyFilters() {
    let visible = 0;

    $$('.card').forEach(card => {
      let show = true;

      if (answers.stage      && card.dataset.stage      !== answers.stage)      show = false;
      if (answers.expertise  && card.dataset.expertise  !== answers.expertise)  show = false;
      if (answers.speed      && card.dataset.speed      !== answers.speed)      show = false;
      if (answers.motivation && card.dataset.motivation !== answers.motivation) show = false;
      if (answers.cost       && card.dataset.cost       !== answers.cost)       show = false;

      if (searchQuery && show) {
        const id  = parseInt(card.dataset.id);
        const q   = searchQuery.toLowerCase();
        const txt = [
          t(`scenarios.${id}.title`),
          t(`scenarios.${id}.human_role`),
          t(`scenarios.${id}.ai_role`),
          t(`scenarios.${id}.logic`),
          ...tArr(id, 'examples')
        ].join(' ').toLowerCase();
        if (!txt.includes(q)) show = false;
      }

      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });

    // Update counters (bar + modal footer)
    $('visibleCount').textContent      = visible;
    const mc = $('visibleCountModal');
    if (mc) mc.textContent = visible;

    $('emptyState').classList.toggle('visible', visible === 0);

    // Update chips in filter bar
    renderFilterChips();

    // Update filter button state
    const count = Object.values(answers).filter(Boolean).length;
    const btn   = $('filterOpenBtn');
    const badge = $('filterAnsweredBadge');

    btn.classList.toggle('has-answers', count > 0);
    badge.style.display   = count > 0 ? '' : 'none';
    badge.textContent     = count > 0 ? `${count}/5` : '';

    // Show/hide reset
    $('resetBtn').style.display = count > 0 || searchQuery ? '' : 'none';
  }

  // ── Chips rendering ─────────────────────────────────────────────────────────
  function renderFilterChips() {
    const container = $('filterChips');
    const parts = [];

    Object.entries(answers).forEach(([question, value]) => {
      if (!value) return;
      const label = chipLabel(question, value);
      parts.push(`
        <span class="filter-chip">
          <span>${label}</span>
          <button class="filter-chip-remove" data-question="${question}" aria-label="Снять фильтр">×</button>
        </span>`);
    });

    container.innerHTML = parts.join('');

    // Remove-chip handlers
    container.querySelectorAll('.filter-chip-remove').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const q = btn.dataset.question;
        answers[q] = null;
        // Sync modal button state
        $$(`.q-option[data-question="${q}"]`).forEach(b => b.classList.remove('selected'));
        $$('.question-block').forEach(block => {
          if (block.dataset.question === q) block.classList.remove('answered');
        });
        applyFilters();
      });
    });
  }

  // ── Filter modal ────────────────────────────────────────────────────────────
  function openFilterModal() {
    $('fmodalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeFilterModal() {
    $('fmodalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  }

  // ── Questionnaire interaction ───────────────────────────────────────────────
  function handleQuestionClick(btn) {
    const question = btn.dataset.question;
    const value    = btn.dataset.value;

    if (answers[question] === value) {
      answers[question] = null;
      btn.classList.remove('selected');
    } else {
      $$`.q-option[data-question="${question}"]`.forEach(b => b.classList.remove('selected'));
      answers[question] = value;
      btn.classList.add('selected');
    }

    const block = btn.closest('.question-block');
    block.classList.toggle('answered', answers[question] !== null);

    applyFilters();
  }

  function resetAll() {
    Object.keys(answers).forEach(k => { answers[k] = null; });
    $$('.q-option').forEach(b => b.classList.remove('selected'));
    $$('.question-block').forEach(b => b.classList.remove('answered'));
    $('searchInput').value = '';
    searchQuery = '';
    applyFilters();
  }

  // ── Scenario detail modal ───────────────────────────────────────────────────
  function openModal(id) {
    const s   = window.SCENARIOS_DATA.find(x => x.id === id);
    const mc  = s.mode;
    const num = String(id).padStart(2, '0');
    const stageCls = s.stage === 'research' ? 'research' : 'impl';

    $('modalHeader').innerHTML = `
      <button class="modal-close" id="modalCloseBtn">×</button>
      <div style="display:flex;gap:0.4rem;margin-bottom:0.55rem;flex-wrap:wrap;">
        <span class="badge ${stageCls}">${t('ui.stages.' + s.stage)}</span>
        <span class="badge ${mc}">${t('ui.modes.' + mc)}</span>
      </div>
      <div style="font-family:var(--font-mono);font-size:0.52rem;color:var(--text-muted);letter-spacing:0.04em;margin-bottom:0.3rem;">
        С-${num} · ${getCodeA(s)} · ${s.code_b}
      </div>
      <div id="modalTitle" style="font-family:var(--font-serif);font-size:3rem;font-weight:400;color:var(--text);line-height:1.15;margin-bottom:0.65rem;">
        ${ts(id, 'title')}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:0.25rem;">${buildAttrChips(s)}</div>`;

    const examples = tArr(id, 'examples');
    const related  = tArr(id, 'related');

    $('modalBody').innerHTML = `
      <div class="modal-two-col modal-section">
        <div>
          <div class="modal-section-title">${t('ui.card.human_role')}</div>
          <p class="modal-text">${ts(id, 'human_role')}</p>
        </div>
        <div>
          <div class="modal-section-title">${t('ui.card.ai_role')}</div>
          <p class="modal-text">${ts(id, 'ai_role')}</p>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">${t('ui.modal.logic')}</div>
        <p class="modal-text">${ts(id, 'logic')}</p>
      </div>
      <div class="modal-two-col modal-section">
        <div>
          <div class="modal-section-title">${t('ui.modal.risk_correct')}</div>
          <div class="risk-box">
            <div class="risk-label">${t('ui.modal.risk_correct_label')}</div>
            <p class="modal-text">${ts(id, 'risk_correct')}</p>
          </div>
        </div>
        <div>
          <div class="modal-section-title">${t('ui.modal.risk_wrong')}</div>
          <div class="risk-box">
            <div class="risk-label">${t('ui.modal.risk_wrong_label')}</div>
            <p class="modal-text">${ts(id, 'risk_wrong')}</p>
          </div>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-title">${t('ui.modal.examples')}</div>
        <ul class="examples-list">${examples.map(e => `<li>${e}</li>`).join('')}</ul>
      </div>
      ${related.length ? `
      <div class="modal-section">
        <div class="modal-section-title">${t('ui.modal.related')}</div>
        <div class="related-list">
          ${related.map(r => `<button class="related-btn" data-related="${r}">${r}</button>`).join('')}
        </div>
      </div>` : ''}`;

    $('modalOverlay').classList.add('open');
    $('modal').scrollTop = 0;

    $('modalCloseBtn').addEventListener('click', closeModal);

    $$('.related-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const num = parseInt(btn.dataset.related.replace('С-','').replace('S-',''));
        closeModal();
        setTimeout(() => openModal(num), 220);
      });
    });
  }

  function closeModal() {
    $('modalOverlay').classList.remove('open');
  }

  // ── Language switcher ───────────────────────────────────────────────────────
  function initLangSwitcher() {
    const currentBtn = $('langCurrentBtn');
    const dropdown   = $('langDropdown');
    const label      = $('langCurrentLabel');

    function updateUI(lang) {
      label.textContent = lang.toUpperCase();
      $$('.lang-option').forEach(o => o.classList.toggle('active', o.dataset.lang === lang));
      currentBtn.classList.remove('open');
      dropdown.classList.remove('open');
    }

    currentBtn.addEventListener('click', e => {
      e.stopPropagation();
      const open = dropdown.classList.contains('open');
      dropdown.classList.toggle('open', !open);
      currentBtn.classList.toggle('open', !open);
      currentBtn.setAttribute('aria-expanded', String(!open));
    });

    $$('.lang-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.dataset.lang;
        i18n.setLocale(lang);
        updateUI(lang);
        renderCards();
        closeModal();
      });
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
      currentBtn.classList.remove('open');
      currentBtn.setAttribute('aria-expanded', 'false');
    });

    updateUI(i18n.getLocale());
  }

  // ── Event wiring ────────────────────────────────────────────────────────────
  function initEvents() {
    // Filter bar: open modal
    $('filterOpenBtn').addEventListener('click', openFilterModal);

    // Filter modal: close buttons + apply
    $('fmodalCloseBtn').addEventListener('click', closeFilterModal);
    $('fmodalApplyBtn').addEventListener('click', closeFilterModal);

    $('fmodalOverlay').addEventListener('click', e => {
      if (e.target === $('fmodalOverlay')) closeFilterModal();
    });

    // Questions inside modal
    $('questionsList').addEventListener('click', e => {
      const btn = e.target.closest('.q-option');
      if (btn) handleQuestionClick(btn);
    });

    // Reset
    $('resetBtn').addEventListener('click', resetAll);

    // Search
    $('searchInput').addEventListener('input', e => {
      searchQuery = e.target.value.trim();
      applyFilters();
    });

    // View toggle
    $('gridBtn').addEventListener('click', () => {
      isListView = false;
      renderCards();
      $('gridBtn').classList.add('active');
      $('listBtn').classList.remove('active');
    });

    $('listBtn').addEventListener('click', () => {
      isListView = true;
      renderCards();
      $('listBtn').classList.add('active');
      $('gridBtn').classList.remove('active');
    });

    // Cards: expand or open scenario modal
    $('cardsGrid').addEventListener('click', e => {
      const expandBtn = e.target.closest('.expand-btn');
      if (expandBtn) {
        e.stopPropagation();
        const card    = expandBtn.closest('.card');
        const expanded = card.classList.toggle('expanded');
        expandBtn.querySelector('.expand-label').textContent =
          expanded ? t('ui.card.collapse') : t('ui.card.expand');
        return;
      }
      const card = e.target.closest('.card');
      if (card) openModal(parseInt(card.dataset.id));
    });

    // Scenario detail modal: close on overlay or escape
    $('modalOverlay').addEventListener('click', e => {
      if (e.target === $('modalOverlay')) closeModal();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeModal();
        closeFilterModal();
      }
    });
  }

  // ── Bootstrap ───────────────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    i18n.init();
    initLangSwitcher();
    initEvents();
    renderCards();

    // Add 'apply' key to locales that may not have it (graceful fallback)
    // The button text falls back to i18n engine: ru→en→key
  });

})();
