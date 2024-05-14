import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

function createModal(product) {
  const instance = basicLightbox.create(
    `
      <div class="modal">
        <img src="${product.img}" alt="${product.name}" width="300" />
        <h2>${product.name}</h2>
        <h3>${product.price} грн.</h3>
        <p>${product.description}</p>
        <div>
          <button class="js-favorite">Add to favorite</button>
          <button class="js-cart">Add to cart</button>
        </div>
      </div>
    `,
    {
      handler: null,
      onShow(instance) {
        this.handler = closeModal.bind(instance);
        document.addEventListener('keydown', this.handler);
      },

      onClose() {
        document.removeEventListener('keydown', this.handler);
      },
    }
  );
  instance.show();
}

function closeModal(evt) {
  if (evt.code === 'Escape') {
    this.close();
  }
}
export { createModal };
