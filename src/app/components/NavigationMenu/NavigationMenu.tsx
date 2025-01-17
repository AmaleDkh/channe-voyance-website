// Next element
import Link from "next/link";

// Style
import "./NavigationMenu.scss";

function NavigationMenu() {
  return (
    <nav className="navigation-menu">
      <ul className="navigation-menu__list">
        <li className="navigation-menu__list__item">
          <Link
            className="navigation-menu__list__item__link"
            href="/pages/services"
          >
            SERVICES PROPOSÉS
          </Link>
        </li>
        <li className="navigation-menu__list__item">
          <Link
            className="navigation-menu__list__item__link"
            href="/pages/practical-information"
          >
            INFORMATIONS PRATIQUES
          </Link>
        </li>
        <li className="navigation-menu__list__item">
          <Link
            className="navigation-menu__list__item__link"
            href="/pages/store"
          >
            BOUTIQUE
          </Link>
        </li>
        <li className="navigation-menu__list__item">
          <Link
            className="navigation-menu__list__item__link"
            href="/pages/reviews"
          >
            AVIS
          </Link>
        </li>
        <li className="navigation-menu__list__item">
          <Link
            className="navigation-menu__list__item__link"
            href="/pages/about"
          >
            À PROPOS
          </Link>
        </li>
        <li className="navigation-menu__list__item">
          <Link
            className="navigation-menu__list__item__link"
            href="/pages/contact"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationMenu;
