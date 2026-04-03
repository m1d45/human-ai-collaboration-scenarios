/**
 * data.js — Pure structural data for all 32 scenarios.
 * No content (titles, descriptions) here — that lives in locales/*.js
 *
 * Attribute values:
 *   stage:      'research' | 'impl'
 *   expertise:  'low' | 'high'
 *   speed:      'low' | 'high'
 *   motivation: 'low' | 'high'
 *   cost:       'low' | 'high'
 *   mode:       'aug' | 'coop' | 'auto'
 *
 * code_b: 5-bit string [stage][expertise][speed][motivation][cost]
 *         0 = low/research, 1 = high/impl
 */

window.SCENARIOS_DATA = [
  { id:  1, code_b: '00000', stage: 'research', expertise: 'low',  speed: 'low',  motivation: 'low',  cost: 'low',  mode: 'auto' },
  { id:  2, code_b: '00001', stage: 'research', expertise: 'low',  speed: 'low',  motivation: 'low',  cost: 'high', mode: 'auto' },
  { id:  3, code_b: '00010', stage: 'research', expertise: 'low',  speed: 'low',  motivation: 'high', cost: 'low',  mode: 'coop' },
  { id:  4, code_b: '00011', stage: 'research', expertise: 'low',  speed: 'low',  motivation: 'high', cost: 'high', mode: 'coop' },
  { id:  5, code_b: '00100', stage: 'research', expertise: 'low',  speed: 'high', motivation: 'low',  cost: 'low',  mode: 'auto' },
  { id:  6, code_b: '00101', stage: 'research', expertise: 'low',  speed: 'high', motivation: 'low',  cost: 'high', mode: 'auto' },
  { id:  7, code_b: '00110', stage: 'research', expertise: 'low',  speed: 'high', motivation: 'high', cost: 'low',  mode: 'coop' },
  { id:  8, code_b: '00111', stage: 'research', expertise: 'low',  speed: 'high', motivation: 'high', cost: 'high', mode: 'coop' },
  { id:  9, code_b: '01000', stage: 'research', expertise: 'high', speed: 'low',  motivation: 'low',  cost: 'low',  mode: 'aug'  },
  { id: 10, code_b: '01001', stage: 'research', expertise: 'high', speed: 'low',  motivation: 'low',  cost: 'high', mode: 'aug'  },
  { id: 11, code_b: '01010', stage: 'research', expertise: 'high', speed: 'low',  motivation: 'high', cost: 'low',  mode: 'aug'  },
  { id: 12, code_b: '01011', stage: 'research', expertise: 'high', speed: 'low',  motivation: 'high', cost: 'high', mode: 'aug'  },
  { id: 13, code_b: '01100', stage: 'research', expertise: 'high', speed: 'high', motivation: 'low',  cost: 'low',  mode: 'aug'  },
  { id: 14, code_b: '01101', stage: 'research', expertise: 'high', speed: 'high', motivation: 'low',  cost: 'high', mode: 'aug'  },
  { id: 15, code_b: '01110', stage: 'research', expertise: 'high', speed: 'high', motivation: 'high', cost: 'low',  mode: 'coop' },
  { id: 16, code_b: '01111', stage: 'research', expertise: 'high', speed: 'high', motivation: 'high', cost: 'high', mode: 'coop' },
  { id: 17, code_b: '10000', stage: 'impl',     expertise: 'low',  speed: 'low',  motivation: 'low',  cost: 'low',  mode: 'auto' },
  { id: 18, code_b: '10001', stage: 'impl',     expertise: 'low',  speed: 'low',  motivation: 'low',  cost: 'high', mode: 'auto' },
  { id: 19, code_b: '10010', stage: 'impl',     expertise: 'low',  speed: 'low',  motivation: 'high', cost: 'low',  mode: 'aug'  },
  { id: 20, code_b: '10011', stage: 'impl',     expertise: 'low',  speed: 'low',  motivation: 'high', cost: 'high', mode: 'aug'  },
  { id: 21, code_b: '10100', stage: 'impl',     expertise: 'low',  speed: 'high', motivation: 'low',  cost: 'low',  mode: 'auto' },
  { id: 22, code_b: '10101', stage: 'impl',     expertise: 'low',  speed: 'high', motivation: 'low',  cost: 'high', mode: 'auto' },
  { id: 23, code_b: '10110', stage: 'impl',     expertise: 'low',  speed: 'high', motivation: 'high', cost: 'low',  mode: 'coop' },
  { id: 24, code_b: '10111', stage: 'impl',     expertise: 'low',  speed: 'high', motivation: 'high', cost: 'high', mode: 'coop' },
  { id: 25, code_b: '11000', stage: 'impl',     expertise: 'high', speed: 'low',  motivation: 'low',  cost: 'low',  mode: 'aug'  },
  { id: 26, code_b: '11001', stage: 'impl',     expertise: 'high', speed: 'low',  motivation: 'low',  cost: 'high', mode: 'aug'  },
  { id: 27, code_b: '11010', stage: 'impl',     expertise: 'high', speed: 'low',  motivation: 'high', cost: 'low',  mode: 'aug'  },
  { id: 28, code_b: '11011', stage: 'impl',     expertise: 'high', speed: 'low',  motivation: 'high', cost: 'high', mode: 'aug'  },
  { id: 29, code_b: '11100', stage: 'impl',     expertise: 'high', speed: 'high', motivation: 'low',  cost: 'low',  mode: 'aug'  },
  { id: 30, code_b: '11101', stage: 'impl',     expertise: 'high', speed: 'high', motivation: 'low',  cost: 'high', mode: 'aug'  },
  { id: 31, code_b: '11110', stage: 'impl',     expertise: 'high', speed: 'high', motivation: 'high', cost: 'low',  mode: 'coop' },
  { id: 32, code_b: '11111', stage: 'impl',     expertise: 'high', speed: 'high', motivation: 'high', cost: 'high', mode: 'coop' }
];
