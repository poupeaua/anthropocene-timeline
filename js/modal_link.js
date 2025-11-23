window.addEventListener('load', () => {
  if (window.location.hash) {
    const hash = window.location.hash;
    const target = document.querySelector(hash);

    if (target && target.classList.contains('hs-overlay')) {
      HSOverlay.open(target);
    }
  }
});
