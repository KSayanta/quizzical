import "./Question.css";
import { useId, useState, useContext } from "react";
import { QuizCtx } from "../pages/Quiz";

type QuestionProps = {
  question: string;
  correct: string;
  incorrects: string[];
};

export default function Question(props: QuestionProps) {
  const { question, correct, incorrects } = props;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [options] = useState<string[]>(() => {
    const arr = [correct, ...incorrects];

    // fisher-yates shuffle
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });

  const isRevealed = useContext(QuizCtx);
  const name = useId();

  const cName = (idx: number): "success" | "failure" | undefined => {
    if (isRevealed) {
      if (idx === selectedIdx) {
        // Reveal validity of selected option
        if (options[selectedIdx] === correct) {
          return "success";
        } else {
          return "failure";
        }
      } else {
        // Reveal correct answer regardless
        if (options[idx] === correct) {
          return "success";
        }
      }
    }
  };

  return (
    <div className="question">
      <p className="title-2">{atob(question)}</p>

      <div className="input-group">
        {options.map((opt, idx) => {
          return (
            <label
              key={opt}
              onChange={() => setSelectedIdx(idx)}
              className={["text-2", "option", cName(idx)].join(" ")}
            >
              {atob(opt)}

              <input
                type="radio"
                value={opt}
                name={name}
                id={`${name}-${idx}`}
                disabled={isRevealed}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
