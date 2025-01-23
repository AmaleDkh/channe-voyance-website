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
  useBenefitsSectionData,
  useThreeblocksSectionData,
  useLastSectionsData,
} from "../../../hooks/useData";

function Reading() {
  const { aboutLargeImage } = useLargeImageContainerSectionsData();
  const { readingIntroduction } = usePageIntroductionSectionsData();
  const { readingAdvantagesContent } = useThreeblocksSectionData();
  const { readingLastContent } = useLastSectionsData();
  const { readingBenefitsContent } = useBenefitsSectionData();

  return (
    <Layout>
      {aboutLargeImage && (
        <LargeImageContainer image={aboutLargeImage.banner_image} title="" />
      )}

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

      {readingAdvantagesContent && (
        <ThreeBlocksSection
          sectionIntroduction={readingAdvantagesContent.section_introduction}
          image1={readingAdvantagesContent.bloc_1_image}
          title1={readingAdvantagesContent.bloc_1_titre}
          paragraph1={readingAdvantagesContent.bloc_1_paragraph}
          image2={readingAdvantagesContent.bloc_2_image}
          title2={readingAdvantagesContent.bloc_2_titre}
          paragraph2={readingAdvantagesContent.bloc_3_paragraph}
          image3={readingAdvantagesContent.bloc_3_image}
          title3={readingAdvantagesContent.bloc_3_titre}
          paragraph3={readingAdvantagesContent.bloc_3_paragraph}
          flexVersion="column-version"
        />
      )}

      <Reviews />

      {readingLastContent && (
        <LastSectionWithButton
          title={readingLastContent.lastsection_title}
          paragraph={readingLastContent.lastsection_paragraph}
        />
      )}
    </Layout>
  );
}

export default Reading;
