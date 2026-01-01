export default function SuccessMessage({ userRating }) {
  return (
    <>
      <div className="wrapper" role="alert">
        <img src="./images/illustration-thank-you.svg" alt="" />

        <span className="user-rating">You selected {userRating} out of 5</span>

        <h2>Thank you!</h2>

        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </>
  );
}
