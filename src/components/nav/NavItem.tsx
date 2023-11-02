"use client";

import React, {useState , useEffect} from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MediaType, getGenres } from "@/app/lib/tmdb/tmdb-helper";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { DropdownMenuDemo } from "@/app/components/widgets/drop-down-menu/dropdown";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

type genre = {
  id: number;
  name: string;
}

export function NavigationMenuDemo() {
      const [movieGenreData, setMovieGenreData] = useState<genre[]>([]);
      const [seriesGenreData, setSeriesGenreData] = useState<genre[]>([]);


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
    <div className="container mx-auto py-2 bg-black top-0 right-0 left-0 z-20 fixed w-full flex items-center justify-between">
      <Image
        src={"/touchflix.svg"}
        alt="touchflixlogo"
        height={20}
        width={20}
      />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Movies</NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid grid-cols-2  md:grid-cols-6 p-5 gap-y-2 text-sm md:w-[700px] w-full">
                {movieGenreData.map((genre) => (
                  <NavigationMenuLink
                    key={genre.id}
                    href={`/movies/${genre.name}/${genre.id}?page=1`}
                  >
                    {genre.name}
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Shows</NavigationMenuTrigger>

            <NavigationMenuContent
            >
              <ul className="grid grid-cols-2  md:grid-cols-6 p-5 gap-y-2 text-sm md:w-[700px] w-full">
                {seriesGenreData.map((genre) => (
                  <NavigationMenuLink
                    key={genre.id}
                    href={`/shows/${genre.name}/${genre.id}?page=1`}
                  >
                    {genre.name}
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div>
        <DropdownMenuDemo />
      </div>
    </div>
  );
}

