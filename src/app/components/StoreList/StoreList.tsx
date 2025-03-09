// Style
import "./StoreList.scss";

// Component
import ItemStore from "../ItemStore/ItemStore";

// Custom hooks
import { useBoutiqueData } from "../../../hooks/useData";

function StoreList() {
  const boutiqueItemsContentArray = useBoutiqueData();

  return (
    <section className="store-list">
      <div className="store-list__items-block">
        {boutiqueItemsContentArray.map((product, index) => (
          <div key={index}>
            <ItemStore
              image={product.product_image}
              name={product.product_name}
              price={product.product_price}
            />
          </div>
        ))}
      </div>

      <p className="store-list__paragraph">
        Les achats s'effectuent exclusivement au cabinet. Pour plus
        d'informations ou pour passer commande, je vous remercie de me
        contacter.
      </p>
    </section>
    // <div></div>s
  );
}

export default StoreList;
