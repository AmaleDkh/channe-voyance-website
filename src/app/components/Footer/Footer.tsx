// Style
import "./Footer.scss";

// Custom hook
import { usePracticalInformationData } from "../../../hooks/useData";

function Footer() {
  const { practicalInformationContent } = usePracticalInformationData();

  return (
    <footer className="footer">
      <div className="footer__blocks">
        <p>© 2025</p>

        <div className="footer__blocks__content">
          <div className="footer__blocks__content__block">
            <h3 className="footer__blocks__content__block__title">Approches</h3>

            <div className="footer__blocks__content__block__texts">
              <p className="footer__blocks__content__block__texts__text">
                Voyance
              </p>
              <p className="footer__blocks__content__block__texts__text">
                Méditation
              </p>
              <p className="footer__blocks__content__block__texts__text">
                Soins énergétiques
              </p>
              <p className="footer__blocks__content__block__texts__text">
                Tous les tarifs
              </p>
            </div>
          </div>

          <div className="footer__blocks__content__block">
            <h3 className="footer__blocks__content__block__title">
              Coordonnées
            </h3>
            {practicalInformationContent && (
              <div className="footer__blocks__content__block__texts">
                <p className="footer__blocks__content__block__texts__text">
                  {practicalInformationContent.contact}
                </p>
                <p className="footer__blocks__content__block__texts__text">
                  {practicalInformationContent.opening_hours}
                </p>
              </div>
            )}
          </div>

          <div className="footer__blocks__content__block">
            <h3 className="footer__blocks__content__block__title">
              Adresse & accès
            </h3>
            {practicalInformationContent && (
              <div className="footer__blocks__content__block__texts">
                <p className="footer__blocks__content__block__texts__text">
                  {practicalInformationContent.localisation_address}
                </p>
                <p className="footer__blocks__content__block__texts__text">
                  {practicalInformationContent.localisation_first_access}
                </p>
                <p className="footer__blocks__content__block__texts__text">
                  {practicalInformationContent.localisation_second_access}
                </p>
                <p className="footer__blocks__content__block__texts__text">
                  {practicalInformationContent.localisation_third_access}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <p>DESIGN & CODE</p>
    </footer>
  );
}

export default Footer;
