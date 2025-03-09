// Component
import ImageAndTextBlock from "../ImageAndTextBlock/ImageAndTextBlock";

// Style
import "./FiveBlocksSection.scss";

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
  image4: string;
  title4: string;
  paragraph4: string;
  image5: string;
  title5: string;
  paragraph5: string;
}

function FiveBlocksSection({
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
  image4,
  title4,
  paragraph4,
  image5,
  title5,
  paragraph5,
}: ThreeBlocksSectionProps) {
  return (
    <section className="five-blocks-section">
      <h3 className="five-blocks-section__introduction">
        {sectionIntroduction}
      </h3>
      {/* <div className="five-blocks-section__five-blocks-container">
        <ImageAndTextBlock
          image={image1}
          title={title1}
          paragraph={paragraph1}
          flexVersion="row-version"
        />

        <ImageAndTextBlock
          image={image2}
          title={title2}
          paragraph={paragraph2}
          flexVersion="row-version"
        />

        <ImageAndTextBlock
          image={image3}
          title={title3}
          paragraph={paragraph3}
          flexVersion="row-version"
        />

        <ImageAndTextBlock
          image={image4}
          title={title4}
          paragraph={paragraph4}
          flexVersion="row-version"
        />

        <ImageAndTextBlock
          image={image5}
          title={title5}
          paragraph={paragraph5}
          flexVersion="row-version"
        />
      </div> */}
    </section>
  );
}

export default FiveBlocksSection;
