"use client";

// Components
import Layout from "../../components/Layout/Layout";
import LargeImageContainer from "../../components/LargeImageContainer/LargeImageContainer";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";
import ImageAndTextSection from "../../components/ImageAndTextSection/ImageAndTextSection";
import LastSectionWithButton from "../../components/LastSectionWithButton/LastSectionWithButton";

// Custom hooks
import {
  useLargeImageContainerSectionsData,
  usePageIntroductionSectionsData,
  usePresentationSectionData,
  useLastSectionsData,
} from "../../../hooks/useData";

function About() {
  const { aboutLargeImage } = useLargeImageContainerSectionsData();
  const { firstPartStory, secondPartStory, thirdPartStory, fourthPartStory } =
    usePresentationSectionData();
  const { aboutIntroduction } = usePageIntroductionSectionsData();
  const { aboutLastContent } = useLastSectionsData();

  return (
    <Layout>
      {aboutLargeImage && (
        <LargeImageContainer image={aboutLargeImage.banner_image} title="" />
      )}

      {aboutIntroduction && (
        <PageIntroduction
          title={aboutIntroduction.introduction_title}
          subtitle={aboutIntroduction.introduction_subtitle}
        />
      )}

      {firstPartStory && (
        <ImageAndTextSection
          image={firstPartStory.presentation_image}
          title={firstPartStory.presentation_title}
          paragraph={firstPartStory.presentation_paragraph}
        />
      )}

      {secondPartStory && (
        <ImageAndTextSection
          image={secondPartStory.presentation_image}
          title={secondPartStory.presentation_title}
          paragraph={secondPartStory.presentation_paragraph}
        />
      )}

      {thirdPartStory && (
        <ImageAndTextSection
          image={thirdPartStory.presentation_image}
          title={thirdPartStory.presentation_title}
          paragraph={thirdPartStory.presentation_paragraph}
        />
      )}

      {fourthPartStory && (
        <ImageAndTextSection
          image={fourthPartStory.presentation_image}
          title={fourthPartStory.presentation_title}
          paragraph={fourthPartStory.presentation_paragraph}
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
