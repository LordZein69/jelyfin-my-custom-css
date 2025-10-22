// you need this to run js in jellyfin : https://github.com/n00bcodr/Jellyfin-JavaScript-Injector


(function () {
  const observer = new MutationObserver(() => {
    const container = document.querySelector('.videoPlayerContainer');
    if (container && !container.querySelector('.darkOverlay')) {
      const overlay = document.createElement('div');
      overlay.className = 'darkOverlay';
      overlay.style.cssText = `
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background: black;
        opacity: 0.4;
        pointer-events: none;
        z-index: 10;
      `;
      container.style.position = 'relative';
      container.appendChild(overlay);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
