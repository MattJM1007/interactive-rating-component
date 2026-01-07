import starIcon from "/images/icon-star.svg";

export default function RatingForm({ onSubmit, submitted, hasError, clearError }) {
  return (
    <>
      <form className={`wrapper card flow padding-md ${submitted ? "hidden" : ""}`} onSubmit={onSubmit} noValidate>
        <img className="icon" src={starIcon} alt="" />

        <h2 className="heading flow--lg">How did we do?</h2>

        <p> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        <fieldset className="radio-group flex-flow space-evenly flex-wrap">
          <legend className="visually-hidden">Choose your rating</legend>
          <label className="radio-button">
            <input type="radio" name="rating" aria-required="true" value={1} onChange={clearError} /> 1
          </label>
          <label className="radio-button">
            <input type="radio" name="rating" aria-required="true" value={2} onChange={clearError} /> 2
          </label>
          <label className="radio-button">
            <input type="radio" name="rating" aria-required="true" value={3} onChange={clearError} /> 3
          </label>
          <label className="radio-button">
            <input type="radio" name="rating" aria-required="true" value={4} onChange={clearError} /> 4
          </label>
          <label className="radio-button">
            <input type="radio" name="rating" aria-required="true" value={5} onChange={clearError} /> 5
          </label>
        </fieldset>

        <p className={`error ${hasError ? "" : "hidden"}`} aria-live="polite">
          Please choose a rating from 1 to 5
        </p>

        <button className="button flow--lg" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
