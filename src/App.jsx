import "./index.css";
import RatingFrom from "./components/RatingForm";
import SuccessMessage from "./components/SuccessState";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [userRating, setUserRating] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const rating = e.target.querySelector("input:checked").value;
    console.log(rating);
    setSubmitted(true);
    setUserRating(rating);
    setTimeout(() => {
      setSubmitted(false);
    }, 10000);
  }

  return (
    <>
      <h1 className="visually-hidden">Feedback Form</h1>
      {!submitted && <RatingFrom onSubmit={handleSubmit} />}
      {submitted && <SuccessMessage userRating={userRating} />}
    </>
  );
}

export default App;
