import { getImagesByQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
// const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', e => {
  e.preventDefault();

  const query = e.currentTarget.elements['search-text'].value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Please fill in the search field!',
      position: 'topRight',
    });
    return;
  }

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });

  form.reset();
});
