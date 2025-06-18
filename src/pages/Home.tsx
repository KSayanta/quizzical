import "./css/Home.css";
import { Link } from "react-router";

export default function Home() {
  return (
    <section className="home">
      <h1 className="title-1 home__heading">Quizzical</h1>
      <p className="text-3 home__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
        quisquam.
      </p>
      <Link to="quiz" className="btn btn--cta btn--lg">
        Start Quiz
      </Link>
    </section>
  );
}
