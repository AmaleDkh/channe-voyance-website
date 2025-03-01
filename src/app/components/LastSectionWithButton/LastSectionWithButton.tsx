// Component
import Button from "../Button/Button";

// Style
import "./LastSectionWithButton.scss";

type LastSectionWithButtonProps = {
  title: string;
  paragraph: string;
  lastSectionWithButtonWithMarginTop: string;
};

function LastSectionWithButton({
  title,
  paragraph,
  lastSectionWithButtonWithMarginTop,
}: LastSectionWithButtonProps) {
  return (
    <section
      className={`last-section-with-button ${lastSectionWithButtonWithMarginTop}`}
    >
      <div className="last-section-with-button__text">
        <h2 className="last-section-with-button__text__title">{title}</h2>
        <p className="last-section-with-button__text__subtitle">{paragraph}</p>
      </div>
      <Button text="PRENDRE RENDEZ-VOUS" link="" buttonWithMarginAuto="" />
    </section>
  );
}

export default LastSectionWithButton;
