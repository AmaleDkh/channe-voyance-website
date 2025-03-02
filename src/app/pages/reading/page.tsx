"use client";

// Components
import Layout from "../../components/Layout/Layout";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";
import ThreeBlocksSection from "../../components/ThreeBlocksSection/ThreeBlocksSection";
import Reviews from "../../components/Reviews/Reviews";
import LastSectionWithButton from "../../components/LastSectionWithButton/LastSectionWithButton";
import BenefitsSection from "@/app/components/BenefitsSection/BenefitsSection";
import FrequentlyAskedQuestions from "@/app/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PlacePresentationSection from "@/app/components/PlacePresentationSection/PlacePresentationSection";
import PricesSection from "@/app/components/PricesSection/PricesSection";
import InterestsSection from "@/app/components/InterestsSection/InterestsSection";

// Style
import "../../assets/style/Global.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  useBenefitsSectionData,
  useThreeblocksSectionData,
  useFaqSectionData,
  useTextAndImageSectionData,
  useLastSectionsData,
} from "../../../hooks/useData";

function Reading() {
  const { readingIntroduction } = usePageIntroductionSectionsData();
  const { readingAdvantagesContent } = useThreeblocksSectionData();
  const { readingLastContent } = useLastSectionsData();
  const { readingBenefitsContent } = useBenefitsSectionData();
  const { readingFaqContent } = useFaqSectionData();
  const { PlacePresentation, readingInterests } = useTextAndImageSectionData();

  return (
    <Layout>
      {readingIntroduction && (
        <PageIntroduction
          title={readingIntroduction.introduction_title}
          subtitle={readingIntroduction.introduction_subtitle}
        />
      )}

      {readingBenefitsContent && (
        <BenefitsSection
          title={readingBenefitsContent.section_title}
          introduction={readingBenefitsContent.section_introduction}
          image={readingBenefitsContent.section_image}
          benefit1={readingBenefitsContent.section_benefit_1}
          benefit2={readingBenefitsContent.section_benefit_2}
          benefit3={readingBenefitsContent.section_benefit_3}
          benefit4={readingBenefitsContent.section_benefit_4}
          benefit5={readingBenefitsContent.section_benefit_5}
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

      <PricesSection />

      {readingFaqContent && (
        <FrequentlyAskedQuestions
          question1={readingFaqContent.faq_section_question1}
          answer1={readingFaqContent.faq_section_answer1}
          question2={readingFaqContent.faq_section_question2}
          answer2={readingFaqContent.faq_section_answer2}
          question3={readingFaqContent.faq_section_question3}
          answer3={readingFaqContent.faq_section_answer3}
          question4={readingFaqContent.faq_section_question4}
          answer4={readingFaqContent.faq_section_answer4}
          question5={readingFaqContent.faq_section_question5}
          answer5={readingFaqContent.faq_section_answer5}
          question6={readingFaqContent.faq_section_question6}
          answer6={readingFaqContent.faq_section_answer6}
          question7={readingFaqContent.faq_section_question7}
          answer7={readingFaqContent.faq_section_answer7}
          question8={readingFaqContent.faq_section_question8}
          answer8={readingFaqContent.faq_section_answer8}
          question9={readingFaqContent.faq_section_question9}
          answer9={readingFaqContent.faq_section_answer9}
          question10={readingFaqContent.faq_section_question10}
          answer10={readingFaqContent.faq_section_answer10}
          image={readingFaqContent.faq_section_image}
        />
      )}

      {PlacePresentation && (
        <PlacePresentationSection
          title={PlacePresentation.text_and_image_title}
          paragraph={PlacePresentation.text_and_image_paragraph}
          firstImage={PlacePresentation.text_and_image_first_image}
          secondImage={PlacePresentation.text_and_image_second_image}
        />
      )}

      {readingLastContent && (
        <LastSectionWithButton
          title={readingLastContent.lastsection_title}
          paragraph={readingLastContent.lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default Reading;
