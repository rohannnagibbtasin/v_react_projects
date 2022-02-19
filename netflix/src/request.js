const APIKEY = '70031e330062b072dd11b7e1d1aeba1e';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fecthTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-Us`,
    fecthActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fecthComedynMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fecthHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fecthRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fecthDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};
export default requests;
