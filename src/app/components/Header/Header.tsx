// Next elements
import Image from "next/image";
import Link from "next/link";

// Components
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Button from "../Button/Button";

// Style
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__first-block">
        {/* <Image
          src=""
          alt="Test"
          className="header__first-block__logo"
          width={80}
          height={80}
        /> */}
        <Link className="header__first-block__name-and-profession" href="/">
          <div className="header__first-block__name-and-profession__first-and-last-name">
            Channe
          </div>
          <div className="header__first-block__name-and-profession__profession">
            Voyance
          </div>
        </Link>
        <div className="header__button">
          <Button
            text="PRENDRE RENDEZ-VOUS"
            link="https://www.planity.com/channe-massage-92210-saint-cloud"
            buttonWithMarginAuto=""
            buttonSecondVersion=""
          />
        </div>
      </div>

      <NavigationMenu />
    </header>
  );
}

export default Header;
