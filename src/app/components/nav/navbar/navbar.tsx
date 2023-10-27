"use client";
import { MediaType, getGenres } from "@/app/tmdb/tmdb-helper";
import { get } from "http";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type genre = {
  id: number;
  name: string;
}

export default function Navbar() {
  const [state, setState] = useState(false);
  const [movieGenreData, setMovieGenreData] = useState<genre[]>([]);
  const [seriesGenreData, setSeriesGenreData] = useState<genre[]>([]);
  const [moviesOpen, setMoviesOpen] = useState(false);
  const [seriesOpen, setSeriesOpen] = useState(false);

  const toggleMovies = () => {
    setMoviesOpen(!moviesOpen);
  };

  const toggleSeries = () => {
    setSeriesOpen(!seriesOpen);
  };



  const navigation = [
    { title: "Home", Link: "/home" },
    { title: "Movies", Link: "../movies" },
    { title: "Series", Link: "../series" },
  ];

  // Fetch genres when the component mounts
  const fetchMovieGenres = async () => {
    const genres = await getGenres(MediaType.Movie);
    setMovieGenreData(genres);
  };

  const fetchSeriesGenres = async () => {
    const genres = await getGenres(MediaType.TV);
    setSeriesGenreData(genres);
  };


  // Fetch genres when the component mounts
  useEffect(() => {
    fetchMovieGenres();
    fetchSeriesGenres();
  }, []);

  return (
    <nav className="sticky top-0 z-20 bg-transparent backdrop-filter w-full backdrop-blur-md">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <Image
              src="/touchflix.svg"
              width={20}
              height={20}
              alt="touchflix_svg"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-100 outline-none p-2 rounded-md focus:border focus:border-gray-300"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center relative space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-white">
                  <a href={item.Link} className="hover:text-gray-700"
                  >
                    {item.title}
                  </a>
                  {item.title === "Movies" && (
                    <ul
                     className={`grid-cols-5 ${moviesOpen ? 'grid' : 'hidden'} absolute origin-top-right top-full mt-5 w-max flex-nowrap bg-black p-4 py-6 gap-2 rounded`}>
                      {movieGenreData.map((genre) => (
                        <li key={genre?.id} className="hover:text-gray-700 flex flex-nowrap">
                          <Link  href={`/movies/${genre?.name!}/${genre?.id}?page=1`}>
                            {genre?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    )}
                    {item.title === "Series" && (
                      <ul className={`${seriesOpen ? 'grid' : 'hidden'} grid-cols-5 absolute origin-top-right top-full mt-5 bg-black p-4 py-6 gap-2 rounded`}>
                        {seriesGenreData.map((genre) => (
                          <li key={genre?.id} className="hover:text-gray-700">
                            <Link href={`/series/${genre?.name!}/${genre?.id}?page=1`}>
                              {genre?.name}
                            </Link>
                          </li>
                      ))}
                      </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div>{/* Search Box */}</div>
        <div>{/* User Icon */}</div>
      </div>
    </nav>
  );
}
