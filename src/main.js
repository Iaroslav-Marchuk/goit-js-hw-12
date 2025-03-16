import { searchImages } from './js/pixabay-api';
import { render, scrolling } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-btn');

let currentPage = 1;
let formData = '';

form.addEventListener('submit', async event => {
  event.preventDefault();
  formData = formInput.value.trim();

  if (formData === '') {
    iziToast.warning({
      message: 'Please fill the field',
      position: 'topRight',
    });
    loadMoreBtn.hidden = true;
    render([]);
    return;
  }

  loader.hidden = false;
  currentPage = 1;

  try {
    const answer = await searchImages(formData, currentPage);
    const images = answer.hits;
    // console.log(answer.totalHits);

    if (images.length === 0) {
      render([]);
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
    } else {
      render(images, true);

      if (images.length < 15 || currentPage * 15 >= answer.totalHits) {
        loadMoreBtn.hidden = true;
        iziToast.info({
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      } else {
        loadMoreBtn.hidden = false;
      }
    }
  } catch (error) {
    render([]);
    iziToast.error({
      message: 'Something went wrong :(',
      position: 'topRight',
    });
  } finally {
    formInput.value = '';
    loader.hidden = true;
  }
});

loadMoreBtn.addEventListener('click', async event => {
  loadMoreBtn.hidden = true;
  loader.hidden = false;
  currentPage += 1;

  try {
    const answer = await searchImages(formData, currentPage);
    const images = answer.hits;

    if (images.length === 0) {
      render([]);
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }
    render(images, false);

    if (images.length < 15 || currentPage * 15 >= answer.totalHits) {
      loadMoreBtn.hidden = true;
      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      loadMoreBtn.hidden = false;
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong :(',
      position: 'topRight',
    });
  } finally {
    loader.hidden = true;
    scrolling();
  }
});
