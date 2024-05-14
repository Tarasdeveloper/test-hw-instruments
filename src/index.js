import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments';

import 'basiclightbox/dist/basiclightbox.min.css';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
const favoritesArr =
  JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const cartArr = JSON.parse(localStorage.getItem(common.KEY_CART)) ?? [];

createMarkup(instruments, list);
list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product);
  }

  if (evt.target.classList.contains('js-cart')) {
    const product = findProduct(evt.target);
    cartArr.push(product);
    localStorage.setItem(common.KEY_CART, JSON.stringify(cartArr));
  }

  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target);
    const inStorage = favoritesArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }
    favoritesArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoritesArr));
  }
}

function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return instruments.find(({ id }) => id === productId);
}
