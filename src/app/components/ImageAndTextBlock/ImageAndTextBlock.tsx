// Next element
import Image from "next/image";

// Style
import "./ImageAndTextBlock.scss";

interface imageAndTextBlockProps {
  image: string;
  title: string;
  paragraph: string;
}

function ImageAndTextBlock({
  image,
  title,
  paragraph,
}: imageAndTextBlockProps) {
  return (
    <div className="image-and-text-block">
      <div className="image-and-text-block__image-container">
        <Image
          src={image}
          alt=""
          className="image-and-text-block__image-container__image"
          width={200}
          height={200}
        />
      </div>

      <div className="image-and-text-block__text">
        <h3 className="image-and-text-block__text__title">{title}</h3>
        <p className="image-and-text-block__text__paragraph">{paragraph}</p>
      </div>
    </div>
  );
}

export default ImageAndTextBlock;
