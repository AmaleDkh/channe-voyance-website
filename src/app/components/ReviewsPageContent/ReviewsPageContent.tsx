// Style
import "./ReviewsPageContent.scss";

// Component
import ReviewsBlockPageContent from "../ReviewsBlockPageContent/ReviewsBlockPageContent";

// Custom hook
import { useReviewsData } from "../../../hooks/useData";

function ReviewsPageContent() {
  const {
    firstReviewContent,
    secondReviewContent,
    thirdReviewContent,
    fourthReviewContent,
    fifthReviewContent,
    sixthReviewContent,
  } = useReviewsData();

  return (
    <section className="reviews-page-section">
      {firstReviewContent && (
        <ReviewsBlockPageContent
          title={firstReviewContent.client_name}
          paragraph={firstReviewContent.client_review}
          flexVersion=""
        />
      )}

      {secondReviewContent && (
        <ReviewsBlockPageContent
          title={secondReviewContent.client_name}
          paragraph={secondReviewContent.client_review}
          flexVersion=""
        />
      )}

      {thirdReviewContent && (
        <ReviewsBlockPageContent
          title={thirdReviewContent.client_name}
          paragraph={thirdReviewContent.client_review}
          flexVersion=""
        />
      )}

      {fourthReviewContent && (
        <ReviewsBlockPageContent
          title={fourthReviewContent.client_name}
          paragraph={fourthReviewContent.client_review}
          flexVersion=""
        />
      )}

      {fifthReviewContent && (
        <ReviewsBlockPageContent
          title={fifthReviewContent.client_name}
          paragraph={fifthReviewContent.client_review}
          flexVersion=""
        />
      )}

      {sixthReviewContent && (
        <ReviewsBlockPageContent
          title={sixthReviewContent.client_name}
          paragraph={sixthReviewContent.client_review}
          flexVersion=""
        />
      )}
    </section>
  );
}

export default ReviewsPageContent;
