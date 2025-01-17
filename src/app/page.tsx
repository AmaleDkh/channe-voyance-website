// Components
import Layout from "./components/Layout/Layout";
import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";
import ThreeBlocksSection from "./components/ThreeBlocksSection/ThreeBlocksSection";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
  return (
    <Layout>
      <ImageAndTextSection />
      <ThreeBlocksSection />
      <Reviews />
    </Layout>
  );
}
