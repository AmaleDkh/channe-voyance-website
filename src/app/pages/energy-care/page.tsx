"use client";

// Components
import Layout from "../../components/Layout/Layout";
import LargeImageContainer from "../../components/LargeImageContainer/LargeImageContainer";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";

// Style
import "../../assets/Global.scss";

// Custom hooks
import {
  useLargeImageContainerSectionsData,
  usePageIntroductionSectionsData,
} from "../../../hooks/useData";

function EnergyCare() {
  const { aboutLargeImage } = useLargeImageContainerSectionsData();
  const { energyCareIntroduction } = usePageIntroductionSectionsData();

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
    </Layout>
  );
}

export default EnergyCare;
