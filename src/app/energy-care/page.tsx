"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import Reviews from "../components/Reviews/Reviews";
import LastSectionWithButton from "../components/LastSectionWithButton/LastSectionWithButton";
import BenefitsSection from "@/app/components/BenefitsSection/BenefitsSection";
import FrequentlyAskedQuestions from "@/app/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PlacePresentationSection from "@/app/components/PlacePresentationSection/PlacePresentationSection";
import ThreeBlocksSection from "@/app/components/ThreeBlocksSection/ThreeBlocksSection";
import PricesBlocks from "@/app/components/PricesBlocks/PricesBlocks";
import InterestsSection from "@/app/components/InterestsSection/InterestsSection";

// Style
import "../assets/style/Global.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  useBenefitsSectionData,
  useTextAndImageSectionData,
  useLastSectionsData,
  useThreeblocksSectionData,
} from "../../hooks/useData";

function EnergyCare() {
  const { energyCareIntroduction } = usePageIntroductionSectionsData();
  const lastSectionsContentArray = useLastSectionsData();
  const benefitsSectionsArray = useBenefitsSectionData();
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

      {benefitsSectionsArray && (
        <BenefitsSection
          title={benefitsSectionsArray[0]?.section_title}
          introduction={benefitsSectionsArray[0]?.section_introduction}
          image={benefitsSectionsArray[0]?.section_image}
          benefit1={benefitsSectionsArray[0]?.section_benefit_1}
          benefit2={benefitsSectionsArray[0]?.section_benefit_2}
          benefit3={benefitsSectionsArray[0]?.section_benefit_3}
          benefit4={benefitsSectionsArray[0]?.section_benefit_4}
          benefit5={benefitsSectionsArray[0]?.section_benefit_5}
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

      <PricesBlocks
        title="Durées & tarifs"
        page="Soin énergétique"
        pricesPageVersion=""
      />

      <FrequentlyAskedQuestions
        page="Soin énergétique"
        practiceName="le soin énergétique"
      />

      {PlacePresentation && (
        <PlacePresentationSection
          title={PlacePresentation.text_and_image_title}
          paragraph={PlacePresentation.text_and_image_paragraph}
          firstImage={PlacePresentation.text_and_image_first_image}
          secondImage={PlacePresentation.text_and_image_second_image}
        />
      )}

      {lastSectionsContentArray?.[1] && (
        <LastSectionWithButton
          title={lastSectionsContentArray[1].lastsection_title}
          paragraph={lastSectionsContentArray[1].lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default EnergyCare;
