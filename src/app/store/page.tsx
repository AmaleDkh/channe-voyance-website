"use client";

// Components
import Layout from "@/app/components/Layout/Layout";
import PageIntroduction from "@/app/components/PageIntroduction/PageIntroduction";
import StoreList from "@/app/components/StoreList/StoreList";
import Reviews from "@/app/components/Reviews/Reviews";
import ThreeBlocksSection from "@/app/components/ThreeBlocksSection/ThreeBlocksSection";

// Style
import "../assets/style/Global.scss";
import "./store.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  useThreeblocksSectionData,
} from "../../hooks/useData";

function Store() {
  const { storeIntroduction } = usePageIntroductionSectionsData();
  const { servicesContent } = useThreeblocksSectionData();

  return (
    <Layout>
      {storeIntroduction && (
        <PageIntroduction
          title={storeIntroduction.introduction_title}
          subtitle=""
        />
      )}

      <StoreList />

      <Reviews />

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
    </Layout>
  );
}

export default Store;
