// React element
import { useState } from "react";

// Style
import "./Reviews.scss";

// Custom hook
import { useReviewsData } from "../../../hooks/useData";

function Reviews() {
  const reviewsContentArray = useReviewsData();

  const [index, setIndex] = useState(1);

  const showPreviousProject = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? reviewsContentArray.length - 1 : prevIndex - 1
    );
  };

  const showNextProject = () => {
    setIndex((nextIndex) =>
      nextIndex === reviewsContentArray.length - 1 ? 0 : nextIndex + 1
    );
  };

  return (
    <section className="reviews-section ">
      <h2 className="reviews-section__title">Les avis de quelques clients</h2>

      <div className="reviews-section__list reviews-section--desktop-version">
        {reviewsContentArray.slice(0, 4).map((reviewContent, index) => (
          <div key={index} className="reviews-section__content">
            <h3 className="reviews-section__content__name">
              {reviewContent.client_name}
            </h3>
            <div className="reviews-section__content__review">
              {reviewContent.client_review}
            </div>
          </div>
        ))}
      </div>

      <div className="reviews-section reviews-section--mobile-version">
        <div
          onClick={showPreviousProject}
          className="reviews-section__icon-left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 arrow-left"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <div className="reviews-section__content">
          <h3 className="reviews-section__content__name">
            {reviewsContentArray[index]?.client_name}
          </h3>
          <p className="reviews-section__content__review">
            {reviewsContentArray[index]?.client_review}
          </p>
        </div>

        <div onClick={showNextProject} className="reviews-section__icon-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 arrow-right"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
