import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG')
        return;
    
    let galleryLightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
	captionsDelay: 250,
})
    });



function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
         </a>
    </div>`
    )
    .join("");
}

