// Next element
import Image from "next/image";

// Style
import "./LargeImageContainer.scss";

// Component
import Button from "../Button/Button";

type LargeImageContainerProps = {
  image: string;
  title: string;
  introduction: string;
};

function LargeImageContainer({
  image,
  title,
  introduction,
}: LargeImageContainerProps) {
  return (
    <div className="large-image-container">
      <Image
        src={image}
        alt=""
        className="large-image-container__image"
        width={800}
        height={700}
      />
      <p className="large-image-container__content">
        <h1 className="large-image-container__content__title">{title}</h1>
        <p className="large-image-container__content__paragraph">
          {introduction}
        </p>
        <Button text="Commencez votre chemin vers l'équilibre" />
      </p>
    </div>
  );
}

export default LargeImageContainer;
