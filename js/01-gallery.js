import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulContainer = document.querySelector('.gallery');
ulContainer.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
ulContainer.addEventListener('click', handelClick);

function createMarkup(arr) {
  /*
 *   Даний варіант розмітки робить посилання на картинці яке при кліку хоче завантажити картинку
 *    <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
          </a>
      </li>
 *   
*/

  return arr
    .map(
      ({ preview, original, description }) =>
        `
      <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
              />
          </a>
      </li>
    `
    )
    .join('');
}

function handelClick(event) {
  if (event.target === event.currentTarget) {
    return;
  }

  const currentProductId = event.target.dataset.source;

  const product = galleryItems.find(
    ({ original: productId }) => productId === currentProductId
  );

  const instance = basicLightbox.create(`
    <img src="${product.original}" width="800" height="600">
`);

  instance.show();
}
