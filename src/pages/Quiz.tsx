import "./css/Quiz.css";

export default function Quiz() {
  return (
    <section>
      <form action="" className="quiz">
        <div className="question-wrapper">
          <p className="title-2 question">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum!
          </p>

          <div className="input-group">
            <label className="option text-2">
              Lorem
              <input type="radio" name="rad1" />
            </label>

            <label className="option text-2">
              Lorem, ipsum dolor.
              <input type="radio" name="rad1" />
            </label>

            <label className="option text-2">
              Lorem, ipsum dolor.
              <input type="radio" name="rad1" />
            </label>

            <label className="option text-2">
              Lorem, ipsum dolor.
              <input type="radio" name="rad1" />
            </label>
          </div>
        </div>

        <button className="btn btn--md btn--cta">Check answers</button>
      </form>
    </section>
  );
}
