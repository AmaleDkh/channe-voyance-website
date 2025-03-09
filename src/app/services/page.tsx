"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "@/app/components/PageIntroduction/PageIntroduction";
import ThreeBlocksSection from "@/app/components/ThreeBlocksSection/ThreeBlocksSection";
import LastSectionWithButton from "@/app/components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../assets/style/Global.scss";

// Custom hooks
import {
  useThreeblocksSectionData,
  useLastSectionsData,
} from "../../hooks/useData";

function Services() {
  const { servicesContent } = useThreeblocksSectionData();
  const lastSectionsContentArray = useLastSectionsData();

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
          firstButtonLink="/reading"
          secondButtonLink="/meditation"
          thirdbButtonLink="/energy-care"
        />
      )}

      {lastSectionsContentArray?.[0] && (
        <LastSectionWithButton
          title={lastSectionsContentArray[0].lastsection_title}
          paragraph={lastSectionsContentArray[0].lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default Services;
