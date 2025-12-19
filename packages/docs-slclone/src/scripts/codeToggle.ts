// Toggle code panel visibility for example cards
document.querySelectorAll('.toggle-code').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.example-card');
    if (card) {
      card.classList.toggle('open');
      const panel = card.querySelector('.code-panel');
      const tooltip = btn.closest('.tooltip');
      if (card.classList.contains('open')) {
        panel?.setAttribute('aria-hidden', 'false');
        tooltip?.setAttribute('data-tip', 'Hide code');
      } else {
        panel?.setAttribute('aria-hidden', 'true');
        tooltip?.setAttribute('data-tip', 'Show code');
      }
    }
  });
});
