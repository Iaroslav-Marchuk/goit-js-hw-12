import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSlide: true,
});

export function render(images, newGallery = true) {
  const gallery = document.querySelector('.gallery');

  if (newGallery) {
    gallery.innerHTML = '';
  }

  const markup = images

    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        
        <div class="gallery-span-wrapper">
          <div class="gallery-span-wrapper-item">
            <span class="span-title">Likes</span>
            <span class="span-value">${likes}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Views</span>
            <span class="span-value">${views}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Comments</span>
            <span class="span-value">${comments}</span>
          </div>

          <div class="gallery-span-wrapper-item">
            <span class="span-title">Downloads</span>
            <span class="span-value">${downloads}</span>
          </div>
        </div>

        </a>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightBox.refresh();
}

export function scrolling() {
  const card = document.querySelector('.gallery-item');

  if (!card) {
    return;
  }

  const rect = card.getBoundingClientRect();
  const cardHeight = rect.height;

  window.scrollBy({
    top: cardHeight * 2 + 48,
    left: 0,
    behavior: 'smooth',
  });
}
