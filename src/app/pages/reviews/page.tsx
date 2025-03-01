"use client";

// Components
import Layout from "../../components/Layout/Layout";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";
import ReviewsPageContent from "@/app/components/ReviewsPageContent/ReviewsPageContent";
import LastSectionWithButton from "@/app/components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../../assets/Global.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  useLastSectionsData,
} from "../../../hooks/useData";

function Reviews() {
  const { reviewsIntroduction } = usePageIntroductionSectionsData();
  const { reviewsLastContent } = useLastSectionsData();
  return (
    <Layout>
      {reviewsIntroduction && (
        <PageIntroduction
          title={reviewsIntroduction.introduction_title}
          subtitle={reviewsIntroduction.introduction_subtitle}
        />
      )}

      <ReviewsPageContent />

      {reviewsLastContent && (
        <LastSectionWithButton
          title={reviewsLastContent.lastsection_title}
          paragraph={reviewsLastContent.lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default Reviews;
