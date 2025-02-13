// Style
import "./AddressAndAccess.scss";

interface AddressAndAccessProps {
  localisationAddress: string;
  localisationAccess: string;
}

function AddressAndAccess({
  localisationAddress,
  localisationAccess,
}: AddressAndAccessProps) {
  return (
    <section className="address-and-access">
      <h2 className="address-and-access__title">Localisation</h2>
      <div className="address-and-access__blocks">
        <div className="address-and-access__blocks__item">
          <h3 className="address-and-access__blocks__item__title">Adresse</h3>
          <p>{localisationAddress}</p>
        </div>

        <div className="address-and-access__blocks__item">
          <h3 className="address-and-access__blocks__item__title">Accès</h3>
          <p>{localisationAccess}</p>
        </div>
      </div>
    </section>
  );
}

export default AddressAndAccess;
