"use client";

// Components
import Layout from "../../components/Layout/Layout";
import LargeImageContainer from "../../components/LargeImageContainer/LargeImageContainer";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";
import Reviews from "../../components/Reviews/Reviews";
import LastSectionWithButton from "../../components/LastSectionWithButton/LastSectionWithButton";
import FiveBlocksSection from "@/app/components/FiveBlocksSection/FiveBlocksSection";
import BenefitsSection from "@/app/components/BenefitsSection/BenefitsSection";

// Style
import "../../assets/Global.scss";

// Custom hooks
import {
  useLargeImageContainerSectionsData,
  usePageIntroductionSectionsData,
  useBenefitsSectionData,
  useFiveblocksSectionData,
  useLastSectionsData,
} from "../../../hooks/useData";

function EnergyCare() {
  const { aboutLargeImage } = useLargeImageContainerSectionsData();
  const { energyCareIntroduction } = usePageIntroductionSectionsData();
  const energyCareAdvantagesContent = useFiveblocksSectionData();
  const { energyCareLastContent } = useLastSectionsData();
  const { energyCareBenefitsContent } = useBenefitsSectionData();

  return (
    <Layout>
      {aboutLargeImage && (
        <LargeImageContainer image={aboutLargeImage.banner_image} title="" />
      )}

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

      {energyCareAdvantagesContent && (
        <FiveBlocksSection
          sectionIntroduction={energyCareAdvantagesContent.section_introduction}
          image1={energyCareAdvantagesContent.bloc_1_image}
          title1={energyCareAdvantagesContent.bloc_1_title}
          paragraph1={energyCareAdvantagesContent.bloc_1_paragraph}
          image2={energyCareAdvantagesContent.bloc_2_image}
          title2={energyCareAdvantagesContent.bloc_2_title}
          paragraph2={energyCareAdvantagesContent.bloc_3_paragraph}
          image3={energyCareAdvantagesContent.bloc_3_image}
          title3={energyCareAdvantagesContent.bloc_3_title}
          paragraph3={energyCareAdvantagesContent.bloc_3_paragraph}
          image4={energyCareAdvantagesContent.bloc_4_image}
          title4={energyCareAdvantagesContent.bloc_4_title}
          paragraph4={energyCareAdvantagesContent.bloc_4_paragraph}
          image5={energyCareAdvantagesContent.bloc_5_image}
          title5={energyCareAdvantagesContent.bloc_5_title}
          paragraph5={energyCareAdvantagesContent.bloc_5_paragraph}
        />
      )}

      <Reviews />

      {energyCareLastContent && (
        <LastSectionWithButton
          title={energyCareLastContent.lastsection_title}
          paragraph={energyCareLastContent.lastsection_paragraph}
        />
      )}
    </Layout>
  );
}

export default EnergyCare;
