"use client";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { BugPlay, Play, PlayCircle } from 'lucide-react';
import CarouselItem from '../components/widgets/carousel-item';

const carouselitems = [
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

export default function Home() {
  return (
    <div className="h-[500px]">
      <Carousel
        width="100%"
        autoPlay
        dynamicHeight={true}
        infiniteLoop
        showThumbs={true}
        showStatus={true}
        showIndicators={true}
        interval={5000}
        className="md:h-[500px]"
      >
        {carouselitems.map((item) => (
          <CarouselItem key={item.title} {...item} />
        ))}
      </Carousel>
    </div>
  );
}