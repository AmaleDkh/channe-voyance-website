// Next element
import Link from "next/link";

// Style
import "./Button.scss";

// Type
type ButtonProps = {
  text: string;
  link: string;
  buttonWithMarginAuto: string;
  buttonSecondVersion: string;
};

function Button({
  text,
  link,
  buttonWithMarginAuto,
  buttonSecondVersion,
}: ButtonProps) {
  return (
    <Link
      href={link}
      className={`button ${buttonWithMarginAuto} ${buttonSecondVersion}`}
    >
      {text}
    </Link>
  );
}

export default Button;
