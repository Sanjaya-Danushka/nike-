import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/nav";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <PopularProducts />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <SuperQuality />
      </section>
      <section className="sm:px-16 px-8 py-10">
        <Services />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12 bg-blue-50">
        <SpecialOffers />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <CustomerReviews />
      </section>
      <section className="sm:px-16 px-8 sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="sm:px-16 px-8 sm:pt-24 pt-12 bg-black pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
