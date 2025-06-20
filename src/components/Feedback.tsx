type FeedbackProps = {
  score: number | null;
  maxScore: number | null;
  reset: () => void;
};

export default function Feedback(props: FeedbackProps) {
  const { score, maxScore, reset } = props;

  if (score === null) {
    return (
      <button type="submit" className="btn btn--md btn--cta quiz__submit">
        Check answers
      </button>
    );
  }

  return (
    <div className="feedback">
      <p className="title-2">
        You scored {`${score} / ${maxScore}`} correct answers
      </p>
      <button
        onClick={reset}
        type="reset"
        className="btn btn--md btn--cta quiz__submit"
      >
        Play again
      </button>
    </div>
  );
}
