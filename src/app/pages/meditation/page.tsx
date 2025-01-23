"use client";

// Components
import Layout from "../../components/Layout/Layout";
import LargeImageContainer from "../../components/LargeImageContainer/LargeImageContainer";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";
import ThreeBlocksSection from "../../components/ThreeBlocksSection/ThreeBlocksSection";
import Reviews from "../../components/Reviews/Reviews";
import LastSectionWithButton from "../../components/LastSectionWithButton/LastSectionWithButton";
import BenefitsSection from "@/app/components/BenefitsSection/BenefitsSection";

// Style
import "../../assets/Global.scss";

// Custom hooks
import {
  useLargeImageContainerSectionsData,
  usePageIntroductionSectionsData,
  useThreeblocksSectionData,
  useBenefitsSectionData,
  useLastSectionsData,
} from "../../../hooks/useData";

function Meditation() {
  const { aboutLargeImage } = useLargeImageContainerSectionsData();
  const { meditationIntroduction } = usePageIntroductionSectionsData();
  const { meditationAdvantagesContent } = useThreeblocksSectionData();
  const { meditationLastContent } = useLastSectionsData();
  const { meditationBenefitsContent } = useBenefitsSectionData();

  return (
    <Layout>
      {aboutLargeImage && (
        <LargeImageContainer image={aboutLargeImage.banner_image} title="" />
      )}

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

      {meditationAdvantagesContent && (
        <ThreeBlocksSection
          sectionIntroduction={meditationAdvantagesContent.section_introduction}
          image1={meditationAdvantagesContent.bloc_1_image}
          title1={meditationAdvantagesContent.bloc_1_titre}
          paragraph1={meditationAdvantagesContent.bloc_1_paragraph}
          image2={meditationAdvantagesContent.bloc_2_image}
          title2={meditationAdvantagesContent.bloc_2_titre}
          paragraph2={meditationAdvantagesContent.bloc_3_paragraph}
          image3={meditationAdvantagesContent.bloc_3_image}
          title3={meditationAdvantagesContent.bloc_3_titre}
          paragraph3={meditationAdvantagesContent.bloc_3_paragraph}
          flexVersion="column-version"
        />
      )}

      <Reviews />

      {meditationLastContent && (
        <LastSectionWithButton
          title={meditationLastContent.lastsection_title}
          paragraph={meditationLastContent.lastsection_paragraph}
        />
      )}
    </Layout>
  );
}

export default Meditation;
