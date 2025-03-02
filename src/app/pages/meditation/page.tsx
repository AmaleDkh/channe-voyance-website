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
import SelfPractice from "@/app/components/SelfPractice/SelfPractice";
import InterestsSection from "@/app/components/InterestsSection/InterestsSection";

// Style
import "../../assets/style/Global.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  useThreeblocksSectionData,
  useBenefitsSectionData,
  useFaqSectionData,
  useTextAndImageSectionData,
  useLastSectionsData,
} from "../../../hooks/useData";

function Meditation() {
  const { meditationIntroduction } = usePageIntroductionSectionsData();
  const { meditationAdvantagesContent } = useThreeblocksSectionData();
  const { meditationLastContent } = useLastSectionsData();
  const { meditationBenefitsContent } = useBenefitsSectionData();
  const { meditationFaqContent } = useFaqSectionData();
  const { meditationPageSelfPractice } = useTextAndImageSectionData();
  const { PlacePresentation, meditationInterests } =
    useTextAndImageSectionData();

  return (
    <Layout>
      {meditationIntroduction && (
        <PageIntroduction
          title={meditationIntroduction.introduction_title}
          subtitle={meditationIntroduction.introduction_subtitle}
        />
      )}

      {meditationBenefitsContent && (
        <BenefitsSection
          title={meditationBenefitsContent.section_title}
          introduction={meditationBenefitsContent.section_introduction}
          image={meditationBenefitsContent.section_image}
          benefit1={meditationBenefitsContent.section_benefit_1}
          benefit2={meditationBenefitsContent.section_benefit_2}
          benefit3={meditationBenefitsContent.section_benefit_3}
          benefit4={meditationBenefitsContent.section_benefit_4}
          benefit5={meditationBenefitsContent.section_benefit_5}
        />
      )}

      {meditationInterests && (
        <InterestsSection
          image={meditationInterests.text_and_image_first_image}
          title={meditationInterests.text_and_image_title}
          paragraph={meditationInterests.text_and_image_paragraph}
        />
      )}

      {meditationAdvantagesContent && (
        <ThreeBlocksSection
          sectionTitle={meditationAdvantagesContent.section_title}
          sectionIntroduction=""
          image1={meditationAdvantagesContent.bloc_1_image}
          title1={meditationAdvantagesContent.bloc_1_titre}
          paragraph1={meditationAdvantagesContent.bloc_1_paragraph}
          image2={meditationAdvantagesContent.bloc_2_image}
          title2={meditationAdvantagesContent.bloc_2_titre}
          paragraph2={meditationAdvantagesContent.bloc_3_paragraph}
          image3={meditationAdvantagesContent.bloc_3_image}
          title3={meditationAdvantagesContent.bloc_3_titre}
          paragraph3={meditationAdvantagesContent.bloc_3_paragraph}
          flexVersion=""
          withButton={false}
          firstButtonLink=""
          secondButtonLink=""
          thirdbButtonLink=""
        />
      )}

      {meditationPageSelfPractice && (
        <SelfPractice
          title={meditationPageSelfPractice.text_and_image_title}
          paragraph={meditationPageSelfPractice.text_and_image_paragraph}
          firstImage={meditationPageSelfPractice.text_and_image_first_image}
          secondImage={meditationPageSelfPractice.text_and_image_second_image}
        />
      )}

      <Reviews />

      <PricesSection />

      {meditationFaqContent && (
        <FrequentlyAskedQuestions
          question1={meditationFaqContent.faq_section_question1}
          answer1={meditationFaqContent.faq_section_answer1}
          question2={meditationFaqContent.faq_section_question2}
          answer2={meditationFaqContent.faq_section_answer2}
          question3={meditationFaqContent.faq_section_question3}
          answer3={meditationFaqContent.faq_section_answer3}
          question4={meditationFaqContent.faq_section_question4}
          answer4={meditationFaqContent.faq_section_answer4}
          question5={meditationFaqContent.faq_section_question5}
          answer5={meditationFaqContent.faq_section_answer5}
          question6={meditationFaqContent.faq_section_question6}
          answer6={meditationFaqContent.faq_section_answer6}
          question7={meditationFaqContent.faq_section_question7}
          answer7={meditationFaqContent.faq_section_answer7}
          question8={meditationFaqContent.faq_section_question8}
          answer8={meditationFaqContent.faq_section_answer8}
          question9={meditationFaqContent.faq_section_question9}
          answer9={meditationFaqContent.faq_section_answer9}
          question10={meditationFaqContent.faq_section_question10}
          answer10={meditationFaqContent.faq_section_answer10}
          image={meditationFaqContent.faq_section_image}
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

      {meditationLastContent && (
        <LastSectionWithButton
          title={meditationLastContent.lastsection_title}
          paragraph={meditationLastContent.lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default Meditation;
