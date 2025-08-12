import Button from "../components/Button";
import arrowRight from "../assets/icons/arrow-right.svg";

const hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col items-center 
      justify-center min-h-screen max-w-1440px mx-auto"
    >
      <div
        className="relative xl:w-2/5 flex-col justify-center items-start
      w-full max-w-xl pt-28 sm:px-16 px-8"
      >
        <p>Our Summer Collection</p>
        <h1><span>The New Arrivals</span><br /><span>Nike</span>Shoes</h1>
        <p>Discover the latest arrivals in our summer collection</p>
      </div>
      <Button label="show now" iconUrl={arrowRight}/>
    </section>
  );
};

export default hero;
