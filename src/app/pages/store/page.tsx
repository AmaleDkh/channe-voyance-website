"use client";

// Components
import Layout from "@/app/components/Layout/Layout";
import PageIntroduction from "@/app/components/PageIntroduction/PageIntroduction";
import StoreList from "@/app/components/StoreList/StoreList";
import Reviews from "@/app/components/Reviews/Reviews";
import ThreeBlocksSection from "@/app/components/ThreeBlocksSection/ThreeBlocksSection";

// Style
import "../../assets/Global.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  useThreeblocksSectionData,
} from "../../../hooks/useData";

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

      <h2 className="store-page__title">Les services proposés</h2>

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
    </Layout>
  );
}

export default Store;
