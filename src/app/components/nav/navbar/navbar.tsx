"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Home", Link: "#" },
    { title: "Genre", Link: "#" },
    { title: "Movies", Link: "#" },
    { title: "Series", Link: "#" },
  ];

  return (
    <nav>
      <div>
        <div>
          <a href="/">
            <Image
              src="/touchflix.svg"
              width={500}
              height={500}
              alt="touchflix_svg"
            />
          </a>
          <div>
            <button>
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
        <div>
            <ul>
                {navigation.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <a href={item.Link}>{item.title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
        <div>
            {/* Search Box */}
        </div>
        <div>
            {/* User Icon */}
        </div>
      </div>
    </nav>
  );
}