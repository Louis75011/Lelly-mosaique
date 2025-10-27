const KEY = 'lm_cookie_consent_v1';

export function getConsent() {
  try { return JSON.parse(localStorage.getItem(KEY)) || null; }
  catch { return null; }
}

export function setConsent(prefs) {
  const payload = {
    v: 1,
    ts: Date.now(),
    choices: { preferences: !!prefs.preferences, analyses: !!prefs.analyses, marketing: !!prefs.marketing }
  };
  localStorage.setItem(KEY, JSON.stringify(payload));
  document.dispatchEvent(new CustomEvent('lm:consent:update', { detail: payload }));
}

export function hasChoice() { return !!getConsent(); }
export function isAllowed(flag) { const c = getConsent(); return !!(c && c.choices && c.choices[flag]); }
