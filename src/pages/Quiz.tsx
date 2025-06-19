import "./css/Quiz.css";
import Question from "../components/Question";
import { useState, createContext } from "react";

export type validationData = {
  name: string;
  selected: FormDataEntryValue | null;
  isCorrect: boolean | null;
};

export const QuizCtx = createContext<boolean>(false);

export default function Quiz() {
  const data = {
    response_code: 0,
    results: [
      {
        type: "bXVsdGlwbGU=",
        difficulty: "aGFyZA==",
        category: "SGlzdG9yeQ==",
        question:
          "SW4gd2hpY2ggeWVhciBkaWQgdGhlIFRva3lvIFN1YndheSBTYXJpbiBBdHRhY2sgb2NjdXI\/",
        correct_answer: "MTk5NQ==",
        incorrect_answers: ["MjAwMQ==", "MjAxMQ==", "MTk5MQ=="],
      },
      {
        type: "bXVsdGlwbGU=",
        difficulty: "bWVkaXVt",
        category: "RW50ZXJ0YWlubWVudDogTXVzaWM=",
        question:
          "SW4gd2hhdCB5ZWFyIGRpZCBVUyBiYW5kIFdlZXplciByZWxlYXNlIFdlZXplciAoVGhlIFdoaXRlIEFsYnVtKT8=",
        correct_answer: "MjAxNg==",
        incorrect_answers: ["MjAwMQ==", "MjAwOA==", "MjAxOQ=="],
      },
      {
        type: "bXVsdGlwbGU=",
        difficulty: "bWVkaXVt",
        category: "SGlzdG9yeQ==",
        question:
          "VGhlIFBhbmFtYSBDYW5hbCB3YXMgZmluaXNoZWQgdW5kZXIgdGhlIGFkbWluaXN0cmF0aW9uIG9mIHdoaWNoIFUuUy4gcHJlc2lkZW50Pw==",
        correct_answer: "V29vZHJvdyBXaWxzb24=",
        incorrect_answers: [
          "RnJhbmtsaW4gRGVsYW5vIFJvb3NldmVsdA==",
          "SGVyYmVydCBIb292ZXI=",
          "VGhlb2RvcmUgUm9vc2V2ZWx0",
        ],
      },
      {
        type: "bXVsdGlwbGU=",
        difficulty: "aGFyZA==",
        category: "RW50ZXJ0YWlubWVudDogVmlkZW8gR2FtZXM=",
        question:
          "SW4gIlRoZSBCaW5kaW5nIG9mIElzYWFjIiwgd2hpY2ggaXRlbSBpbnN0YW50bHkga2lsbHMgTW9tIGFuZCBNb20ncyBIZWFydD8=",
        correct_answer: "VGhlIEJpYmxl",
        incorrect_answers: [
          "VGhlIEhhbG8=",
          "QnJpbXN0b25l",
          "Qm9vayBvZiBTaGFkb3dz",
        ],
      },
      {
        type: "bXVsdGlwbGU=",
        difficulty: "bWVkaXVt",
        category: "RW50ZXJ0YWlubWVudDogTXVzaWM=",
        question:
          "V2hpY2ggc29uZyBtYWRlIGJ5IE1BTiBXSVRIIEEgTUlTU0lPTiB3YXMgdXNlZCBhcyB0aGUgb3BlbmluZyBmb3IgdGhlIGFuaW1lICJMb2cgSG9yaXpvbiI\/",
        correct_answer: "IkRhdGFiYXNlIg==",
        incorrect_answers: [
          "IkRlYWQgRW5kIGluIFRva3lvIg==",
          "IlJhaXNlIFlvdXIgRmxhZyI=",
          "Ik91dCBvZiBDb250cm9sIg==",
        ],
      },
    ],
  };
  // TODO: fetch data from api

  const [isRevealed, setIsRevealed] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  function handleSubmit(formData: FormData): void {
    setIsRevealed(true);
    const answers = [...formData.values()];
    const correct = data.results.filter((elm, idx) =>
      Object.is(elm.correct_answer, answers[idx])
    );
    setScore(correct.length);
  }

  function reset() {
    setIsRevealed(false);
    setScore(null);
  }

  return (
    <QuizCtx value={isRevealed}>
      <form action={handleSubmit} className="quiz">
        {data.results.map((elm) => (
          <Question
            key={elm.question}
            question={elm.question}
            correct={elm.correct_answer}
            incorrects={elm.incorrect_answers}
          />
        ))}

        {score != null ? (
          <div className="feedback">
            <p className="title-2">
              You scored {`${score} / ${data.results.length}`} correct answers
            </p>
            <button
              onClick={reset}
              className="btn btn--md btn--cta quiz__submit"
            >
              Play again
            </button>
          </div>
        ) : (
          <button className="btn btn--md btn--cta quiz__submit">
            Check answers
          </button>
        )}
      </form>
    </QuizCtx>
  );
}
