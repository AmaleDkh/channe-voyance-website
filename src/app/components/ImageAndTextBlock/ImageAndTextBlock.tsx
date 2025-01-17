// Next element
import Image from "next/image";

// Style
import "./ImageAndTextBlock.scss";

function ImageAndTextBlock() {
  return (
    <div className="image-and-text-block">
      <div className="image-and-text-block__image-container">
        <Image
          src=""
          alt=""
          className="image-and-text-block__image-container__image"
          width={200}
          height={200}
        />
      </div>

      <div className="image-and-text-block__text">
        <h2 className="image-and-text-block__text__title">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </h2>
        <p className="image-and-text-block__text__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default ImageAndTextBlock;
