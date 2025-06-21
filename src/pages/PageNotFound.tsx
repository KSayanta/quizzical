import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <section className="fourofour">
      <h1 className="title-1 fourofour__title">
        Sorry, the page you were looking for was not found.
      </h1>
      <Link to="/quizzical" className="btn btn--cta btn--md">
        Return to Home
      </Link>
    </section>
  );
}
