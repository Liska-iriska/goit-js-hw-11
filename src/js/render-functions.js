const gallery = document.querySelector('.gallery');

function createImg(img) {
  return `
    <li class="li-item">
      <a class="link-a" href="${img.largeImageURL}">
        <img class="img-item" src="${img.webformatURL}" alt="${img.tags}">
        <div class="img-info">
          <div class="info-item">
            <p class="info-label">Likes</p>
            <p class="info-value">${img.likes}</p>
          </div>
          <div class="info-item">
            <p class="info-label">Views</p>
            <p class="info-value">${img.views}</p>
          </div>
          <div class="info-item">
            <p class="info-label">Comments</p>
            <p class="info-value">${img.comments}</p>
          </div>
          <div class="info-item">
            <p class="info-label">Downloads</p>
            <p class="info-value">${img.downloads}</p>
          </div>
        </div>
      </a>
    </li>`;
}

export function createGallery(images) {
  const markup = images.map(img => createImg(img)).join('');
  gallery.innerHTML = markup;
}

export function clearGallery() {
  gallery.innerHTML = '';
}

// function showLoader() {}

// hideLoader(){}
