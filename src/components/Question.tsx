import "./Question.css";
import { useId } from "react";

type QuestionProps = {
  question: string;
  options: string[];
};

export default function Question({ question, options }: QuestionProps) {
  const radioName = useId();

  return (
    <div className="question">
      <p className="title-2">{atob(question)}</p>

      <div className="input-group">
        {options.map((opt) => (
          <label key={opt} className="option text-2">
            {atob(opt)}
            <input type="radio" name={radioName} />
          </label>
        ))}
      </div>
    </div>
  );
}
