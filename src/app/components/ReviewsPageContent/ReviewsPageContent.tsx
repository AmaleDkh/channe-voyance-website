// Style
import "./ReviewsPageContent.scss";

// Component
import ReviewsBlockPageContent from "../ReviewsBlockPageContent/ReviewsBlockPageContent";

function ReviewsPageContent() {
  return (
    <section className="reviews-page-section">
      <ReviewsBlockPageContent
        title="Lorem ipsum"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
        flexVersion=""
      />
      <ReviewsBlockPageContent
        title="Lorem ipsum"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
        flexVersion="reviews-page-section__block--row-reverse-version"
      />
      <ReviewsBlockPageContent
        title="Lorem ipsum"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
        flexVersion=""
      />
    </section>
  );
}

export default ReviewsPageContent;
