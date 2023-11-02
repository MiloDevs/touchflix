"use client";
import React, { useEffect, useState } from 'react'
import { MovieResponse } from '../../home/page';
import { useParams, useRouter } from "next/navigation";
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/nav/navbar/navbar';
import Footer from '@/app/components/footer/footer';
import { NavigationMenuDemo } from '@/components/nav/NavItem';
import { getSimilarMovies } from '@/app/lib/tmdb/tmdb-helper';
import ImageComponent from '@/app/components/widgets/movie-image/MovieImage';

export default function Movie () {
    const router = useRouter();
    const params = useParams();
    const movie_id = String(params.movie_id);
    const [movie, setMovie] = useState<MovieResponse | undefined>(undefined);
    const [moviesData, setMovies] = useState<MovieResponse[] | undefined>(
      undefined
    );
    const [loading, setLoading] = useState(false);

    const fetchSimilar = async () => {
      setLoading(true);
      try{
        console.log(movie_id)
        const movies = await getSimilarMovies(movie_id);
        setMovies(movies.slice(0,6));
        setLoading(false);
      }catch(error){
        console.log(error);
        setLoading(false);
      }
    }

    const getmovie = async () =>{
      try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
        });
        const data: MovieResponse = await response.data;
        setMovie(data);
        getWatch(data.original_title);
      }catch(error){
        console.log(error);
      }
    }

    const getWatch = async (title: string) => {
      try{
        const response = await axios.post("/api/watchmovie", {
          data: {
            movieName: title,
          },
        });
      }catch(error){
        console.log(error);
      }
    }
    
    useEffect(() =>{
      getmovie();
      fetchSimilar();
      setLoading(true);
    }, []);

    console.log(movie);

  return (
    <div>
      <NavigationMenuDemo />
      <div className="container mx-auto mt-20">
        <h1 className="text-white text-sm">
          <Link href="/home">Home</Link> /<Link href="/movies">Movies</Link> /
          {movie?.title}
        </h1>
        <div className="w-full mt-4 h-[500px]">
          {/* <Image
            src={`https://www.themoviedb.org/t/p/w1280/${movie?.backdrop_path}`}
            alt={movie?.title || "movie image"}
            height={1080}
            width={1920}
            className="object-contain w-full h-auto block"
          /> */}
          {/* <iframe
            className='w-full h-full'
            allowFullScreen={true}
            src="https://rabbitstream.net/embed-4/lrZCxr8TGxxV?z="
          ></iframe> */}
          <div className="w-full h-full">
            <iframe
              src="https://player.vdocipher.com/v2/?otp=20160313versUSE3236bUxDFa8VNLpZjA5zzk3YMlvlYb6nAoVxmkv2PQCASNCUG&playbackInfo=eyJ2aWRlb0lkIjoiODhlY2Q1YzNjOTU0NDJmMDhjNGZjYmU2YTE0YjdmMTQifQ=="
              className="w-full h-full"
              allowFullScreen={true}
              allow="encrypted-media *;"
            ></iframe>
          </div>
        </div>
        <h1 className="font-semibold text-xl mt-8">More Like this</h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {loading &&
            [...Array(12)].map((_, index) => (
              <div
                key={index}
                className="w-full h-56 rounded-xl animate-pulse bg-neutral-700"
              ></div>
            ))}

          {Array.isArray(moviesData) ? (
            moviesData.map((movie) => (
            <div
              key={movie.id}
              className="mt-8 cursor-pointer"
              onClick={() => {
                router.push(`/movie/${movie.id}`);
              }}
            >
              <div className="relative h-56 rounded-xl overflow-hidden">
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
          ))) : (
            <></>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

