"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";


type ImageComponentProps = {
    src: string;
    alt: string;
};

export default function ImageComponent({ src, alt } : ImageComponentProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [errorKey, setErrorKey] = useState(0);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = useCallback(() => {
    setErrorKey((prevKey) => prevKey + 1); // Change the key to force a re-render
  }, []);

  return (
    <div className="relative">
      {isLoading ? (
        <div className={`w-full h-full absolute top-0 rounded-xl animate-pulse ${!isLoading ? "hidden" : " "} bg-neutral-700`} ></div>
      ) : null}

      <Image
        key={errorKey}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className="w-full object-cover rounded-xl"
        width={1920}
        height={1080}
      />
    </div>
  );
}
