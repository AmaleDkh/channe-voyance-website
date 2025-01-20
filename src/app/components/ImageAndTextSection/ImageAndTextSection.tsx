// Next element
import Image from "next/image";

// Style
import "./ImageAndTextSection.scss";

interface presentationProps {
  image: string;
  title: string;
  paragraph: string;
}

function ImageAndTextSection({ image, title, paragraph }: presentationProps) {
  return (
    <section className="image-and-text-section">
      <div className="image-and-text-section__text">
        <h2 className="image-and-text-section__text__title">{title}</h2>
        <p
          className="image-and-text-section__text__paragraph"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      </div>

      <div className="image-and-text-section__image-container">
        <Image
          src={image}
          alt=""
          className="image-and-text-section__image-container__image"
          width={384}
          height={384}
        />
      </div>
    </section>
  );
}

export default ImageAndTextSection;
