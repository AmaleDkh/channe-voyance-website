// Style
import "./ReadingPricesBlocks.scss";

interface ReadingPricesBlocksProps {
  firstItemTitle: string;
  firstItemDuration: string;
  firstItemPrice: string;
  secondItemTitle: string;
  secondItemDuration: string;
  secondItemPrice: string;
}

function ReadingPricesBlocks({
  firstItemTitle,
  firstItemDuration,
  firstItemPrice,
  secondItemTitle,
  secondItemDuration,
  secondItemPrice,
}: ReadingPricesBlocksProps) {
  return (
    <section className="reading-price">
      <div className="reading-price__blocks">
        <div className="reading-price__blocks__first-item">
          <h3 className="reading-price__blocks__first-item__title">
            {firstItemTitle}
          </h3>
          <p className="reading-price__blocks__first-item__duration">
            {firstItemDuration}
          </p>
          <p>{firstItemPrice}</p>
        </div>
        <div className="reading-price__blocks__second-item">
          <h3 className="reading-price__blocks__second-item__title">
            {secondItemTitle}
          </h3>
          <p className="reading-price__blocks__second-item__duration">
            {secondItemDuration}
          </p>
          <p>{secondItemPrice}</p>
        </div>
      </div>
    </section>
  );
}

export default ReadingPricesBlocks;
