const container = document.querySelector('.videoPlayerContainer');
const overlay = document.createElement('div');
overlay.style.cssText = `
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: black;
  opacity: 0.4;
  pointer-events: none;
  z-index: 10;
`;
container.appendChild(overlay);
