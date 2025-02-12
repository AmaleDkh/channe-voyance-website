// Next elements
import Image from "next/image";
import { usePathname } from "next/navigation";

// Style
import "./BenefitsSection.scss";

interface imageAndTextBlockProps {
  title: string;
  introduction: string;
  image: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  benefit4: string;
  benefit5: string;
}

function BenefitsSection({
  image,
  title,
  introduction,
  benefit1,
  benefit2,
  benefit3,
  benefit4,
  benefit5,
}: imageAndTextBlockProps) {
  const pathname = usePathname();

  return (
    <section className="benefits-section">
      <div className="benefits-section__text">
        <h2 className="benefits-section__text__title">{title}</h2>
        <p className="benefits-section__text__paragraph">{introduction}</p>
      </div>

      <div className="benefits-section__content">
        <ul className="benefits-section__content__list">
          <li className="benefits-section__content__list__item">{benefit1}</li>
          <li className="benefits-section__content__list__item">{benefit2}</li>
          <li className="benefits-section__content__list__item">{benefit3}</li>
          <li className="benefits-section__content__list__item">{benefit4}</li>
          <li className="benefits-section__content__list__item">{benefit5}</li>
        </ul>
      </div>

      <Image
        src={image}
        alt=""
        className="benefits-section__image-container__image"
        width={600}
        height={600}
      />
    </section>
  );
}

export default BenefitsSection;
