import { useRouteError } from "react-router";

export default function ErrorElement() {
  const error: any = useRouteError();

  return (
    <section className="wrapper grid__main fourofour">
      <p className="title-1 fourofour__title">{error.message}</p>
      <button
        onClick={() => window.location.reload()}
        className="btn btn--cta btn--md"
      >
        Refresh
      </button>
    </section>
  );
}
