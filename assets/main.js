const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  toggle.textContent = expanded ? 'Menu +' : 'Close −';
  nav.classList.toggle('is-open', !expanded);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    toggle.click(); toggle.focus();
  }
});
const form = document.querySelector('#enquiry-form');
if (form) {
  const selected = new URLSearchParams(window.location.search).get('service');
  const select = form.querySelector('select');
  if ([...select.options].some(option => option.value === selected)) select.value = selected;
}
form?.addEventListener('submit', async event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\n${data.get('message')}`;
  const status = document.querySelector('#form-status');
  const address = form.dataset.email;
  if (address) {
    window.location.href = `mailto:${address}?subject=${encodeURIComponent('GOONZ project enquiry — ' + data.get('service'))}&body=${encodeURIComponent(body)}`;
    status.textContent = 'Your email app should open with your enquiry. Please review it and press Send there. Nothing has been sent by this website.';
  } else {
    try {
      await navigator.clipboard.writeText(body);
      status.textContent = 'Enquiry copied. This preview does not send messages; the business contact address is still to be confirmed.';
    } catch {
      status.textContent = 'This preview does not send messages. You can copy your enquiry below:\n\n' + body;
    }
  }
});
