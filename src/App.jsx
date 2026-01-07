import "./index.css";
import RatingForm from "./components/RatingForm";
import SuccessMessage from "./components/SuccessState";
import { useState } from "react";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [userRating, setUserRating] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const rating = e.target.querySelector("input:checked").value || 0;
    console.log(rating);
    setSubmitted(true);
    setUserRating(rating);
    setTimeout(() => {
      setSubmitted(false);
    }, 10000);
  }

  return (
    <>
      <main>
        <h1 className="visually-hidden">Feedback Form</h1>
        <RatingForm onSubmit={handleSubmit} submitted={submitted} />
        <SuccessMessage userRating={userRating} submitted={submitted} />
      </main>
    </>
  );
}

export default App;
