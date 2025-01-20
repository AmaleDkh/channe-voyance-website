// Component
import ImageAndTextBlock from "../ImageAndTextBlock/ImageAndTextBlock";

// Style
import "./ThreeBlocksSection.scss";

interface ThreeBlocksSectionProps {
  sectionIntroduction: string;
  image1: string;
  title1: string;
  paragraph1: string;
  image2: string;
  title2: string;
  paragraph2: string;
  image3: string;
  title3: string;
  paragraph3: string;
}
function ThreeBlocksSection({
  sectionIntroduction,
  image1,
  title1,
  paragraph1,
  image2,
  title2,
  paragraph2,
  image3,
  title3,
  paragraph3,
}: ThreeBlocksSectionProps) {
  return (
    <section className="three-blocks-section">
      <p className="three-blocks-section__introduction">
        {sectionIntroduction}
      </p>
      <div className="three-blocks-section__three-blocks-container">
        <ImageAndTextBlock
          image={image1}
          title={title1}
          paragraph={paragraph1}
        />
        <ImageAndTextBlock
          image={image2}
          title={title2}
          paragraph={paragraph2}
        />
        <ImageAndTextBlock
          image={image3}
          title={title3}
          paragraph={paragraph3}
        />
      </div>
    </section>
  );
}

export default ThreeBlocksSection;
