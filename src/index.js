import { getResponse } from './js/response';
import { refs } from './js/refs';
refs.loadBtn.hidden = true;

let searchText, pageValue;

refs.formEl.addEventListener('submit', ev => {
    ev.preventDefault();
    refs.loadBtn.hidden = true;
    searchText = ev.currentTarget.elements.searchQuery.value.trim();
    refs.galleryEl.innerHTML = '';
    if (!searchText) return;
    pageValue = 1;
    getResponse(searchText, pageValue);  
    pageValue += 1;
});

refs.loadBtn.addEventListener('click', () => {
    getResponse(searchText, pageValue);
    pageValue += 1;
});