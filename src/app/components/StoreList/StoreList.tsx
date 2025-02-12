// Style
import "./StoreList.scss";

// Component
import ItemStore from "../ItemStore/ItemStore";

// Custom hooks
import { useBoutiqueData } from "../../../hooks/useData";

function StoreList() {
  const { boutiqueItemsContent } = useBoutiqueData();

  return (
    <div className="store-list">
      {boutiqueItemsContent && (
        <>
          <ItemStore
            image=""
            name={boutiqueItemsContent.store_first_item_name}
            price={boutiqueItemsContent.store_first_item_price}
          />
          <ItemStore
            image=""
            name={boutiqueItemsContent.store_second_item_name}
            price={boutiqueItemsContent.store_second_item_price}
          />
          <ItemStore
            image=""
            name={boutiqueItemsContent.store_third_item_name}
            price={boutiqueItemsContent.store_third_item_price}
          />
          <ItemStore
            image=""
            name={boutiqueItemsContent.store_fourth_item_name}
            price={boutiqueItemsContent.store_fourth_item_price}
          />
        </>
      )}
    </div>
  );
}

export default StoreList;
