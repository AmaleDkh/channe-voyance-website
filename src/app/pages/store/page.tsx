"use client";

// Components
import Layout from "@/app/components/Layout/Layout";
import PageIntroduction from "@/app/components/PageIntroduction/PageIntroduction";
import StoreList from "@/app/components/StoreList/StoreList";
import Reviews from "@/app/components/Reviews/Reviews";

// Style
import "../../assets/Global.scss";

// Custom hooks
import { usePageIntroductionSectionsData } from "../../../hooks/useData";

function Store() {
  const { storeIntroduction } = usePageIntroductionSectionsData();

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
    </Layout>
  );
}

export default Store;
