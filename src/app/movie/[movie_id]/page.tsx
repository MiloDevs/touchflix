"use client";
import React, { useEffect, useState } from 'react'
import { MovieResponse } from '../../home/page';
import { useParams } from "next/navigation";
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

export default function Movie () {
    const params = useParams();
    const movie_id = params.movie_id;
    const [movie, setMovie] = useState<MovieResponse | undefined>(undefined);

    const getmovie = async () =>{
      try{
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
        });
        const data: MovieResponse = await response.data;
        setMovie(data);
      }catch(error){
        console.log(error);
      }
    }
    
    useEffect(() =>{
      getmovie();
    }, []);

    console.log(movie);

  return (
    <div className="container mx-auto">
      <h1 className='text-white text-sm'>
        <Link href="/home">Home</Link> /
        <Link href="/home">Movies</Link> /
        {movie?.title}
      </h1>
      <div className="w-full mt-4 h-[500px]">
          <Image
            src={`https://www.themoviedb.org/t/p/w1280/${movie?.backdrop_path}`}
            alt={movie?.title || "movie image"}
            height={1080}
            width={1920}
            className="object-contain w-full h-auto block"
          />
      </div>
    </div>
  );
};

