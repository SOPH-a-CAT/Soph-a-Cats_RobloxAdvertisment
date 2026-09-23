const dialog = document.querySelector('#start-dialog');
document.querySelectorAll('[data-start]').forEach(button => {
  button.addEventListener('click', () => dialog.showModal());
});
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  }
});
