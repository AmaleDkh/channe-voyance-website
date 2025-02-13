// Style
import "./PriceItem.scss";

interface priceItemProps {
  title: string;
  duration: string;
  price: string;
}

function PriceItem({ title, duration, price }: priceItemProps) {
  return (
    <div className="price-item">
      <h3 className="price-item__title">{title}</h3>
      <p className="price-item__duration">{duration}</p>
      <p>{price}</p>
    </div>
  );
}

export default PriceItem;
