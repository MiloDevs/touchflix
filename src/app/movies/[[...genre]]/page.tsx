"use client"
import Footer from "@/app/components/footer/footer";
import Navbar from "@/app/components/nav/navbar/navbar";
import ImageComponent from "@/app/components/widgets/movie-image/MovieImage";
import { MovieResponse } from "@/app/home/page";
import { getMovies, getMoviesByGenre } from "@/app/tmdb/tmdb-helper";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


export default function Movies() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  let genre = "0";
  let genre_id = "0";

  if (params.genre && Array.isArray(params.genre)) {
    genre = params.genre[0];
    genre_id = params.genre[1];
  }
  const page = parseInt(searchParams.get('page') || "1") || 1;
  const [moviesData, setMovies] = useState<MovieResponse[] | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

const fetchMovies = async () => {
    setLoading(true);
    try {
        if(genre === "0" && genre_id === "0"){
          const movies = await getMovies(page);
          setMovies(movies);
          console.log(movies)
          setLoading(false);
          return;
        }
        const movies = await getMoviesByGenre(genre_id.toString(), page);
        setMovies(movies);
        setLoading(false);
      } catch (error) {
          console.error("Error fetching movies:", error);
      }

    };

    useEffect(() => {
        setLoading(true);
        fetchMovies();
    }, [page]);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:px-12">
        {loading &&
          [...Array(12)].map((_, index) => (
            <div
              key={index}
              className="w-full h-56 rounded-xl animate-pulse bg-neutral-700"
            ></div>
          ))}
        {moviesData?.map((movie) => (
          <div 
            key={movie.id}
            className="mt-8 cursor-pointer"
            onClick={() => {
              router.push(`/movie/${movie.id}`);
            }}
          >
            <div
              className="relative h-56 rounded-xl overflow-hidden"
            >
            <ImageComponent
              src={`https://www.themoviedb.org/t/p/w1280/${movie.backdrop_path}`}
              alt={movie.title}
              /* onClick={() => router.push(`/movie/${movie.id}`)} */
            />
            </div>
            <div className="mt-2">
              <div className="text-lg mt-2 truncate overflow-hidden hover:text-gray-300">
                {movie.title}
              </div>
              <div className="flex items-center text-gray-400 text-sm mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 fill-current text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12.928l-4.743 2.36 1.143-5.998L2.5 7.612l5.322-.776L10 1.5l2.178 5.336 5.322.776-4.9 1.678 1.143 5.998L10 12.928z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-1">{movie.vote_average}</span>
                <span className="mx-2">|</span>
                <span className="text-sm">
                  {movie.release_date.slice(0, 4)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center py-6 mt-2 space-x-4 items-center">
        {page > 1 && (
          <button
            className="bg-neutral-800 hover:bg-neutral-600 text-white font-semibold px-4 py-2 rounded-lg"
            onClick={() =>
              router.push(`/movies/${genre}/${genre_id}?page=${page - 1}`)
            }
          >
            Previous
          </button>
        )}
        {moviesData?.length === 20 && (
          <button
            className="bg-neutral-800 hover:bg-neutral-600 text-white font-semibold px-4 py-2 rounded-lg"
            onClick={() =>
              router.push(`/movies/${genre}/${genre_id}?page=${page + 1}`)
            }
          >
            Next
          </button>
        )}
      </div>
      <Footer />
    </div>
  );
}
