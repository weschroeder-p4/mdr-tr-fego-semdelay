/* ===========================================
   Manual do Relacionamento Saudável
   =========================================== */

// Ano dinâmico no footer
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // FAQ: fecha um item quando outro é aberto (opcional)
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  const animateSelectors = [
    '.pain-card',
    '.testimonial',
    '.modulo',
    '.passo',
    '.bonus-card',
    '.amp-card',
    '.d-node',
    '.stack-item'
  ];

  animateSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  });

  // Vídeo Vturb já é injetado no HTML — nada a fazer aqui
});
