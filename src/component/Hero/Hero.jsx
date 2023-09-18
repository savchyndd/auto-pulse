import carImg from "../../images/car.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero__container">
      <h1>A huge sale of the test fleet!</h1>
      <p>Find out your price!</p>

      <img src={carImg} alt="Car" />
      <div className="bg__wrapper"></div>
    </div>
  );
};

export default Hero;
