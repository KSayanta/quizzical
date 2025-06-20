import "./css/Quiz.css";
import { type question } from "../types";
import { useState, createContext, Suspense, useEffect, useRef } from "react";
import fetchQuestions from "../api";
import Questions from "../components/Questions";
import Feedback from "../components/Feedback";

export const QuizCtx = createContext<boolean>(false);

export default function Quiz() {
  const [questionsPromise, setQuestionsPromise] = useState<Promise<
    question[]
  > | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [maxScore, setMaxScore] = useState<number | null>(null);
  const didInit = useRef(false);

  useEffect(() => {
    if (!didInit.current) {
      setQuestionsPromise(fetchQuestions());
      didInit.current = true;
    }
  }, [didInit.current]);

  function handleSubmit(formData: FormData): void {
    setIsRevealed(true);

    (async () => {
      const questions = await questionsPromise;

      if (questions) {
        const answers = [...formData.values()];
        const correct = questions.filter((elm, idx) =>
          Object.is(elm.correct_answer, answers[idx])
        );
        setScore(correct.length);
        setMaxScore(answers.length);
      }
    })();
  }

  function reset() {
    setIsRevealed(false);
    setScore(null);
    setMaxScore(null);
    didInit.current = false;
  }

  return (
    <QuizCtx value={isRevealed}>
      <form action={handleSubmit} className="quiz">
        <Suspense
          fallback={<h2 className="loading-ui">Loading questions...</h2>}
        >
          {questionsPromise && <Questions questions={questionsPromise} />}
          <Feedback score={score} maxScore={maxScore} reset={reset} />
        </Suspense>
      </form>
    </QuizCtx>
  );
}
