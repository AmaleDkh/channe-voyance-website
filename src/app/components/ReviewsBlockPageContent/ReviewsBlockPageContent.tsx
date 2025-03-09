// Style
import "./ReviewsBlockPageContent.scss";

interface reviewsBlockPageContentProps {
  title: string;
  paragraph: string;
  flexVersion: string;
}

function ReviewsBlockPageContent({
  title,
  paragraph,
  flexVersion,
}: reviewsBlockPageContentProps) {
  return (
    <div className={`reviews-page-section__block ${flexVersion}`}>
      <p className="reviews-page-section__block__title">{title}</p>
      <div className="reviews-page-section__block__content">
        <div className="reviews-page-section__block__content__review">
          {paragraph}
        </div>
      </div>
    </div>
  );
}

export default ReviewsBlockPageContent;
