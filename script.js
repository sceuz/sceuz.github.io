const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = [...document.querySelectorAll('[data-nav] a')];
const sections = [...document.querySelectorAll('main section[id]')];
const scrollProgress = document.querySelector('[data-scroll-progress]');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const parallaxRoot = document.querySelector('[data-parallax-root]');
const parallaxAtmosphere = parallaxRoot?.querySelector('.hero-atmosphere');
const translate = (value) => window.portfolioI18n?.t(value) || value;

const closeMenu = ({ returnFocus = false } = {}) => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  const menuLabel = menuToggle?.querySelector('.sr-only');
  if (menuLabel) menuLabel.textContent = translate('Открыть меню');
  if (returnFocus) menuToggle?.focus();
};

let viewportFrame = 0;
const updateViewportState = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
  if (scrollProgress) {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
    scrollProgress.style.transform = `scaleX(${progress})`;
  }
  if (parallaxAtmosphere && !reducedMotion.matches) {
    const heroHeight = Math.max(parallaxRoot?.offsetHeight || window.innerHeight, 1);
    const heroScroll = Math.min(1, Math.max(0, window.scrollY / heroHeight));
    parallaxAtmosphere.style.setProperty('--ps', heroScroll.toFixed(4));
  }
  viewportFrame = 0;
};
const requestViewportUpdate = () => {
  if (!viewportFrame) viewportFrame = window.requestAnimationFrame(updateViewportState);
};
updateViewportState();
window.addEventListener('scroll', requestViewportUpdate, { passive: true });
window.addEventListener('resize', requestViewportUpdate, { passive: true });

let parallaxFrame = 0;
const parallaxPointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
const renderParallax = () => {
  parallaxPointer.x += (parallaxPointer.targetX - parallaxPointer.x) * .12;
  parallaxPointer.y += (parallaxPointer.targetY - parallaxPointer.y) * .12;
  parallaxAtmosphere?.style.setProperty('--px', parallaxPointer.x.toFixed(4));
  parallaxAtmosphere?.style.setProperty('--py', parallaxPointer.y.toFixed(4));
  const distance = Math.abs(parallaxPointer.targetX - parallaxPointer.x) + Math.abs(parallaxPointer.targetY - parallaxPointer.y);
  if (distance > .002 && !reducedMotion.matches) {
    parallaxFrame = window.requestAnimationFrame(renderParallax);
  } else {
    parallaxPointer.x = parallaxPointer.targetX;
    parallaxPointer.y = parallaxPointer.targetY;
    parallaxAtmosphere?.style.setProperty('--px', parallaxPointer.x.toFixed(4));
    parallaxAtmosphere?.style.setProperty('--py', parallaxPointer.y.toFixed(4));
    parallaxFrame = 0;
  }
};
const requestParallaxRender = () => {
  if (!parallaxFrame && !reducedMotion.matches) parallaxFrame = window.requestAnimationFrame(renderParallax);
};
parallaxRoot?.addEventListener('pointermove', (event) => {
  if (reducedMotion.matches || event.pointerType === 'touch') return;
  const rect = parallaxRoot.getBoundingClientRect();
  parallaxPointer.targetX = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width - .5) * 2));
  parallaxPointer.targetY = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height - .5) * 2));
  requestParallaxRender();
}, { passive: true });
parallaxRoot?.addEventListener('pointerleave', () => {
  parallaxPointer.targetX = 0;
  parallaxPointer.targetY = 0;
  requestParallaxRender();
});

const resetParallax = () => {
  if (!reducedMotion.matches) {
    requestViewportUpdate();
    return;
  }
  if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame);
  parallaxFrame = 0;
  parallaxPointer.x = 0;
  parallaxPointer.y = 0;
  parallaxPointer.targetX = 0;
  parallaxPointer.targetY = 0;
  parallaxAtmosphere?.style.setProperty('--px', '0');
  parallaxAtmosphere?.style.setProperty('--py', '0');
  parallaxAtmosphere?.style.setProperty('--ps', '0');
};
if (typeof reducedMotion.addEventListener === 'function') reducedMotion.addEventListener('change', resetParallax);
else reducedMotion.addListener(resetParallax);

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
  const menuLabel = menuToggle.querySelector('.sr-only');
  if (menuLabel) menuLabel.textContent = translate(isOpen ? 'Открыть меню' : 'Закрыть меню');
  if (!isOpen) window.requestAnimationFrame(() => navLinks[0]?.focus());
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  closeMenu();
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav?.classList.contains('is-open')) closeMenu({ returnFocus: true });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1120) closeMenu();
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

const counters = [...document.querySelectorAll('[data-count]')];
const setCounterValue = (element, value) => {
  const isEnglish = window.portfolioI18n?.getLanguage() === 'en';
  const formatted = element.dataset.countFormat === 'spaces'
    ? Math.round(value).toLocaleString(isEnglish ? 'en-US' : 'ru-RU').replace(/\u00a0/g, ' ')
    : String(Math.round(value));
  element.textContent = `${formatted}${element.dataset.countSuffix || ''}`;
};
const animateCounter = (element) => {
  const target = Number(element.dataset.count);
  if (!Number.isFinite(target) || element.dataset.counted === 'true') return;
  element.dataset.counted = 'true';
  element.setAttribute('aria-label', `${element.textContent.trim()}`);
  if (reducedMotion.matches) {
    setCounterValue(element, target);
    return;
  }
  const duration = target > 1000 ? 1500 : 1050;
  const start = performance.now();
  const tick = (now) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    setCounterValue(element, target * eased);
    if (progress < 1) window.requestAnimationFrame(tick);
  };
  setCounterValue(element, 0);
  window.requestAnimationFrame(tick);
};

if ('IntersectionObserver' in window) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    });
  }, { threshold: 0.45 });
  counters.forEach((counter) => counterObserver.observe(counter));
} else {
  counters.forEach(animateCounter);
}

if ('IntersectionObserver' in window) {
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
}

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
  if (pipelineDetail && !reducedMotion.matches) {
    pipelineDetail.animate(
      [
        { opacity: .25, transform: 'translateY(4px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ],
      { duration: 280, easing: 'cubic-bezier(.2,.8,.2,1)' }
    );
  }
}));

const copyButton = document.querySelector('[data-copy]');
const copyStatus = document.querySelector('[data-copy-status]');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copy);
    if (copyStatus) copyStatus.dataset.messageKey = 'Скопировано';
    if (copyStatus) copyStatus.textContent = translate('Скопировано');
  } catch {
    if (copyStatus) copyStatus.dataset.messageKey = 'Скопируйте ayzatg@yandex.ru';
    if (copyStatus) copyStatus.textContent = translate('Скопируйте ayzatg@yandex.ru');
  }
  window.setTimeout(() => {
    if (copyStatus) {
      copyStatus.textContent = '';
      delete copyStatus.dataset.messageKey;
    }
  }, 2500);
});

window.addEventListener('portfolio:languagechange', () => {
  counters.forEach((counter) => {
    const target = Number(counter.dataset.count);
    if (Number.isFinite(target)) {
      setCounterValue(counter, target);
      counter.setAttribute('aria-label', counter.textContent.trim());
    }
  });
  const activePipelineNode = pipelineNodes.find((node) => node.classList.contains('is-active'));
  if (pipelineDetail && activePipelineNode) pipelineDetail.textContent = activePipelineNode.dataset.detail;
  const menuLabel = menuToggle?.querySelector('.sr-only');
  if (menuLabel) {
    menuLabel.textContent = translate(nav?.classList.contains('is-open') ? 'Закрыть меню' : 'Открыть меню');
  }
  if (copyStatus?.dataset.messageKey) copyStatus.textContent = translate(copyStatus.dataset.messageKey);
});

document.querySelector('.works-register')?.addEventListener('toggle', requestViewportUpdate);
