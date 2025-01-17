// Next element
import Link from "next/link";

// Next element
import "./Button.scss";

// Type
type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return (
    <Link href="" className="button">
      {text}
    </Link>
  );
}

export default Button;
