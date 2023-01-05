(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-ingredients-two-open]'),
    closeModalBtn: document.querySelector('[data-ingredients-close]'),
    modal: document.querySelector('[data-ingredients]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
