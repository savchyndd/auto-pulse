import AchivmentUnderline from "images/icons/AchivmentUnderline";
import carImg from "../../images/car_about.png";

import "./About.scss";

const About = () => {
  return (
    <div className="about__container">
      <div className="about_desc-wrapper">
        <p className="about__description">
          We have a huge sales area of more than 5000 square metres, we have at
          least 200 cars of both domestic and foreign production in stock. The
          staff of the Altera car dealership are real professionals who know the
          peculiarities of each particular car.
        </p>
        <ul className="about__achievement">
          <li>
            150
            <AchivmentUnderline />
            <span>Vehicle In Stock</span>
          </li>
          <li>
            40
            <AchivmentUnderline />
            <span>Rental Car</span>
          </li>
          <li>
            38
            <AchivmentUnderline />
            <span>Happy Customer</span>
          </li>
          <li>
            5
            <AchivmentUnderline />
            <span>Awards</span>
          </li>
        </ul>
      </div>
      <img src={carImg} alt="Car" />
    </div>
  );
};

export default About;
