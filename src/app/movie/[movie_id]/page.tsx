"use client";
import React, { useEffect, useState } from 'react'
import { MovieResponse } from '../../home/page';
import { useParams } from "next/navigation";
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/nav/navbar/navbar';
import Footer from '@/app/components/footer/footer';

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
    <div>
      <Navbar />
      <div className="container mx-auto">
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
              /* src="https://player.vdocipher.com/v2/?otp=20160313versUSE3236bUxDFa8VNLpZjA5zzk3YMlvlYb6nAoVxmkv2PQCASNCUG&playbackInfo=eyJ2aWRlb0lkIjoiODhlY2Q1YzNjOTU0NDJmMDhjNGZjYmU2YTE0YjdmMTQifQ==" */
              src="https://rabbitstream.net/embed-4/J5g7hEIzXKmO?z="
              className="w-full h-full"
              allowFullScreen={true}
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

