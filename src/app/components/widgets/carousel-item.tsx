import { PlayCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type CarouselProps = {
    title: string
    description: string
    image: string
    year: string
    age: string
    duration: string
    rating: string
    genres: string[]
}

export default function CarouselItem(carouselProps: CarouselProps) {
  return (
    <div className=" h-[70vh] md:h-[500px] flex w-full">
          <div className="text-white flex w-3/6  flex-col text-left items-start justify-center px-12">
            <h1 className='font-semibold text-xl md:text-4xl'>{carouselProps.title}</h1>
            <div className='flex items-center space-x-3 mt-0.5 md:mt-1'>
                <span className='text-xs'>{carouselProps.year}</span>
                <span className='text-xs'>{carouselProps.age}</span>
                <span className='text-xs'>{carouselProps.duration}</span>
            </div>
            <h2 className='mt-2 md:mt-4'>Overview</h2>
            <p className='mt-0.5 text-[0.4rem] md:mt-1 md:text-sm text-neutral-400 max-h-10 md:max-h-fit text-ellipsis overflow-y-hidden'>
              {carouselProps.description}
            </p>
            <div className='mt-4 md:mt-8'>
                <button className='px-3 py-0.5 text-[0.4rem] md:text-sm md:px-6 md:py-2 flex items-center bg-white text-black rounded-full font-semibold hover:bg-transparent hover:text-white hover:outline active:outline active:outline-offset-4  active:bg-white active:text-black'>
                    <PlayCircle className='' />
                    Watch Now
                </button>
            </div>
          </div>
          <div className="relative h-full w-3/6">
            <Image
              src={carouselProps.image}
              alt="Picture of the author"
              width={1920}
              height={1080}
              className="object-cover aspect-square w-full h-full"
            />
            <div className="absolute top-0 h-full w-full bg-gradient-to-r from-black to-transparent"></div>
          </div>
        </div>

  );
}