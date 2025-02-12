// Next element
import Image from "next/image";

// Style
import "./ImageAndTextSection.scss";

interface presentationProps {
  firstImage: string;
  title: string;
  paragraph: string;
  rowVersion: string;
  backgroundColorVersion: string;
  titleColorVersion: string;
}

function ImageAndTextSection({
  firstImage,
  title,
  paragraph,
  rowVersion,
  backgroundColorVersion,
  titleColorVersion,
}: presentationProps) {
  return (
    <section
      className={`image-and-text-section ${rowVersion} ${backgroundColorVersion}`}
    >
      <div className="image-and-text-section__text">
        <h2
          className={`image-and-text-section__text__title ${titleColorVersion}`}
        >
          {title}
        </h2>
        <p
          className="image-and-text-section__text__paragraph"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      </div>

      {
        // <div className="image-and-text-section__image-container">
        <Image
          src={firstImage}
          alt=""
          className="image-and-text-section__image-container__image"
          width={600}
          height={800}
        />
        // </div>
      }

      {/* 
      <div className="image-and-text-section__image-container">
        <Image
          src={firstImage}
          alt=""
          className="image-and-text-section__image-container__image"
          width={600}
          height={600}
        />
      </div> */}
    </section>
  );
}

export default ImageAndTextSection;
