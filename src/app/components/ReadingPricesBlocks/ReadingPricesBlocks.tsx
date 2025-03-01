// Next element
import Image from "next/image";

// Style
import "./ReadingPricesBlocks.scss";

interface ReadingPricesBlocksProps {
  firstItemImage: string;
  firstItemTitle: string;
  firstItemDuration: string;
  firstItemPrice: string;
  secondItemImage: string;
  secondItemTitle: string;
  secondItemDuration: string;
  secondItemPrice: string;
}

function ReadingPricesBlocks({
  firstItemImage,
  firstItemTitle,
  firstItemDuration,
  firstItemPrice,
  secondItemImage,
  secondItemTitle,
  secondItemDuration,
  secondItemPrice,
}: ReadingPricesBlocksProps) {
  return (
    <section className="reading-price">
      <div className="reading-price__blocks">
        <div className="reading-price__blocks__first-item">
          <Image
            src={firstItemImage}
            alt=""
            className="reading-price__blocks__first-item__image"
            width={400}
            height={400}
          />
          <div className="reading-price__blocks__first-item__content">
            <h3 className="reading-price__blocks__first-item__title">
              {firstItemTitle}
            </h3>
            <p className="reading-price__blocks__first-item__duration">
              {firstItemDuration}
            </p>
            <p>{firstItemPrice}</p>
          </div>
        </div>

        <div className="reading-price__blocks__first-item">
          <Image
            src={secondItemImage}
            alt=""
            className="reading-price__blocks__first-item__image"
            width={400}
            height={400}
          />
          <div className="reading-price__blocks__first-item__content">
            <h3 className="reading-price__blocks__second-item__title">
              {secondItemTitle}
            </h3>
            <p className="reading-price__blocks__second-item__duration">
              {secondItemDuration}
            </p>
            <p>{secondItemPrice}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadingPricesBlocks;
