import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulContainer = document.querySelector('.gallery');

ulContainer.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            </li>
    `
    )
    .join('');
}

ulContainer.addEventListener('click', handelClick);

const lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});

function handelClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
}
lightbox.open();
