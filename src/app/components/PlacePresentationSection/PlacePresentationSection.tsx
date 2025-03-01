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
      <div className="place-presentation-section__texts">
        <h2 className="place-presentation-section__texts__title">{title}</h2>
        <div className="place-presentation-section__texts__paragraph">
          {paragraph}
        </div>
      </div>

      <div className="place-presentation-section__images-block">
        <Image
          src={firstImage}
          alt=""
          className="place-presentation-section__images-block__image"
          width={400}
          height={500}
        />

        <Image
          src={secondImage}
          alt=""
          className="place-presentation-section__images-block__image"
          width={400}
          height={500}
        />
      </div>
    </section>
  );
}

export default PlacePresentationSection;
