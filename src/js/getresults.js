import { createMarkUp } from "./markup";
import { refs }  from "./refs";

export function getResults(photos) {
  const result = photos
    .map(photo => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = photo;
      return createMarkUp(
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads
      );
    })
    .join('');
  refs.galleryEl.insertAdjacentHTML('beforeend', result);
}