// Next element
import { usePathname } from "next/navigation";

// Components
import ReadingPricesBlocks from "../ReadingPricesBlocks/ReadingPricesBlocks";
import PricesBlocks from "../PricesBlocks/PricesBlocks";

// Style
import "./PricesSection.scss";

// Custom hooks
import { useCarePricesBlocksData } from "../../../hooks/useData";

function PricesSection() {
  const pathname = usePathname();
  const { readingCarePricesContent } = useCarePricesBlocksData();
  const { meditationCarePricesContent } = useCarePricesBlocksData();

  return (
    <section className="prices-section">
      <h2 className="prices-section__title">Durées & tarifs</h2>
      {pathname === "/pages/reading" ? (
        readingCarePricesContent ? (
          <ReadingPricesBlocks
            firstItemImage={readingCarePricesContent.first_care_image}
            firstItemTitle={readingCarePricesContent.first_care_communication}
            firstItemDuration={readingCarePricesContent.first_care_duration}
            firstItemPrice={readingCarePricesContent.first_care_price}
            secondItemImage={readingCarePricesContent.second_care_image}
            secondItemTitle={readingCarePricesContent.second_care_communication}
            secondItemDuration={readingCarePricesContent.second_care_duration}
            secondItemPrice={readingCarePricesContent.second_care_price}
          />
        ) : null
      ) : meditationCarePricesContent ? (
        <PricesBlocks
          firstImage={meditationCarePricesContent.first_care_image}
          firstTitle={meditationCarePricesContent.first_care_communication}
          firstDuration={meditationCarePricesContent.first_care_duration}
          firstPrice={meditationCarePricesContent.first_care_price}
          secondImage={meditationCarePricesContent.second_care_image}
          secondTitle={meditationCarePricesContent.second_care_communication}
          secondDuration={meditationCarePricesContent.second_care_duration}
          secondPrice={meditationCarePricesContent.second_care_price}
          thirdImage={meditationCarePricesContent.third_care_image}
          thirdTitle={meditationCarePricesContent.third_care_communication}
          thirdDuration={meditationCarePricesContent.third_care_duration}
          thirdPrice={meditationCarePricesContent.third_care_price}
        />
      ) : null}

      <div className="prices-section__payment-methods">
        {pathname === "/pages/reading" ? (
          <p>
            Si vous souhaitez échanger quelques minutes avant de réserver une
            séance, 1 minute sera facturée 3 €.
            <br></br>
            Modes de paiement acceptés : Carte bancaire, PayPal, chèques,
            espèces.
            <br></br>
          </p>
        ) : (
          <p>
            Modes de paiement acceptés : Carte bancaire, PayPal, chèques,
            espèces.
          </p>
        )}
      </div>
    </section>
  );
}

export default PricesSection;
