"use client";

// Components
import Layout from "./components/Layout/Layout";
import LargeImageContainer from "./components/LargeImageContainer/LargeImageContainer";
import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";
import ThreeBlocksSection from "./components/ThreeBlocksSection/ThreeBlocksSection";
import SectionWithBackgroundColor from "./components/SectionWithBackgroundColor/SectionWithBackgroundColor";
import Reviews from "./components/Reviews/Reviews";
import LastSectionWithButton from "./components/LastSectionWithButton/LastSectionWithButton";

// Style
import "./assets/Global.scss";

// Custom hooks
import {
  useLargeImageContainerSectionsData,
  usePresentationSectionData,
  useThreeblocksSectionData,
  useLastSectionsData,
} from "../hooks/useData";

export default function Home() {
  const { homepageLargeImage } = useLargeImageContainerSectionsData();
  const { presentationContent } = usePresentationSectionData();
  const { advantagesContent, servicesContent } = useThreeblocksSectionData();
  const lastSectionContent = useLastSectionsData();

  return (
    <Layout>
      {homepageLargeImage && (
        <LargeImageContainer
          image={homepageLargeImage.banner_image}
          title={homepageLargeImage.banner_title}
        />
      )}

      {presentationContent && (
        <ImageAndTextSection
          image={presentationContent.presentation_image}
          title={presentationContent.presentation_title}
          paragraph={presentationContent.presentation_paragraph}
        />
      )}

      {advantagesContent && (
        <ThreeBlocksSection
          sectionIntroduction={advantagesContent.section_introduction}
          image1={advantagesContent.bloc_1_image}
          title1={advantagesContent.bloc_1_titre}
          paragraph1={advantagesContent.bloc_1_paragraph}
          image2={advantagesContent.bloc_2_image}
          title2={advantagesContent.bloc_2_titre}
          paragraph2={advantagesContent.bloc_3_paragraph}
          image3={advantagesContent.bloc_3_image}
          title3={advantagesContent.bloc_3_titre}
          paragraph3={advantagesContent.bloc_3_paragraph}
        />
      )}

      <SectionWithBackgroundColor />
      {servicesContent && (
        <ThreeBlocksSection
          sectionIntroduction={servicesContent.section_introduction}
          image1={servicesContent.bloc_1_image}
          title1={servicesContent.bloc_1_titre}
          paragraph1={servicesContent.bloc_1_paragraph}
          image2={servicesContent.bloc_2_image}
          title2={servicesContent.bloc_2_titre}
          paragraph2={servicesContent.bloc_3_paragraph}
          image3={servicesContent.bloc_3_image}
          title3={servicesContent.bloc_3_titre}
          paragraph3={servicesContent.bloc_3_paragraph}
        />
      )}

      <Reviews />

      {lastSectionContent && (
        <LastSectionWithButton
          title={lastSectionContent.lastsection_title}
          paragraph=""
        />
      )}
    </Layout>
  );
}
