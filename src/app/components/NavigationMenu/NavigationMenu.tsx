"use client";

// Next & React elements
import Link from "next/link";
import { useState, useEffect } from "react";

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

  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
  };

  useEffect(() => {
    if (isHamburgerMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isHamburgerMenuOpen]);

  return (
    <nav className="navigation-menu">
      <ul className="navigation-menu__list">
        <li
          className="navigation-menu__list__item pratices-item navigation-menu__list__item--pratices-item"
          onClick={handleMenuToggle}
        >
          <Link className="navigation-menu__list__item__link" href="/services">
            PRATIQUES
          </Link>
          <FontAwesomeIcon icon={faCaretDown} />

          {isOpen && (
            <ul className="navigation-menu__practices">
              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/reading"
                >
                  VOYANCE
                </Link>
              </li>

              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/meditation"
                >
                  MÉDITATION
                </Link>
              </li>

              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/energy-care"
                >
                  SOINS ÉNERGÉTIQUES
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="navigation-menu__list__item">
          <Link className="navigation-menu__list__item__link" href="/prices">
            TARIFS
          </Link>
        </li>

        <li className="navigation-menu__list__item">
          <Link
            className="navigation-menu__list__item__link"
            href="/practical-information"
          >
            INFORMATIONS PRATIQUES
          </Link>
        </li>

        <li className="navigation-menu__list__item">
          <Link className="navigation-menu__list__item__link" href="/store">
            BOUTIQUE
          </Link>
        </li>

        <li className="navigation-menu__list__item">
          <Link className="navigation-menu__list__item__link" href="/reviews">
            AVIS
          </Link>
        </li>

        <li className="navigation-menu__list__item">
          <Link className="navigation-menu__list__item__link" href="/about">
            À PROPOS
          </Link>
        </li>
      </ul>

      <div className="menu-hamburger">
        <button
          className={`menu-hamburger__button ${
            isHamburgerMenuOpen ? "open" : ""
          }`}
          onClick={toggleHamburgerMenu}
          aria-expanded={isHamburgerMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        className={`menu-hamburger__nav ${isHamburgerMenuOpen ? "open" : ""}`}
      >
        <svg
          onClick={() => setIsHamburgerMenuOpen(false)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <div className="menu-hamburger__nav__block">
          <nav>
            <ul>
              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/services"
                >
                  PRATIQUES
                </Link>
              </li>

              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/prices"
                >
                  TARIFS
                </Link>
              </li>

              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/practical-information"
                >
                  INFORMATIONS PRATIQUES
                </Link>
              </li>

              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/store"
                >
                  BOUTIQUE
                </Link>
              </li>

              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/reviews"
                >
                  AVIS
                </Link>
              </li>

              <li className="navigation-menu__list__item">
                <Link
                  className="navigation-menu__list__item__link"
                  href="/about"
                >
                  À PROPOS
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default NavigationMenu;
