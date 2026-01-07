export default function RatingFrom({ onSubmit, submitted }) {
  return (
    <>
      <form className={`wrapper card flow padding-md ${submitted ? "hidden" : ""}`} onSubmit={onSubmit}>
        <img className="icon" src="./images/icon-star.svg" alt="" />

        <h2 className="heading flow--lg">How did we do?</h2>

        <p> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <fieldset className="radio-group flex-flow space-evenly flex-wrap">
          <label className="radio-button">
            <input type="radio" name="rating" required value={1} /> 1
          </label>
          <label className="radio-button">
            <input type="radio" name="rating" required value={2} /> 2
          </label>
          <label className="radio-button">
            <input type="radio" name="rating" required value={3} /> 3
          </label>
          <label className="radio-button">
            <input type="radio" name="rating" required value={4} /> 4
          </label>
          <label className="radio-button">
            <input type="radio" name="rating" required value={5} /> 5
          </label>
        </fieldset>

        <button className="button flow--lg" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
