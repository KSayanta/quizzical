import { use } from "react";
import { type question } from "../types";
import Question from "./Question";

type QuestionsProp = {
  questions: Promise<question[]>;
};

export default function Questions(props: QuestionsProp) {
  const questions = use<question[]>(props.questions);

  if (!questions.length) {
    throw { message: "Something went wrong! Please refresh page." };
  }

  return (
    <>
      {questions.map((elm) => (
        <Question
          key={elm.question}
          question={elm.question}
          correct={elm.correct_answer}
          incorrects={elm.incorrect_answers}
        />
      ))}
    </>
  );
}
