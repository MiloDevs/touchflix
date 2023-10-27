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
      <section id="header" className="relative">
        <div className="absolute w-full h-full -z-10">
          <div className="relative h-full w-full">
            <Image
              src={
                "https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/05d8322d-7649-4429-ba92-76c8b3075572/KE-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg"
              }
              alt="background"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              quality={100}
            />
            <div className="w-full h-full absolute top-0 bg-gradient-to-b from-black via-transparent/10 to-tranparent">

            </div>
          </div>
        </div>

        <div className="h-[70vh] md:h-[95vh] flex w-full px-4 md:px-8 mx-auto items-center max-w-screen-xl">
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
