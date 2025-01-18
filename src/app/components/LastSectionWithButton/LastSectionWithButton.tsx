// Component
import Button from "../Button/Button";

// Style
import "./LastSectionWithButton.scss";

function LastSectionWithButton() {
  return (
    <section className="last-section-with-button">
      <div className="last-section-with-button__text">
        <h2 className="last-section-with-button__text__title">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </h2>
        <p className="last-section-with-button__text__subtitle">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </p>
      </div>
      <Button text="PRENDRE RENDEZ-VOUS" />
    </section>
  );
}

export default LastSectionWithButton;
