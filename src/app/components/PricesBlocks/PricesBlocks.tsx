// Next element
import Image from "next/image";
import { usePathname } from "next/navigation";

// Component
import PriceItem from "../PriceItem/PriceItem";

// Style
import "./PricesBlocks.scss";

// Custom hooks
import { useCarePricesBlocksData } from "../../../hooks/useData";

interface ReadingPricesBlocks {
  pricesPageVersion: string;
  title: string;
  page: string;
}

function ReadingPricesBlocks({
  title,
  page,
  pricesPageVersion,
}: ReadingPricesBlocks) {
  const pathname = usePathname();
  const carePricesContentArray = useCarePricesBlocksData();
  const carePricesFiltered = carePricesContentArray.filter(
    (carePrices) => carePrices.care === page
  );

  return (
    <section className={`reading-price ${pricesPageVersion}`}>
      <h2>{title}</h2>
      <div className="reading-price__blocks">
        {carePricesFiltered.map((carePrice, index) => (
          <div key={index}>
            <PriceItem
              image=""
              title={carePrice.care_communication}
              duration={carePrice.care_duration}
              price={carePrice.care_price}
            />
          </div>
        ))}
      </div>

      {page === "Voyance" && (
        <p className="reading-price__paragraph">
          Suite à notre consultation, vous pourrez me recontacter si vous
          souhaitez obtenir des conseils supplémentaires. Je vous informerai du
          tarif en fonction de la durée de nos échanges.
        </p>
      )}
    </section>
  );
}

export default ReadingPricesBlocks;
