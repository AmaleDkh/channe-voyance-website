// Next element
import Image from "next/image";

// Component
import Button from "../Button/Button";

// Style
import "./ImageAndTextBlock.scss";

interface imageAndTextBlockProps {
  image: string;
  title: string;
  paragraph: string;
  flexVersion: string;
  withButton: boolean;
  buttonLink: string;
}

function ImageAndTextBlock({
  image,
  title,
  paragraph,
  flexVersion,
  withButton,
  buttonLink,
}: imageAndTextBlockProps) {
  return (
    <div className={`image-and-text-block ${flexVersion}`}>
      <div className="image-and-text-block__image-container">
        <Image
          src={image}
          alt=""
          className="image-and-text-block__image-container__image"
          width={280}
          height={280}
        />
      </div>

      <div className="image-and-text-block__text">
        <h3 className="image-and-text-block__text__title">{title}</h3>
        <p className="image-and-text-block__text__paragraph">{paragraph}</p>
        {withButton && (
          <Button
            text="Découvrir"
            link={buttonLink}
            buttonWithMarginAuto="button-with-margin-auto"
          />
        )}
      </div>
    </div>
  );
}

export default ImageAndTextBlock;
