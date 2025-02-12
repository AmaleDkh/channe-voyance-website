// Next element
import Image from "next/image";

// Style
import "./TwoImagesAndTextSection.scss";

interface presentationProps {
  title: string;
  paragraph: string;
  firstImage: string;
  secondImage: string;
}

function TwoImagesAndTextSection({
  title,
  paragraph,
  firstImage,
  secondImage,
}: presentationProps) {
  return (
    <section className="two-images-and-text-section">
      <div className="two-images-and-text-section__text">
        <h2 className="image-and-text-section__text__title">{title}</h2>
        <p
          className="two-images-and-text-section__text__paragraph"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      </div>

      <div className="two-images-and-text-section__image-containers">
        <div className="two-images-and-text-section__first-image-container">
          <Image
            src={firstImage}
            alt=""
            className="two-images-and-text-section__first-image-container__image"
            width={600}
            height={800}
          />
        </div>

        <div className="two-images-and-text-section__second-image-container">
          <Image
            src={secondImage}
            alt=""
            className="two-images-and-text-section__second-image-container__image"
            width={600}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}

export default TwoImagesAndTextSection;
