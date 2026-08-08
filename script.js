document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.language-card').forEach((card) => {
    card.addEventListener('click', () => {
      card.setAttribute('aria-busy', 'true');
      window.setTimeout(() => card.removeAttribute('aria-busy'), 700);
    });
  });
});
