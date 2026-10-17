const toggle = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
    toggle.textContent = open ? 'Close' : 'Menu';
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Menu'; toggle.focus();
    }
  });
}
const email = window.VITALCUE_CONFIG?.contactEmail?.trim();
const form = document.querySelector('#contact-form');
if (form && email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  form.classList.remove('hidden');
  document.querySelector('#contact-unavailable').classList.add('hidden');
  const direct = document.querySelector('#direct-email');
  direct.textContent = email; direct.href = 'mailto:' + email;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const body = `Name: ${data.get('name')}\nOrganization: ${data.get('organization')}\nReply email: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('VitalCue collaboration inquiry')}&body=${encodeURIComponent(body)}`;
    document.querySelector('#form-status').textContent = 'Your email app should open with a draft. Send it there to complete your inquiry, or use the email link below.';
  });
}
