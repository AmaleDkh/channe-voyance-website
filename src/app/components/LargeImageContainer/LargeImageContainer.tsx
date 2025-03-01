// Next element
import Image from "next/image";

// Component
import Button from "../Button/Button";

// Style
import "./LargeImageContainer.scss";

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
        <Button
          text="Commencez dès aujourd'hui votre chemin vers l'équilibre"
          link=""
          buttonWithMarginAuto=""
        />
      </p>
    </div>
  );
}

export default LargeImageContainer;
