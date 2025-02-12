"use client";

// Components
import Layout from "../../components/Layout/Layout";
import LargeImageContainer from "../../components/LargeImageContainer/LargeImageContainer";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";
import ImageAndTextSection from "../../components/ImageAndTextSection/ImageAndTextSection";
import LastSectionWithButton from "../../components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../../assets/Global.scss";

// Custom hooks
import {
  useLargeImageContainerSectionsData,
  usePageIntroductionSectionsData,
  useTextAndImageSectionData,
  useLastSectionsData,
} from "../../../hooks/useData";

function About() {
  const { aboutLargeImage } = useLargeImageContainerSectionsData();
  const { firstPartStory, secondPartStory, thirdPartStory, fourthPartStory } =
    useTextAndImageSectionData();
  const { aboutIntroduction } = usePageIntroductionSectionsData();
  const { aboutLastContent } = useLastSectionsData();

  return (
    <Layout>
      {/* {aboutLargeImage && (
        <LargeImageContainer image={aboutLargeImage.banner_image} title="" />
      )} */}

      {aboutIntroduction && (
        <PageIntroduction
          title={aboutIntroduction.introduction_title}
          subtitle={aboutIntroduction.introduction_subtitle}
        />
      )}

      {firstPartStory && (
        <ImageAndTextSection
          title={firstPartStory.text_and_image_title}
          paragraph={firstPartStory.text_and_image_paragraph}
          firstImage={firstPartStory.text_and_image_first_image}
          rowVersion="image-and-text-section___row-reverse-version"
          backgroundColorVersion="image-and-text-section___green-background-color-version"
          titleColorVersion="image-and-text-section___title-color-version"
        />
      )}

      {secondPartStory && (
        <ImageAndTextSection
          title={secondPartStory.text_and_image_title}
          paragraph={secondPartStory.text_and_image_paragraph}
          firstImage={secondPartStory.text_and_image_first_image}
          rowVersion="image-and-text-section___row-version"
          backgroundColorVersion=""
          titleColorVersion=""
        />
      )}

      {thirdPartStory && (
        <ImageAndTextSection
          title={thirdPartStory.text_and_image_title}
          paragraph={thirdPartStory.text_and_image_paragraph}
          firstImage={thirdPartStory.text_and_image_first_image}
          rowVersion="image-and-text-section___row-reverse-version"
          backgroundColorVersion="image-and-text-section___green-background-color-version"
          titleColorVersion="image-and-text-section___title-color-version"
        />
      )}

      {fourthPartStory && (
        <ImageAndTextSection
          title={fourthPartStory.text_and_image_title}
          paragraph={fourthPartStory.text_and_image_paragraph}
          firstImage={fourthPartStory.text_and_image_first_image}
          rowVersion="image-and-text-section___row-version"
          backgroundColorVersion=""
          titleColorVersion=""
        />
      )}

      {aboutLastContent && (
        <LastSectionWithButton
          title={aboutLastContent.lastsection_title}
          paragraph={aboutLastContent.lastsection_paragraph}
        />
      )}
    </Layout>
  );
}

export default About;
