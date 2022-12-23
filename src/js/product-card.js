(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-product-card-open]'),
    closeModalBtn: document.querySelector('[data-product-card-close]'),
    modal: document.querySelector('[data-product-card]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
