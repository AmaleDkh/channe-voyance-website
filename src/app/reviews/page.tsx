"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import ThreeBlocksSection from "@/app/components/ThreeBlocksSection/ThreeBlocksSection";
import ReviewsPageContent from "@/app/components/ReviewsPageContent/ReviewsPageContent";
import LastSectionWithButton from "@/app/components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../assets/style/Global.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  useThreeblocksSectionData,
  useLastSectionsData,
} from "../../hooks/useData";

function Reviews() {
  const { reviewsIntroduction } = usePageIntroductionSectionsData();
  const { advantagesContent, servicesContent } = useThreeblocksSectionData();
  const lastSectionsContentArray = useLastSectionsData();
  return (
    <Layout>
      {reviewsIntroduction && (
        <PageIntroduction
          title={reviewsIntroduction.introduction_title}
          subtitle={reviewsIntroduction.introduction_subtitle}
        />
      )}

      <ReviewsPageContent />

      {servicesContent && (
        <ThreeBlocksSection
          sectionTitle={servicesContent.section_title}
          sectionIntroduction={servicesContent.section_introduction}
          image1={servicesContent.bloc_1_image}
          title1={servicesContent.bloc_1_titre}
          paragraph1={servicesContent.bloc_1_paragraph}
          image2={servicesContent.bloc_2_image}
          title2={servicesContent.bloc_2_titre}
          paragraph2={servicesContent.bloc_2_paragraph}
          image3={servicesContent.bloc_3_image}
          title3={servicesContent.bloc_3_titre}
          paragraph3={servicesContent.bloc_3_paragraph}
          flexVersion=""
          withButton={true}
          firstButtonLink="/reading"
          secondButtonLink="/meditation"
          thirdbButtonLink="/energy-care"
        />
      )}

      {lastSectionsContentArray?.[0] && (
        <LastSectionWithButton
          title={lastSectionsContentArray[0].lastsection_title}
          paragraph={lastSectionsContentArray[0].lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default Reviews;
