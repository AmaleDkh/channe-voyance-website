// Component
import PriceItem from "../PriceItem/PriceItem";

// Style
import "./PricesBlocks.scss";

interface PricesBlocksProps {
  firstImage: string;
  firstTitle: string;
  firstDuration: string;
  firstPrice: string;
  secondImage: string;
  secondTitle: string;
  secondDuration: string;
  secondPrice: string;
  thirdImage: string;
  thirdTitle: string;
  thirdDuration: string;
  thirdPrice: string;
}

function PricesBlocks({
  firstImage,
  firstTitle,
  firstDuration,
  firstPrice,
  secondImage,
  secondTitle,
  secondDuration,
  secondPrice,
  thirdImage,
  thirdTitle,
  thirdDuration,
  thirdPrice,
}: PricesBlocksProps) {
  return (
    <section className="price-items">
      <div className="price-items__list">
        <PriceItem
          // image={firstImage}
          image=""
          title={firstTitle}
          duration={firstDuration}
          price={firstPrice}
        />

        <PriceItem
          // image={secondImage}
          image=""
          title={secondTitle}
          duration={secondDuration}
          price={secondPrice}
        />

        <PriceItem
          // image={thirdImage}
          image=""
          title={thirdTitle}
          duration={thirdDuration}
          price={thirdPrice}
        />
      </div>
    </section>
  );
}

export default PricesBlocks;
