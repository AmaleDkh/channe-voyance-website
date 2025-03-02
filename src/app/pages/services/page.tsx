"use client";

// Components
import Layout from "../../components/Layout/Layout";
import PageIntroduction from "@/app/components/PageIntroduction/PageIntroduction";
import ThreeBlocksSection from "@/app/components/ThreeBlocksSection/ThreeBlocksSection";
import LastSectionWithButton from "@/app/components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../../assets/style/Global.scss";

// Custom hooks
import {
  useThreeblocksSectionData,
  useLastSectionsData,
} from "../../../hooks/useData";

function Services() {
  const { servicesContent } = useThreeblocksSectionData();
  const { homepageLastContent } = useLastSectionsData();

  return (
    <Layout>
      <PageIntroduction title="Tous les services proposés" subtitle="" />
      {servicesContent && (
        <ThreeBlocksSection
          sectionTitle=""
          sectionIntroduction=""
          image1={servicesContent.bloc_1_image}
          title1={servicesContent.bloc_1_titre}
          paragraph1=""
          image2={servicesContent.bloc_2_image}
          title2={servicesContent.bloc_2_titre}
          paragraph2=""
          image3={servicesContent.bloc_3_image}
          title3={servicesContent.bloc_3_titre}
          paragraph3=""
          flexVersion=""
          withButton={true}
          firstButtonLink="/pages/reading"
          secondButtonLink="/pages/meditation"
          thirdbButtonLink="/pages/energy-care"
        />
      )}

      {homepageLastContent && (
        <LastSectionWithButton
          title={homepageLastContent.lastsection_title}
          paragraph={homepageLastContent.lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default Services;
