const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const form = document.querySelector('form#delete-contact');
const cancelBtn = modal.querySelector('.cancel');

const closeOnEsc = e => {
  const key = e.key;

  if (key == 'Escape') {
    Modal.close();
  }
};

class Modal {
  static open(id) {
    modalWrapper.classList.add('on');
    form.setAttribute('action', '/contact/delete/' + id);
    document.addEventListener('keydown', closeOnEsc);
    cancelBtn.addEventListener('click', Modal.close);
  }

  static close(e) {
    e.preventDefault();
    modalWrapper.classList.remove('on');
    cancelBtn.removeEventListener('click', Modal.close);
    document.removeEventListener('keydown', closeOnEsc);
  }
}

export default Modal;
