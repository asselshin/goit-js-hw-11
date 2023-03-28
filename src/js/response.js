import Notiflix from "notiflix";
import axios from "axios";
import { getResults } from "./getresults";

const API_KEY = '34774366-d2ee02a117d0ba1fecc5cc02c';
const baseUrl = `https://pixabay.com/api/?key=${API_KEY}`;
const allPhotos = [];

export async function getResponse(searchData, pageV) {
  let queryParams = `&q=${searchData}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageV}`;
  const url = `${baseUrl}${queryParams}`;
  try {
    const response = await axios.get(url);
    if (response.data.total === 0) {
      return Notiflix.Notify.warning(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    allPhotos.push(...response.data.hits);
    if (allPhotos.length === response.data.totalHits) {
      return Notiflix.Notify.info(
        "We're sorry, but you've reached the end of search results."
      );
    }
    getResults(response.data.hits);
  } catch (error) {
    console.log('Error:', error);
  }
}