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
      <h2 className="reviews-page-section__block__title">{title}</h2>
      <div className="reviews-page-section__block__content">
        <div className="reviews-page-section__block__content__review">
          {paragraph}
        </div>
        <h3 className="reviews-page-section__block__content__name">
          Lorem ipsum
        </h3>
      </div>
    </div>
  );
}

export default ReviewsBlockPageContent;
