// Style
import "./Footer.scss";

// Custom hook
import { usePracticalInformationData } from "../../../hooks/useData";

function Footer() {
  const practicalInformationContentArray = usePracticalInformationData();

  return (
    <footer className="footer">
      <div className="footer__blocks">
        <div className="header__first-block__name-and-profession">
          <div className="header__first-block__name-and-profession__first-and-last-name">
            Channe
          </div>
          <div className="header__first-block__name-and-profession__profession">
            Voyance
          </div>
        </div>

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

            {practicalInformationContentArray && (
              <div className="footer__blocks__content__block__texts">
                <p className="footer__blocks__content__block__texts__text">
                  {practicalInformationContentArray[0]?.contact}
                </p>
                <p className="footer__blocks__content__block__texts__text">
                  {practicalInformationContentArray[0]?.opening_hours}
                </p>
              </div>
            )}
          </div>

          <div className="footer__blocks__content__block">
            <h3 className="footer__blocks__content__block__title">
              Adresse & accès
            </h3>

            {practicalInformationContentArray && (
              <div className="footer__blocks__content__block__texts">
                <p className="footer__blocks__content__block__texts__text">
                  {practicalInformationContentArray[0]?.localisation_address}
                </p>
                <p className="footer__blocks__content__block__texts__text">
                  {
                    practicalInformationContentArray[0]
                      ?.localisation_first_access
                  }
                </p>
                <p className="footer__blocks__content__block__texts__text">
                  {
                    practicalInformationContentArray[0]
                      ?.localisation_second_access
                  }
                </p>
                <p className="footer__blocks__content__block__texts__text">
                  {
                    practicalInformationContentArray[0]
                      ?.localisation_third_access
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <p>
        DESIGN & CODE PAR AMALE DKHISSI |{" "}
        <a href="https://amale-dkhissi.com/">PORTFOLIO</a>
      </p>
    </footer>
  );
}

export default Footer;
