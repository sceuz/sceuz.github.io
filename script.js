const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = [...document.querySelectorAll('[data-nav] a')];
const sections = [...document.querySelectorAll('main section[id]')];

const closeMenu = ({ returnFocus = false } = {}) => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  const menuLabel = menuToggle?.querySelector('.sr-only');
  if (menuLabel) menuLabel.textContent = 'Открыть меню';
  if (returnFocus) menuToggle?.focus();
};

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 12);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
  const menuLabel = menuToggle.querySelector('.sr-only');
  if (menuLabel) menuLabel.textContent = isOpen ? 'Открыть меню' : 'Закрыть меню';
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  closeMenu();
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('is-open')) closeMenu({ returnFocus: true });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 760) closeMenu();
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute('href') === `#${entry.target.id}`;
      link.classList.toggle('is-active', isCurrent);
      if (isCurrent) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-42% 0px -48% 0px', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));

const pipelineDetail = document.querySelector('[data-pipeline-detail]');
const pipelineIndex = document.querySelector('[data-pipeline-index]');
const pipelineNodes = [...document.querySelectorAll('[data-pipeline-node]')];
pipelineNodes.forEach((node) => node.addEventListener('click', () => {
  pipelineNodes.forEach((item) => {
    item.classList.remove('is-active');
    item.setAttribute('aria-pressed', 'false');
  });
  node.classList.add('is-active');
  node.setAttribute('aria-pressed', 'true');
  if (pipelineDetail) pipelineDetail.textContent = node.dataset.detail;
  if (pipelineIndex) pipelineIndex.textContent = `${String(pipelineNodes.indexOf(node) + 1).padStart(2, '0')} / ${String(pipelineNodes.length).padStart(2, '0')}`;
}));

const copyButton = document.querySelector('[data-copy]');
const copyStatus = document.querySelector('[data-copy-status]');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copy);
    if (copyStatus) copyStatus.textContent = 'Скопировано';
  } catch {
    if (copyStatus) copyStatus.textContent = 'Скопируйте ayzatg@yandex.ru';
  }
  window.setTimeout(() => { if (copyStatus) copyStatus.textContent = ''; }, 2500);
});
