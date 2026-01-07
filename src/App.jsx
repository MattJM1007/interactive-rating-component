import "./index.css";
import RatingForm from "./components/RatingForm";
import SuccessMessage from "./components/SuccessState";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hasError, setHasError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const rating = e.target.querySelector("fieldset input:checked");
    console.log(rating);

    if (!rating) {
      setHasError(true);
      return;
    } else {
      setHasError(false);
      setUserRating(rating.value);
    }

    setSubmitted(true);

    e.target.reset();

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  }

  function clearError() {
    setHasError(false);
  }

  return (
    <>
      <main>
        <h1 className="visually-hidden">Feedback Form</h1>
        <RatingForm onSubmit={handleSubmit} submitted={submitted} hasError={hasError} clearError={clearError} />
        <SuccessMessage userRating={userRating} submitted={submitted} />
      </main>
    </>
  );
}

export default App;
