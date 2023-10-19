// import About from "./About";
// import OurWork from "./OurWork";

import bg1 from "../assets/img/bg1.jpg";
import bg2 from "../assets/img/bg2.jpg";
import bg3 from "../assets/img/bg3.jpg";
import bg4 from "../assets/img/bg4.jpg";
import bg5 from "../assets/img/bg5.jpg";
import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";
import p3 from "../assets/img/p3.jpg";

import "../assets/Styles/home.css";
import Card from "../components/Card";
import { center } from "../utils/commonStyle";

const Home = () => {
  return (
    <div>
      <section className="slider">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item  active">
              <img src={bg1} className="d-block w-100 slider_img" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={bg2} className="d-block w-100 slider_img" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={bg3} className="d-block w-100 slider_img" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={bg4} className="d-block w-100 slider_img" alt="..." />
            </div>
            <div className="carousel-item ">
              <img src={bg5} className="d-block w-100 slider_img" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section style={center} className="card_Section">
        <Card
          name="Omkar More"
          position="CEO"
          des="I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"
          bg_img={bg2}
          profile_img={p1}
          job_profile="Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others..."
          Followers="458"
          Following="45"
          Projects="10"
        />
        <Card
          name="Raj Sawant"
          position="HOD"
          des="I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"
          job_profile="ReactJs ,NodeJs,MongoDb , HTML5, CSS3, Corel and many others... "
          Followers="754"
          Following="500"
          Projects="25"
          bg_img={bg4}
          profile_img={p2}
        />
        <Card
          name="Prashant Shinde"
          position="Founder"
          des="Lamborghini Mercy
Your chick she so thirsty
I'm in that two seat Lambo"
          job_profile="Web design, Adobe Photoshop, SQl , GIT , Express and many others..."
          Followers="547"
          Following="89"
          Projects="15"
          bg_img={bg5}
          profile_img={p3}
        />
      </section>
    </div>
  );
};

export default Home;
