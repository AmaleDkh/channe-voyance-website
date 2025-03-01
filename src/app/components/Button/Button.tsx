// Next element
import Link from "next/link";

// Style
import "./Button.scss";

// Type
type ButtonProps = {
  text: string;
  link: string;
  buttonWithMarginAuto: string;
};

function Button({ text, link, buttonWithMarginAuto }: ButtonProps) {
  return (
    <Link href={link} className={`button ${buttonWithMarginAuto}`}>
      {text}
    </Link>
  );
}

export default Button;
