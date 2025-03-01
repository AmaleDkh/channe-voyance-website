// Style
import "./StoreList.scss";

// Component
import ItemStore from "../ItemStore/ItemStore";

// Custom hooks
import { useBoutiqueData } from "../../../hooks/useData";

function StoreList() {
  const { boutiqueItemsContent } = useBoutiqueData();

  return (
    <section className="store-list">
      {boutiqueItemsContent && (
        <div className="store-list__items-block">
          <ItemStore
            image={boutiqueItemsContent.store_first_item_image}
            name={boutiqueItemsContent.store_first_item_name}
            price={boutiqueItemsContent.store_first_item_price}
          />
          <ItemStore
            image={boutiqueItemsContent.store_second_item_image}
            name={boutiqueItemsContent.store_second_item_name}
            price={boutiqueItemsContent.store_second_item_price}
          />
          <ItemStore
            image={boutiqueItemsContent.store_third_item_image}
            name={boutiqueItemsContent.store_third_item_name}
            price={boutiqueItemsContent.store_third_item_price}
          />
          <ItemStore
            image={boutiqueItemsContent.store_fourth_item_image}
            name={boutiqueItemsContent.store_fourth_item_name}
            price={boutiqueItemsContent.store_fourth_item_price}
          />
          <ItemStore
            image={boutiqueItemsContent.store_fifth_item_image}
            name={boutiqueItemsContent.store_fifth_item_name}
            price={boutiqueItemsContent.store_fifth_item_price}
          />
          <ItemStore
            image={boutiqueItemsContent.store_sixth_item_image}
            name={boutiqueItemsContent.store_sixth_item_name}
            price={boutiqueItemsContent.store_sixth_item_price}
          />
        </div>
      )}
      <p className="store-list__paragraph">
        Les achats s'effectuent exclusivement au cabinet. Pour plus
        d'informations ou pour passer commande, je vous remercie de me
        contacter.
      </p>
    </section>
  );
}

export default StoreList;
