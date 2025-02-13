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
      <h2>Durées & tarifs</h2>
      {pathname === "/pages/reading" ? (
        readingCarePricesContent ? (
          <ReadingPricesBlocks
            firstItemTitle={readingCarePricesContent.first_care_communication}
            firstItemDuration={readingCarePricesContent.first_care_duration}
            firstItemPrice={readingCarePricesContent.first_care_price}
            secondItemTitle={readingCarePricesContent.second_care_communication}
            secondItemDuration={readingCarePricesContent.second_care_duration}
            secondItemPrice={readingCarePricesContent.second_care_price}
          />
        ) : null
      ) : meditationCarePricesContent ? (
        <PricesBlocks
          firstTitle={meditationCarePricesContent.first_care_communication}
          firstDuration={meditationCarePricesContent.first_care_duration}
          firstPrice={meditationCarePricesContent.first_care_price}
          secondTitle={meditationCarePricesContent.second_care_communication}
          secondDuration={meditationCarePricesContent.second_care_duration}
          secondPrice={meditationCarePricesContent.second_care_price}
          thirdTitle={meditationCarePricesContent.third_care_communication}
          thirdDuration={meditationCarePricesContent.third_care_duration}
          thirdPrice={meditationCarePricesContent.third_care_price}
        />
      ) : null}

      <p className="prices-section__payment-methods">
        Modes de paiement acceptés : Carte bancaire, PayPal, chèques, espèces
      </p>
    </section>
  );
}

export default PricesSection;
