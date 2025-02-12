"use client";

// Next element
import Link from "next/link";
import { useState } from "react";

// Font Awesome icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// Style
import "./NavigationMenu.scss";

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="navigation-menu">
      <ul className="navigation-menu__list">
        <li
          className="navigation-menu__list__item pratices-item navigation-menu__list__item--pratices-item"
          onClick={handleMenuToggle}
        >
          <Link
            className="navigation-menu__list__item__link"
            href="/pages/services"
          >
            {/* PRATIQUES */}
            LES APPPROCHES
          </Link>
          <FontAwesomeIcon icon={faCaretDown} />

          {isOpen && (
            <ul className="navigation-menu__practices">
              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/pages/reading"
                >
                  VOYANCE
                </Link>
              </li>

              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/pages/meditation"
                >
                  MÉDITATION
                </Link>
              </li>

              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/pages/energy-care"
                >
                  SOINS ÉNERGÉTIQUES
                </Link>
              </li>
            </ul>
          )}
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
        {/* <li className="navigation-menu__list__item">
          <Link
            className="navigation-menu__list__item__link"
            href="/pages/contact"
          >
            CONTACT
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default NavigationMenu;
