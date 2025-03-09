// Style
import "./ReviewsPageContent.scss";

// Component
import ReviewsBlockPageContent from "../ReviewsBlockPageContent/ReviewsBlockPageContent";

// Custom hook
import { useReviewsData } from "../../../hooks/useData";

function ReviewsPageContent() {
  const reviewsContentArray = useReviewsData();

  return (
    <section className="reviews-page-section">
      {reviewsContentArray.map((reviewContent, index) => (
        <div key={index}>
          <ReviewsBlockPageContent
            title={reviewContent.client_name}
            paragraph={reviewContent.client_review}
            flexVersion=""
          />
        </div>
      ))}
    </section>
  );
}

export default ReviewsPageContent;
