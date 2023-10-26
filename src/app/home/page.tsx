"use client";
import React, { useEffect, useState } from "react";
import Carousel, { CarouselProps } from "../components/widgets/carousel/carousel";
import CarouselItem from "../components/widgets/carousel/carousel";


const carouselitems: CarouselProps[]  = [
  {
    title: "Saw X",
    description:
      "Between the events of 'Saw' and 'Saw II', a sick and desperate John Kramer travels to Mexico for a risky and experimental medical procedure in hopes of a miracle cure for his cancer, only to discover the entire operation is a scam to defraud the most vulnerable. Armed with a newfound purpose, the infamous serial killer returns to his work, turning the tables on the con artists in his signature visceral way through devious, deranged, and ingenious traps.",
    image:
      "https://www.themoviedb.org/t/p/w1280/b16RAVwj2QN6RAs752UJNzQ9Of0.jpg",
    year: "2021",
    age: "18+",
    duration: "1h 30m",
    rating: "4.5",
    genres: ["Horror", "Thriller"],
  },
  {
    title: "Mission: Impossible - Dead Reckoning Part One (2023)",
    description:
      "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
    image:
      "https://www.themoviedb.org/t/p/w1280/zQdovqomlgXNgcLKNNl8yBL8Y4q.jpg",
    year: "2023",
    age: "13+",
    duration: "2h 30m",
    rating: "4.5",
    genres: ["Action", "Adventure", "Thriller"],
  },
  {
    title: "The Equalizer 3 (2023)",
    description:
      "Robert McCall finds himself at home in Southern Italy but he discovers his friends are under the control of local crime bosses. As events turn deadly, McCall knows what he has to do: become his friends' protector by taking on the mafia.",
    image:
      "https://www.themoviedb.org/t/p/w1280/2boac7AVHAFPS6rJGSTaefjwFkv.jpg",
    year: "2023",
    age: "18+",
    duration: "1h 49m",
    rating: "4.5",
    genres: ["Action", "Crime", "Thriller"],
  },
];

function fethData() {
  setTimeout(() => {
    return carouselitems;
  }, 2000);
}

export default function Home() {
  const router = useRouter();
  const [isloading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MovieResponse[] | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  setTimeout(() =>{
    setIsLoading(false);
  }, 2000);

  const fetchMovies = async () => {
      try {
        const response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
          },
        });
        
        setMovies(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching movies:", error);
        setIsLoading(false);
      }
  };

  useEffect(() =>{
     fetchMovies();
  }, [])
  console.log(movies);

  
  return (
    <div>
      <CarouselItem
        carouselProps={carouselitems}
       />
    </div>
  );

}