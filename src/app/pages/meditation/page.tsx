"use client";

// Components
import Layout from "../../components/Layout/Layout";
import LargeImageContainer from "../../components/LargeImageContainer/LargeImageContainer";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";
import ThreeBlocksSection from "../../components/ThreeBlocksSection/ThreeBlocksSection";

// Style
import "../../assets/Global.scss";

// Custom hooks
import {
  useLargeImageContainerSectionsData,
  usePageIntroductionSectionsData,
  useThreeblocksSectionData,
} from "../../../hooks/useData";

function Meditation() {
  const { aboutLargeImage } = useLargeImageContainerSectionsData();
  const { meditationIntroduction } = usePageIntroductionSectionsData();
  const { meditationAdvantagesContent } = useThreeblocksSectionData();

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
        />
      )}
    </Layout>
  );
}

export default Meditation;
