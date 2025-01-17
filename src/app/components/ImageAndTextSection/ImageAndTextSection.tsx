// Next element
import Image from "next/image";

// Style
import "./ImageAndTextSection.scss";

function ImageAndTextSection() {
  return (
    <section className="image-and-text-section">
      <div className="image-and-text-section__text">
        <h2 className="image-and-text-section__text__title">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </h2>
        <p className="image-and-text-section__text__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="image-and-text-section__image-container">
        <Image
          src=""
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
