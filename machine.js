const machine = document.querySelector('.machine');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');

function resetEyes() {
  machine.style.removeProperty('--eye-x');
  machine.style.removeProperty('--eye-y');
}

machine.addEventListener('pointermove', (event) => {
  if (motion.matches || !finePointer.matches) return;
  const bounds = machine.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
  const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 10;
  machine.style.setProperty('--eye-x', `${x.toFixed(1)}px`);
  machine.style.setProperty('--eye-y', `${y.toFixed(1)}px`);
});
machine.addEventListener('pointerleave', resetEyes);
motion.addEventListener('change', resetEyes);
finePointer.addEventListener('change', resetEyes);
