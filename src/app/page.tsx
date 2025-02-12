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
  useTextAndImageSectionData,
  useThreeblocksSectionData,
  useLastSectionsData,
} from "../hooks/useData";
import Button from "./components/Button/Button";

export default function Home() {
  const { homepageLargeImage } = useLargeImageContainerSectionsData();
  const { presentationContent } = useTextAndImageSectionData();
  const { advantagesContent, servicesContent } = useThreeblocksSectionData();
  const { homepageLastContent } = useLastSectionsData();

  return (
    <Layout>
      {homepageLargeImage && (
        <LargeImageContainer
          image={homepageLargeImage.banner_image}
          title={homepageLargeImage.banner_title}
          introduction={homepageLargeImage.banner_introduction}
        />
      )}

      {presentationContent && (
        <ImageAndTextSection
          title={presentationContent.text_and_image_title}
          paragraph={presentationContent.text_and_image_paragraph}
          firstImage={presentationContent.text_and_image_first_image}
          rowVersion="image-and-text-section___row-reverse-version"
          titleColorVersion=""
          backgroundColorVersion="image-and-text-section___beige-background-color-version"
        />
      )}

      {advantagesContent && (
        <ThreeBlocksSection
          sectionTitle={advantagesContent.section_title}
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
          flexVersion=""
        />
      )}

      <SectionWithBackgroundColor />

      {servicesContent && (
        <ThreeBlocksSection
          sectionTitle={servicesContent.section_title}
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
          flexVersion=""
        />
      )}

      <div className="button-block">
        <Button text="Tout savoir sur les approches proposées" />
      </div>

      <Reviews />

      {homepageLastContent && (
        <LastSectionWithButton
          title={homepageLastContent.lastsection_title}
          paragraph={homepageLastContent.lastsection_paragraph}
        />
      )}
    </Layout>
  );
}
