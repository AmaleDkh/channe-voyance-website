// Next element
import Image from "next/image";

// Style
import "./SelfPractice.scss";

interface selfPracticeProps {
  title: string;
  paragraph: string;
  firstImage: string;
  secondImage: string;
}

function SelfPractice({
  title,
  paragraph,
  firstImage,
  secondImage,
}: selfPracticeProps) {
  return (
    <section className="self-practice-section">
      <div className="self-practice-section__first-image-container">
        <Image
          src={firstImage}
          alt=""
          className="self-practice-section__first-image-container__image"
          width={600}
          height={600}
        />

        <Image
          src={secondImage}
          alt=""
          className="self-practice-section__second-image-container__image"
          width={864}
          height={864}
        />
      </div>

      <div className="self-practice-section__questions-container">
        <h2 className="self-practice-section__questions-container__title">
          {title}
        </h2>
        <div className="self-practice-section__questions-container__questions">
          {paragraph}
        </div>
      </div>
    </section>
  );
}

export default SelfPractice;
