export default function RatingFrom({ onSubmit }) {
  return (
    <>
      <form className="wrapper" onSubmit={onSubmit}>
        <img src="./images/icon-star.svg" alt="" />

        <h2>How did we do?</h2>

        <p> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <fieldset className="radio-group">
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

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
