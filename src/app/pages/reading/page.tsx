"use client";

// Components
import Layout from "../../components/Layout/Layout";
import LargeImageContainer from "../../components/LargeImageContainer/LargeImageContainer";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";
import ThreeBlocksSection from "../../components/ThreeBlocksSection/ThreeBlocksSection";
import Reviews from "../../components/Reviews/Reviews";

// Style
import "../../assets/Global.scss";

// Custom hooks
import {
  useLargeImageContainerSectionsData,
  usePageIntroductionSectionsData,
  useThreeblocksSectionData,
} from "../../../hooks/useData";

function Reading() {
  const { aboutLargeImage } = useLargeImageContainerSectionsData();
  const { readingIntroduction } = usePageIntroductionSectionsData();
  const { readingAdvantagesContent } = useThreeblocksSectionData();

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
        />
      )}

      <Reviews />
    </Layout>
  );
}

export default Reading;
