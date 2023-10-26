import React from "react";
import Image from "next/image";

export default function LandingNav() {
  const navigation = [{ title: "Sign In", Link: "../sign-in" }];

  return (
    <nav className="sticky top-0 z-20 bg-transparent backdrop-filter w-full backdrop-blur-md">
      <div className="px-4 my-3 ">
        <div className=" md:flex md:px-8 mx-auto flex items-center max-w-screen-xl justify-between">
          <div>
            <a href="/">
              <Image
                src="/touchflix.svg"
                width={50}
                height={50}
                alt="touchflix_svg"
              />
            </a>
          </div>
          <div>
            <ul>
              {navigation.map((item, idx) => {
                return (
                  <li key="idx">
                    <a
                      href={item.Link}
                      className="py-2 px-4 text-black bg-gray-100 hover:bg-gray-200 rounded-md shadow"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
