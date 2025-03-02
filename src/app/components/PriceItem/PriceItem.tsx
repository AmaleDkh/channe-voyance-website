// Next element
import Image from "next/image";

// Style
import "./PriceItem.scss";

interface priceItemProps {
  image: string;
  title: string;
  duration: string;
  price: string;
}

function PriceItem({ image, title, duration, price }: priceItemProps) {
  return (
    <div className="price-item">
      {/* <Image
        src={image}
        alt=""
        className="item-store__image"
        width={400}
        height={400}
      /> */}
      <div className="price-item__block">
        <p className="price-item__block__title">{title}</p>
        <p className="price-item__block__duration">{duration}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default PriceItem;
