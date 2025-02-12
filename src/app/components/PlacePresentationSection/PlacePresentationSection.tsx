"use client";

// Next element
import Image from "next/image";

// Style
import "./PlacePresentationSection.scss";

interface placePresentationProps {
  title: string;
  paragraph: string;
  firstImage: string;
  secondImage: string;
}

function PlacePresentationSection({
  title,
  paragraph,
  firstImage,
  secondImage,
}: placePresentationProps) {
  return (
    <section className="place-presentation-section">
      <div className="place-presentation-section__first-image-container">
        <Image
          src={firstImage}
          alt=""
          className="place-presentation-section__first-image-container__image"
          width={600}
          height={600}
        />

        <Image
          src={secondImage}
          alt=""
          className="place-presentation-section__second-image-container__image"
          width={864}
          height={864}
        />
      </div>

      <div className="place-presentation-section__questions-container">
        <h2 className="place-presentation-section__questions-container__title">
          {title}
        </h2>
        <div className="place-presentation-section__questions-container__questions">
          {paragraph}
        </div>
      </div>
    </section>
  );
}

export default PlacePresentationSection;
