import "./css/Home.css";
import { Link, useLoaderData } from "react-router";
import { fetchRandomFact } from "../api";
import type { randomFact } from "../types";

export async function loader() {
  const data = await fetchRandomFact();
  return data;
}

export default function Home() {
  const data = useLoaderData<randomFact>();

  return (
    <section className="home">
      <h1 className="title-1 home__heading">Quizzical</h1>
      <p className="text-2 home__description">Did you know? : {data.text}</p>

      <Link to="quiz" className="btn btn--cta btn--lg">
        Start Quiz
      </Link>
    </section>
  );
}
