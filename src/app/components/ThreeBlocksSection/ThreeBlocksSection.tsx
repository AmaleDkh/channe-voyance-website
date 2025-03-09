// Next element
import { usePathname } from "next/navigation";

// Component
import ImageAndTextBlock from "../ImageAndTextBlock/ImageAndTextBlock";

// Style
import "./ThreeBlocksSection.scss";

interface ThreeBlocksSectionProps {
  sectionTitle: string;
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
  flexVersion: string;
  withButton: boolean;
  firstButtonLink: string;
  secondButtonLink: string;
  thirdbButtonLink: string;
}

function ThreeBlocksSection({
  sectionTitle,
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
  flexVersion,
  withButton,
  firstButtonLink,
  secondButtonLink,
  thirdbButtonLink,
}: ThreeBlocksSectionProps) {
  const pathname = usePathname();

  return (
    <section className="three-blocks-section">
      <h2 className="three-blocks-section__title">{sectionTitle}</h2>

      {sectionIntroduction ? (
        <p className="three-blocks-section__paragraph">{sectionIntroduction}</p>
      ) : null}

      <div
        className={`three-blocks-section__three-blocks-container ${flexVersion}`}
      >
        <ImageAndTextBlock
          image={image1}
          title={title1}
          paragraph={paragraph1}
          flexVersion={
            pathname === "/reading" || pathname === "/meditation"
              ? "row-version"
              : ""
          }
          withButton={withButton}
          buttonLink={firstButtonLink}
        />

        <ImageAndTextBlock
          image={image2}
          title={title2}
          paragraph={paragraph2}
          flexVersion={
            pathname === "/reading" || pathname === "/meditation"
              ? "row-version"
              : ""
          }
          withButton={withButton}
          buttonLink={secondButtonLink}
        />

        <ImageAndTextBlock
          image={image3}
          title={title3}
          paragraph={paragraph3}
          flexVersion={
            pathname === "/reading" || pathname === "/meditation"
              ? "row-version"
              : ""
          }
          withButton={withButton}
          buttonLink={thirdbButtonLink}
        />
      </div>
    </section>
  );
}

export default ThreeBlocksSection;
