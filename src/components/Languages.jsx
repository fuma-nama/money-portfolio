import { Container } from "react-bootstrap";
import "./Languages.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const languages = [
  {
    img: "img/lang/js.svg",
    name: "JavaScript",
  },
  {
    img: "img/lang/ts.svg",
    name: "TypeScript",
  },
  {
    img: "img/lang/kotlin.svg",
    name: "Kotlin",
  },
  {
    img: "img/lang/rust.png",
    name: "Rust",
  },
  {
    img: "img/lang/py.svg",
    name: "Python",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Languages() {
  return (
    <Container className="lang-bg">
      <h1 className="primary-text">Programming Languages</h1>
      <p>
        I had leant many cool programming languages that is popular
        <br />
        <br />I favorite language are kotlin and rust, they provides great code
        quality and performance.
      </p>

      <Carousel
        responsive={responsive}
        infinite={true}
        className="owl-carousel owl-theme skill-slider"
      >
        {languages.map((lang) => (
          <Item {...lang} />
        ))}
      </Carousel>
    </Container>
  );
}

function Item({ img, name }) {
  return (
    <div className="item">
      <img src={img} alt={name} />
      <h5>{name}</h5>
    </div>
  );
}
