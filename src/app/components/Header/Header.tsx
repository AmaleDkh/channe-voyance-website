// Next element
import Image from "next/image";

// Components
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Button from "../Button/Button";

// Style
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__first-block">
        <Image
          src=""
          alt="Test"
          className="header__first-block__logo"
          width={80}
          height={80}
        />
        <Button text="PRENDRE RENDEZ-VOUS" />
      </div>

      <NavigationMenu />
    </header>
  );
}

export default Header;
