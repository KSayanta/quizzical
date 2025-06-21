import "./css/Home.css";
import { Link } from "react-router";

export default function Home() {
  return (
    <section className="home">
      <h1 className="title-1 home__heading">Quizzical</h1>
      <p className="text-2 home__description">
        The largest quiz, according to Guinness, was the "Quiz for Life", held
        at the Flanders Expo Halls in Ghent, Belgium, on 11 December 2010 with
        2,280 participants. The winning team Café De Kastaar from Leuven
        consisted of Marnix Baes, Erik Derycke, Eric Hemelaers, Bart Permentier
        and Tom Trogh.
      </p>
      <Link to="quiz" className="btn btn--cta btn--lg">
        Start Quiz
      </Link>
    </section>
  );
}
