import thankYouImage from "/images/illustration-thank-you.svg";

export default function SuccessMessage({ userRating, submitted }) {
  return (
    <>
      <div className={`wrapper flow card text-center padding-lg ${submitted ? "" : "hidden"}`} role="status" aria-live="polite" aria-atomic="true">
        <img className="margin-center" src={thankYouImage} alt="" />

        <p className="user-rating flow--lg">You selected {userRating} out of 5</p>

        <h2 className="heading flow--lg">Thank you!</h2>

        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </>
  );
}
