// https://api.themoviedb.org/3/movie/550?api_key=f9dffaa96d626d54f210b5d00bfe3c02
const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "f9dffaa96d626d54f210b5d00bfe3c02";

async function api(url) {
  const response = await fetch(url);
  return console.log(response.ok)
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function getTrending() {
  return api(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

export function getMovieByQuery(searchQuery) {
  return api(
    `${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`
  );
}

export function getMovieDetails(movieId) {
  return api(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`);
}

export function getCastMovieInfo(movieId) {
  return api(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}

export function getMovieReview(movieId, page) {
  return api(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}
