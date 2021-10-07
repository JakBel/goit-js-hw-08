'use strict';

// Add imports above this line
import { galleryItems } from './gallery-items';
import _default from './../../node_modules/simplelightbox/dist/simple-lightbox';
import './../../node_modules/simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const qs = (selector) => document.querySelector(selector);

const galleryContainer = qs('.gallery');

const imagesContainer = galleryItems
  .map(
    galleryItem =>
      `<a class="gallery__item" href="${galleryItem.original}"> <img class="gallery__image" src="${galleryItem.preview}" data-caption="${galleryItem.description}" alt="${galleryItem.description}"/></a>`
  )
  .join('');
galleryContainer.insertAdjacentHTML('beforeend', imagesContainer);

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(simpleLightbox);