import Modal from './Modal.js';

const cards = document.querySelectorAll('.card');

export default function HandleModal() {

  // Sets an id to be used in the delete route when the modal pops up. This way,
  // each delete button will pass it's id, and the modal will handle the form
  // action.
  for (const card of cards) {
    const id = card.dataset.id;
    const deleteBtn = card.querySelector('.delete');

    deleteBtn.addEventListener('click', e => {
      e.preventDefault();
      Modal.open(id);
    })
  }
}
