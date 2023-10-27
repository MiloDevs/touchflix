import LandingNav from "./components/nav/landingnav/landing-nav";
import Footer from "./components/footer/footer";
import FAQs from "./components/widgets/FAQs/faqs";
import Info from "./components/widgets/info/info";
import Works from "./components/widgets/works/works";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div>
      <LandingNav />
      <section
        id="header"
        className=" relative px-4 md:px-8 mx-auto items-center max-w-screen-xl"
      >
        <div className="h-[70vh] md:h-[95vh] flex w-full">
          <div className="text-white flex w-full md:w-3/4 flex-col text-left items-start md:justify-center justify-end px-6 pb-12 md:pb-0">
            <h1 className="font-semibold text-xl md:text-7xl">
              Elevate Your Entertainment Experience !
            </h1>
            <h6 className=" text-sm mt-2 md:mt-4 md:font-semibold md:text-2xl">
              Discover a world of Movies, Series and TV shows - All in one place
            </h6>
            <div className="mt-2 md:mt-4">
              <ul>
                <li>
                  <a
                    href="../signup"
                    className="py-2 px-10 text-black text-xl font-semibold md:text-2xl bg-gray-100 hover:bg-gray-400 rounded-md shadow"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="wct" className="px-4 ">
        <header className="text-center font-semibold text-xl md:text-7xl">
          Why Choose Touchflix
        </header>
        <div>
          <Info />
        </div>
      </section>
      <section id="hit" className="px-4 ">
        <header className="text-center font-semibold text-xl md:text-7xl">
          How it Works
        </header>
        <div>
          <Works />
        </div>
      </section>
      <section id="FAQs" className="px-4">
        <header className="text-center font-semibold text-xl md:text-7xl">
          FAQ&apos;s
        </header>
        <div>
          <FAQs />
        </div>
      </section>
      <Footer />
    </div>
  );
}
