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
import SelfPractice from "@/app/components/SelfPractice/SelfPractice";
import InterestsSection from "@/app/components/InterestsSection/InterestsSection";

// Style
import "../assets/style/Global.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  useThreeblocksSectionData,
  useBenefitsSectionData,
  useTextAndImageSectionData,
  useLastSectionsData,
} from "../../hooks/useData";

function Meditation() {
  const { meditationIntroduction } = usePageIntroductionSectionsData();
  const { meditationAdvantagesContent } = useThreeblocksSectionData();
  const lastSectionsContentArray = useLastSectionsData();
  const benefitsSectionsArray = useBenefitsSectionData();
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

      {benefitsSectionsArray && (
        <BenefitsSection
          title={benefitsSectionsArray[1]?.section_title}
          introduction={benefitsSectionsArray[1]?.section_introduction}
          image={benefitsSectionsArray[1]?.section_image}
          benefit1={benefitsSectionsArray[1]?.section_benefit_1}
          benefit2={benefitsSectionsArray[1]?.section_benefit_2}
          benefit3={benefitsSectionsArray[1]?.section_benefit_3}
          benefit4={benefitsSectionsArray[1]?.section_benefit_4}
          benefit5={benefitsSectionsArray[1]?.section_benefit_5}
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

      <PricesBlocks
        title="Durées & tarifs"
        page="Méditation"
        pricesPageVersion=""
      />

      <FrequentlyAskedQuestions
        page="Méditation"
        practiceName="la méditation"
      />

      {PlacePresentation && (
        <PlacePresentationSection
          title={PlacePresentation.text_and_image_title}
          paragraph={PlacePresentation.text_and_image_paragraph}
          firstImage={PlacePresentation.text_and_image_first_image}
          secondImage={PlacePresentation.text_and_image_second_image}
        />
      )}

      {lastSectionsContentArray?.[2] && (
        <LastSectionWithButton
          title={lastSectionsContentArray[2].lastsection_title}
          paragraph={lastSectionsContentArray[2].lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default Meditation;
