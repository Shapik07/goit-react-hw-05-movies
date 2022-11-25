import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'a7cdca3ac9a73d688c9dec2c3c2e067b',
};

export async function GetTrendingMovies() {
  const response = await axios.get('trending/movie/day');
  return response.data;
}

export async function GetSearchMovies(query) {
  const response = await axios.get(`search/movie?query=${query}`);
  return response.data;
}

export async function GetMovieDetails(id) {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
}

export async function GetMovieCredits(id) {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data;
}

export async function GetMovieReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data;
}
