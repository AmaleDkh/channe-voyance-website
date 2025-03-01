// Style
import "./AddressAndAccess.scss";

interface AddressAndAccessProps {
  localisationAddress: string;
  localisationFirstAccess: string;
  localisationSecondAccess: string;
  localisationThirdAccess: string;
}

function AddressAndAccess({
  localisationAddress,
  localisationFirstAccess,
  localisationSecondAccess,
  localisationThirdAccess,
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
          <p className="address-and-access__blocks__item__first-paragraph">
            {localisationFirstAccess}
          </p>
          <p className="address-and-access__blocks__item__second-paragraph">
            {localisationSecondAccess}
          </p>
          <p>{localisationThirdAccess}</p>
        </div>
      </div>
    </section>
  );
}

export default AddressAndAccess;
