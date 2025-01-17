// Components
import Layout from "./components/Layout/Layout";
import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";
import ThreeBlocksSection from "./components/ThreeBlocksSection/ThreeBlocksSection";

export default function Home() {
  return (
    <Layout>
      <ImageAndTextSection />
      <ThreeBlocksSection />
    </Layout>
  );
}
