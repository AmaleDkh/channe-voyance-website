// Next element
import Image from "next/image";

// Style
import "./ItemStore.scss";

interface itemStoreProps {
  image: string;
  name: string;
  price: string;
}

function ItemStore({ image, name, price }: itemStoreProps) {
  return (
    <div className="item-store">
      <Image
        src={image}
        alt=""
        className="item-store__image"
        width={400}
        height={400}
      />
      <div className="item-store__content">
        <p className="item-store__content__title">{name}</p>
        <p className="item-store__content__price">{price}</p>
      </div>
    </div>
  );
}

export default ItemStore;
