const menuToggle = document.querySelector('#menuToggle');
const mobileMenu = document.querySelector('#mobileMenu');
function closeMenu() {
  mobileMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', '메뉴 열기');
}
menuToggle.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});
mobileMenu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth >= 768) closeMenu(); });
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('header nav a')];
let pendingSection = null;
let navigationTimer;
function setActiveNavigation(active) {
  for (const link of navLinks) {
    const current = link.hash === '#' + active;
    link.classList.toggle('is-active', current);
    if (current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}
function updateNavigation() {
  if (pendingSection) { setActiveNavigation(pendingSection); return; }
  // Match the CSS anchor offset instead of using an unrelated fixed threshold.
  const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  let active = sections[0].id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= offset + 2) active = section.id;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) active = 'contact';
  setActiveNavigation(active);
}
function finishNavigation() {
  clearTimeout(navigationTimer);
  pendingSection = null;
  updateNavigation();
}
function waitForScrollToFinish() {
  clearTimeout(navigationTimer);
  navigationTimer = setTimeout(finishNavigation, 180);
}
document.addEventListener('click', event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const section = sections.find(item => '#' + item.id === link.hash);
  if (!section) return;
  pendingSection = section.id;
  setActiveNavigation(section.id);
  waitForScrollToFinish();
});
window.addEventListener('scroll', () => {
  updateNavigation();
  if (pendingSection) waitForScrollToFinish();
}, { passive: true });
window.addEventListener('hashchange', () => {
  const section = sections.find(item => '#' + item.id === window.location.hash);
  if (!section) { finishNavigation(); return; }
  pendingSection = section.id;
  setActiveNavigation(section.id);
  waitForScrollToFinish();
});
window.addEventListener('wheel', finishNavigation, { passive: true });
window.addEventListener('touchstart', finishNavigation, { passive: true });
document.addEventListener('keydown', event => {
  if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(event.key)
      && !event.target.closest('input, textarea, select, button, [role="link"]')) finishNavigation();
});
window.addEventListener('resize', updateNavigation);
window.addEventListener('load', updateNavigation);
updateNavigation();
for (const card of document.querySelectorAll('.project-card')) {
  card.addEventListener('click', event => {
    if (!event.target.closest('a, button') && !window.getSelection().toString()) window.open(card.dataset.url, '_blank', 'noopener,noreferrer');
  });
  card.addEventListener('keydown', event => {
    if (event.target === card && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      window.open(card.dataset.url, '_blank', 'noopener,noreferrer');
    }
  });
}
let toastTimer;
document.querySelector('#copyBtn').addEventListener('click', async () => {
  const toast = document.querySelector('#copyToast');
  try {
    await navigator.clipboard.writeText(document.querySelector('#emailText').textContent.trim());
    toast.textContent = '이메일 주소를 복사했습니다.';
  } catch {
    toast.textContent = '주소를 길게 누르거나 선택하여 복사해 주세요.';
  }
  toast.classList.remove('opacity-0');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add('opacity-0'), 4000);
});
document.querySelector('#contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const type = form.querySelector('#projectType').selectedOptions[0].textContent;
  const subject = `[프로필 문의] ${type} - ${data.get('name').trim()}`;
  const body = `이름: ${data.get('name').trim()}\n이메일: ${data.get('email').trim()}\n프로젝트 유형: ${type}\n\n${data.get('message').trim()}`;
  const feedback = document.querySelector('#formSuccess');
  feedback.classList.remove('hidden');
  feedback.classList.add('flex');
  window.location.href = `mailto:taekheon5494@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
