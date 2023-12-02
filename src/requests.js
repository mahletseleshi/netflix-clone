const key = "77de2174ec605f667cbf8f1b53d2124a";

const requests = {
  requestnowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
  requestRecommendations: `https://api.themoviedb.org/3/movie/movie_id/recommendations?api_key=${key}`
};

export default requests;


// const key = "77de2174ec605f667cbf8f1b53d2124a";

// const requests = {
//   requestnowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
//   requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
//   requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
//   requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
//   requestRecommendations: `https://api.themoviedb.org/3/movie/movie_id/recommendations?api_key=${key}&language=en-US&page=1`
// };

// export default requests;
// //