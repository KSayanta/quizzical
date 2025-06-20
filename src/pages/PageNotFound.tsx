import { Link } from "react-router";

export default function PageNotFound() {
  return (
    <main className="wrapper grid__main">
      <section className="fourofour">
        <h1 className="title-1 fourofour__title">
          Sorry, the page you were looking for was not found.
        </h1>
        <Link to="/" className="btn btn--cta btn--md">
          Return to Home
        </Link>
      </section>
    </main>
  );
}
