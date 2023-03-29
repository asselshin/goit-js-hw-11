import { getResponse } from './js/response';
import { refs } from './js/refs';
refs.loadBtn.hidden = true;

let searchText, pageValue;

refs.formEl.addEventListener('submit', ev => {
    ev.preventDefault();
    refs.loadBtn.hidden = true;
    refs.galleryEl.innerHTML = '';
    refs.allPhotos = [];
    searchText = ev.currentTarget.elements.searchQuery.value.trim();
    if (!searchText) return;
    pageValue = 1;
    getResponse(searchText, pageValue);  
    pageValue += 1;
});

refs.loadBtn.addEventListener('click', () => {
    getResponse(searchText, pageValue);
    pageValue += 1;
});