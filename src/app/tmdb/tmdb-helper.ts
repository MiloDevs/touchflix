import axios from "axios";

export enum MediaType {
    Movie = "movie",
    TV = "tv",
}

export async function getGenres(mediaType: MediaType) {
  const response = await axios.get(`
https://api.themoviedb.org/3/genre/movie/list?language=en`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
      Accept: "application/json",
    },
  });

  return response.data.genres;
}

export async function getMoviesByGenre(genre: string, page: number) {
    const response = await axios.get(`
    https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&page=${page}&language=en`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
            Accept: "application/json",
        },
        });
    
        return response.data.results;
}

