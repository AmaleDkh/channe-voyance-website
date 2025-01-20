// Next element
import Image from "next/image";

// Style
import "./LargeImageContainer.scss";

type LargeImageContainerProps = {
  image: string;
  title: string;
};

function LargeImageContainer({ image, title }: LargeImageContainerProps) {
  return (
    <div className="large-image-container">
      <Image src={image} alt="" className="large-image-container__image" fill />
      <h1 className="large-image-container__title">{title}</h1>
    </div>
  );
}

export default LargeImageContainer;
