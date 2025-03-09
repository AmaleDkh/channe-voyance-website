"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import ThreeBlocksSection from "../components/ThreeBlocksSection/ThreeBlocksSection";
import Reviews from "../components/Reviews/Reviews";
import LastSectionWithButton from "../components/LastSectionWithButton/LastSectionWithButton";
import BenefitsSection from "@/app/components/BenefitsSection/BenefitsSection";
import FrequentlyAskedQuestions from "@/app/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PlacePresentationSection from "@/app/components/PlacePresentationSection/PlacePresentationSection";
import PricesBlocks from "@/app/components/PricesBlocks/PricesBlocks";
import InterestsSection from "@/app/components/InterestsSection/InterestsSection";

// Style
import "../assets/style/Global.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  useBenefitsSectionData,
  useThreeblocksSectionData,
  useTextAndImageSectionData,
  useLastSectionsData,
} from "../../hooks/useData";

function Reading() {
  const { readingIntroduction } = usePageIntroductionSectionsData();
  const { readingAdvantagesContent } = useThreeblocksSectionData();
  const lastSectionsContentArray = useLastSectionsData();
  const benefitsSectionsArray = useBenefitsSectionData();
  const { PlacePresentation, readingInterests } = useTextAndImageSectionData();

  return (
    <Layout>
      {readingIntroduction && (
        <PageIntroduction
          title={readingIntroduction.introduction_title}
          subtitle={readingIntroduction.introduction_subtitle}
        />
      )}

      {benefitsSectionsArray && (
        <BenefitsSection
          title={benefitsSectionsArray[2]?.section_title}
          introduction={benefitsSectionsArray[2]?.section_introduction}
          image={benefitsSectionsArray[2]?.section_image}
          benefit1={benefitsSectionsArray[2]?.section_benefit_1}
          benefit2={benefitsSectionsArray[2]?.section_benefit_2}
          benefit3={benefitsSectionsArray[2]?.section_benefit_3}
          benefit4={benefitsSectionsArray[2]?.section_benefit_4}
          benefit5={benefitsSectionsArray[2]?.section_benefit_5}
        />
      )}

      {readingInterests && (
        <InterestsSection
          image={readingInterests.text_and_image_first_image}
          title={readingInterests.text_and_image_title}
          paragraph={readingInterests.text_and_image_paragraph}
        />
      )}

      {readingAdvantagesContent && (
        <ThreeBlocksSection
          sectionTitle={readingAdvantagesContent.section_title}
          sectionIntroduction=""
          image1={readingAdvantagesContent.bloc_1_image}
          title1={readingAdvantagesContent.bloc_1_titre}
          paragraph1={readingAdvantagesContent.bloc_1_paragraph}
          image2={readingAdvantagesContent.bloc_2_image}
          title2={readingAdvantagesContent.bloc_2_titre}
          paragraph2={readingAdvantagesContent.bloc_3_paragraph}
          image3={readingAdvantagesContent.bloc_3_image}
          title3={readingAdvantagesContent.bloc_3_titre}
          paragraph3={readingAdvantagesContent.bloc_3_paragraph}
          withButton={false}
          firstButtonLink=""
          secondButtonLink=""
          thirdbButtonLink=""
          flexVersion=""
        />
      )}

      <Reviews />

      <PricesBlocks
        title="Durées & tarifs"
        page="Voyance"
        pricesPageVersion=""
      />

      <FrequentlyAskedQuestions page="Voyance" practiceName="la voyance" />

      {PlacePresentation && (
        <PlacePresentationSection
          title={PlacePresentation.text_and_image_title}
          paragraph={PlacePresentation.text_and_image_paragraph}
          firstImage={PlacePresentation.text_and_image_first_image}
          secondImage={PlacePresentation.text_and_image_second_image}
        />
      )}

      {lastSectionsContentArray?.[3] && (
        <LastSectionWithButton
          title={lastSectionsContentArray[3].lastsection_title}
          paragraph={lastSectionsContentArray[3].lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default Reading;
