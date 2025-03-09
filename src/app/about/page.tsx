"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import ImageAndTextSection from "../components/ImageAndTextSection/ImageAndTextSection";
import LastSectionWithButton from "../components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../assets/style/Global.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  useTextAndImageSectionData,
  useLastSectionsData,
} from "../../hooks/useData";

function About() {
  const { firstPartStory, secondPartStory, thirdPartStory, fourthPartStory } =
    useTextAndImageSectionData();
  const { aboutIntroduction } = usePageIntroductionSectionsData();
  const lastSectionsContentArray = useLastSectionsData();

  return (
    <Layout>
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
          rowVersion="image-and-text-section__row-reverse-version"
          backgroundColorVersion="image-and-text-section__green-background-color-version"
          titleColorVersion="image-and-text-section__title-color-version"
          paddingTopVersion=""
        />
      )}

      {secondPartStory && (
        <ImageAndTextSection
          title={secondPartStory.text_and_image_title}
          paragraph={secondPartStory.text_and_image_paragraph}
          firstImage={secondPartStory.text_and_image_first_image}
          rowVersion="image-and-text-section__row-version"
          backgroundColorVersion=""
          titleColorVersion=""
          paddingTopVersion=""
        />
      )}

      {thirdPartStory && (
        <ImageAndTextSection
          title={thirdPartStory.text_and_image_title}
          paragraph={thirdPartStory.text_and_image_paragraph}
          firstImage={thirdPartStory.text_and_image_first_image}
          rowVersion="image-and-text-section__row-reverse-version"
          backgroundColorVersion="image-and-text-section__green-background-color-version"
          titleColorVersion="image-and-text-section__title-color-version"
          paddingTopVersion=""
        />
      )}

      {fourthPartStory && (
        <ImageAndTextSection
          title={fourthPartStory.text_and_image_title}
          paragraph={fourthPartStory.text_and_image_paragraph}
          firstImage={fourthPartStory.text_and_image_first_image}
          rowVersion="image-and-text-section__row-version"
          backgroundColorVersion=""
          titleColorVersion=""
          paddingTopVersion=""
        />
      )}

      {lastSectionsContentArray?.[4] && (
        <LastSectionWithButton
          title={lastSectionsContentArray[4].lastsection_title}
          paragraph={lastSectionsContentArray[4].lastsection_paragraph}
          lastSectionWithButtonWithMarginTop="last-section-with-button__with-margin-top"
        />
      )}
    </Layout>
  );
}

export default About;
