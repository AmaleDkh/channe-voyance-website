"use client";

// Components
import Layout from "../../components/Layout/Layout";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";
import Reviews from "../../components/Reviews/Reviews";
import LastSectionWithButton from "../../components/LastSectionWithButton/LastSectionWithButton";
import BenefitsSection from "@/app/components/BenefitsSection/BenefitsSection";
import FrequentlyAskedQuestions from "@/app/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PlacePresentationSection from "@/app/components/PlacePresentationSection/PlacePresentationSection";
import ThreeBlocksSection from "@/app/components/ThreeBlocksSection/ThreeBlocksSection";
import PricesSection from "@/app/components/PricesSection/PricesSection";
import InterestsSection from "@/app/components/InterestsSection/InterestsSection";

// Style
import "../../assets/Global.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  useBenefitsSectionData,
  useTextAndImageSectionData,
  useFaqSectionData,
  useLastSectionsData,
  useThreeblocksSectionData,
} from "../../../hooks/useData";

function EnergyCare() {
  const { energyCareIntroduction } = usePageIntroductionSectionsData();
  const { energyCareLastContent } = useLastSectionsData();
  const { energyCareBenefitsContent } = useBenefitsSectionData();
  const { energyCareFaqContent } = useFaqSectionData();
  const { PlacePresentation, energyCareInterests } =
    useTextAndImageSectionData();
  const { energyCareStepsContent } = useThreeblocksSectionData();

  return (
    <Layout>
      {energyCareIntroduction && (
        <PageIntroduction
          title={energyCareIntroduction.introduction_title}
          subtitle={energyCareIntroduction.introduction_subtitle}
        />
      )}

      {energyCareBenefitsContent && (
        <BenefitsSection
          title={energyCareBenefitsContent.section_title}
          introduction={energyCareBenefitsContent.section_introduction}
          image={energyCareBenefitsContent.section_image}
          benefit1={energyCareBenefitsContent.section_benefit_1}
          benefit2={energyCareBenefitsContent.section_benefit_2}
          benefit3={energyCareBenefitsContent.section_benefit_3}
          benefit4={energyCareBenefitsContent.section_benefit_4}
          benefit5={energyCareBenefitsContent.section_benefit_5}
        />
      )}

      {energyCareInterests && (
        <InterestsSection
          image={energyCareInterests.text_and_image_first_image}
          title={energyCareInterests.text_and_image_title}
          paragraph={energyCareInterests.text_and_image_paragraph}
        />
      )}

      {energyCareStepsContent && (
        <ThreeBlocksSection
          sectionTitle={energyCareStepsContent.section_title}
          sectionIntroduction=""
          image1={energyCareStepsContent.bloc_1_image}
          title1={energyCareStepsContent.bloc_1_titre}
          paragraph1={energyCareStepsContent.bloc_1_paragraph}
          image2={energyCareStepsContent.bloc_2_image}
          title2={energyCareStepsContent.bloc_2_titre}
          paragraph2={energyCareStepsContent.bloc_3_paragraph}
          image3={energyCareStepsContent.bloc_3_image}
          title3={energyCareStepsContent.bloc_3_titre}
          paragraph3={energyCareStepsContent.bloc_3_paragraph}
          flexVersion=""
          withButton={false}
          firstButtonLink=""
          secondButtonLink=""
          thirdbButtonLink=""
        />
      )}

      <Reviews />

      <PricesSection />

      {energyCareFaqContent && (
        <FrequentlyAskedQuestions
          question1={energyCareFaqContent.faq_section_question1}
          answer1={energyCareFaqContent.faq_section_answer1}
          question2={energyCareFaqContent.faq_section_question2}
          answer2={energyCareFaqContent.faq_section_answer2}
          question3={energyCareFaqContent.faq_section_question3}
          answer3={energyCareFaqContent.faq_section_answer3}
          question4={energyCareFaqContent.faq_section_question4}
          answer4={energyCareFaqContent.faq_section_answer4}
          question5={energyCareFaqContent.faq_section_question5}
          answer5={energyCareFaqContent.faq_section_answer5}
          question6={energyCareFaqContent.faq_section_question6}
          answer6={energyCareFaqContent.faq_section_answer6}
          question7={energyCareFaqContent.faq_section_question7}
          answer7={energyCareFaqContent.faq_section_answer7}
          question8={energyCareFaqContent.faq_section_question8}
          answer8={energyCareFaqContent.faq_section_answer8}
          question9={energyCareFaqContent.faq_section_question9}
          answer9={energyCareFaqContent.faq_section_answer9}
          question10={energyCareFaqContent.faq_section_question10}
          answer10={energyCareFaqContent.faq_section_answer10}
          image={energyCareFaqContent.faq_section_image}
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

      {energyCareLastContent && (
        <LastSectionWithButton
          title={energyCareLastContent.lastsection_title}
          paragraph={energyCareLastContent.lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default EnergyCare;
