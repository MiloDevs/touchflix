import LandingNav from "./components/nav/landingnav/landing-nav"
import Footer from "./components/footer/footer"
import FAQs from "./components/widgets/FAQs/faqs"

export default function LandingPage () {
  return (
    <>
      <section id="header">
        <LandingNav/>
        {/* Call To Action */}
      </section>
      <section id="wct">
        {/* Why Choose TouchFlix */}
      </section>
      <section id="hit">
        {/* Works Components */}
      </section>
      <section id="FAQs">
        <FAQs/>
      </section>
      <Footer />
    </>
  )
}