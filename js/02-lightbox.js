import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryImg = document.querySelector(`.gallery`);
const markup = createMarkeUp(galleryItems);

galleryImg.innerHTML = createMarkeUp(galleryItems);

function createMarkeUp(galleryItems) {
  const markUp = galleryItems
    .map(({ preview, original, description}) => {
    return `
      <a class="gallery__item"  href="${original}">
         <img
         class="gallery__image"
         src="${preview}"
         alt="${description}"
         title="${description}" 
         />
      </a>
    `;
  }).join(``);

  return markUp;
};

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });