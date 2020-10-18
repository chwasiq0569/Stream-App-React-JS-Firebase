const API_KEY = "7f7f4abe76895cf49abdacd8093c9a27";

export const streamOriginalUrl = {
  fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
};

const requests = [
  {
    title: "STREAM ORIGINALS",
    fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    poster__Container: true,
  },
  {
    title: "TOP RATED",
    fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    poster__Container: false,
  },
  {
    title: "ACTION MOVIES",
    fetchUrl: `/discover/tv?api_key=${API_KEY}&with_genres=28`,
    poster__Container: false,
  },
  {
    title: "COMEDY MOVIES",
    fetchUrl: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    poster__Container: false,
  },
  {
    title: "HORROR MOVIES",
    fetchUrl: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
    poster__Container: false,
  },
  {
    title: "ROMANCE MOVIES",
    fetchUrl: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    poster__Container: false,
  },
  {
    title: "DOCUMENTARIES",
    fetchUrl: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
    poster__Container: false,
  },
];

export default requests;
