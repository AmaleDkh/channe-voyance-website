// Component
import PriceItem from "../PriceItem/PriceItem";

// Style
import "./PricesBlocks.scss";

interface PricesBlocksProps {
  firstTitle: string;
  firstDuration: string;
  firstPrice: string;
  secondTitle: string;
  secondDuration: string;
  secondPrice: string;
  thirdTitle: string;
  thirdDuration: string;
  thirdPrice: string;
}

function PricesBlocks({
  firstTitle,
  firstDuration,
  firstPrice,
  secondTitle,
  secondDuration,
  secondPrice,
  thirdTitle,
  thirdDuration,
  thirdPrice,
}: PricesBlocksProps) {
  return (
    <section className="price-items">
      <div className="price-items__list">
        <PriceItem
          title={firstTitle}
          duration={firstDuration}
          price={firstPrice}
        />

        <PriceItem
          title={secondTitle}
          duration={secondDuration}
          price={secondPrice}
        />

        <PriceItem
          title={thirdTitle}
          duration={thirdDuration}
          price={thirdPrice}
        />
      </div>
    </section>
  );
}

export default PricesBlocks;
