import LandingNav from "./components/nav/landingnav/landing-nav";
import Footer from "./components/footer/footer";
import FAQs from "./components/widgets/FAQs/faqs";
import Info from "./components/widgets/info/info";
import Works from "./components/widgets/works/works";

export default function LandingPage() {
  return (
    <>
      <section id="header">
        <LandingNav />
        <div>
          <h1>Elevate Your Entertainment Experience !</h1>
          <h6>
            Discover a world of Movies, Series and TV shows - All in one place
          </h6>
          <div>
            <ul>
              <li key="idx">
                <a
                  href="../signup"
                  className="py-2 px-4 text-black bg-gray-100 hover:bg-gray-200 rounded-md shadow"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="wct">
        <header>
          Why Choose Touchflix
        </header>
        <div>
          <Info/>
        </div>
      </section>
      <section id="hit">
        <header>
          How it Works
        </header>
        <div>
          <Works/>
        </div>
      </section>
      <section id="FAQs">
        <header>
          FAQ&apos;s
        </header>
        <div>
          <FAQs />
        </div>
      </section>
      <Footer />
    </>
  );
}
