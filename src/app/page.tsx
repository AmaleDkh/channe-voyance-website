"use client";

// Components
import Layout from "./components/Layout/Layout";
import LargeImageContainer from "./components/LargeImageContainer/LargeImageContainer";
import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";
import ThreeKeyFigures from "./components/ThreeKeyFigures/ThreeKeyFigures";
import ThreeBlocksSection from "./components/ThreeBlocksSection/ThreeBlocksSection";
import SectionWithBackgroundColor from "./components/SectionWithBackgroundColor/SectionWithBackgroundColor";
import Reviews from "./components/Reviews/Reviews";
import PlacePresentationSection from "@/app/components/PlacePresentationSection/PlacePresentationSection";
import LastSectionWithButton from "./components/LastSectionWithButton/LastSectionWithButton";

// Style
import "./assets/style/Global.scss";

// Custom hooks
import {
  useLargeImageContainerSectionsData,
  useTextAndImageSectionData,
  useThreeblocksSectionData,
  useLastSectionsData,
} from "../hooks/useData";

export default function Home() {
  const { homepageLargeImage } = useLargeImageContainerSectionsData();
  const { presentationContent } = useTextAndImageSectionData();
  const { advantagesContent, servicesContent } = useThreeblocksSectionData();
  const { PlacePresentation } = useTextAndImageSectionData();
  const lastSectionsContentArray = useLastSectionsData();

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
          rowVersion="image-and-text-section__row-reverse-version"
          titleColorVersion=""
          backgroundColorVersion="image-and-text-section__beige-background-color-version"
          paddingTopVersion="image-and-text-section__padding-top-version"
        />
      )}

      <ThreeKeyFigures />

      {advantagesContent && (
        <ThreeBlocksSection
          sectionTitle={advantagesContent.section_title}
          sectionIntroduction={advantagesContent.section_introduction}
          image1={advantagesContent.bloc_1_image}
          title1={advantagesContent.bloc_1_titre}
          paragraph1={advantagesContent.bloc_1_paragraph}
          image2={advantagesContent.bloc_2_image}
          title2={advantagesContent.bloc_2_titre}
          paragraph2={advantagesContent.bloc_2_paragraph}
          image3={advantagesContent.bloc_3_image}
          title3={advantagesContent.bloc_3_titre}
          paragraph3={advantagesContent.bloc_3_paragraph}
          flexVersion=""
          withButton={false}
          firstButtonLink=""
          secondButtonLink=""
          thirdbButtonLink=""
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
          paragraph2={servicesContent.bloc_2_paragraph}
          image3={servicesContent.bloc_3_image}
          title3={servicesContent.bloc_3_titre}
          paragraph3={servicesContent.bloc_3_paragraph}
          flexVersion=""
          withButton={true}
          firstButtonLink="/reading"
          secondButtonLink="/meditation"
          thirdbButtonLink="/energy-care"
        />
      )}

      <Reviews />

      {PlacePresentation && (
        <PlacePresentationSection
          title={PlacePresentation.text_and_image_title}
          paragraph={PlacePresentation.text_and_image_paragraph}
          firstImage={PlacePresentation.text_and_image_first_image}
          secondImage={PlacePresentation.text_and_image_second_image}
        />
      )}

      {lastSectionsContentArray?.[5] && (
        <LastSectionWithButton
          title={lastSectionsContentArray[5].lastsection_title}
          paragraph={lastSectionsContentArray[5].lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}
