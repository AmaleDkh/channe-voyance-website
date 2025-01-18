// Components
import Layout from "./components/Layout/Layout";
import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";
import ThreeBlocksSection from "./components/ThreeBlocksSection/ThreeBlocksSection";
import SectionWithBackgroundColor from "./components/SectionWithBackgroundColor/SectionWithBackgroundColor";
import Reviews from "./components/Reviews/Reviews";
import LastSectionWithButton from "./components/LastSectionWithButton/LastSectionWithButton";

// Style
import "./assets/Global.scss";

export default function Home() {
  return (
    <Layout>
      <ImageAndTextSection />
      <ThreeBlocksSection />
      <SectionWithBackgroundColor />
      <ThreeBlocksSection />
      <Reviews />
      <LastSectionWithButton />
    </Layout>
  );
}
