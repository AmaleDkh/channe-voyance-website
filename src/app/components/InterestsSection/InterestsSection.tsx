// Next element
import Image from "next/image";

// Style
import "./InterestsSection.scss";

interface interestsSectionProps {
  image: string;
  title: string;
  paragraph: string;
}

function InterestsSection({ image, title, paragraph }: interestsSectionProps) {
  return (
    <section className="interests-section">
      <Image
        src={image}
        alt=""
        className="interests-section__image"
        width={600}
        height={800}
      />
      <div className="interests-section__texts">
        <h2 className="interests-section__texts__title">{title}</h2>
        <p className="interests-section__texts__paragraph">{paragraph}</p>
      </div>
    </section>
  );
}

export default InterestsSection;
