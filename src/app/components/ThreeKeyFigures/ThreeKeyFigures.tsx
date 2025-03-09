// Style
import "./ThreeKeyFigures.scss";

function ThreeKeyFigures() {
  return (
    <section className="three-key-figures">
      <div className="three-key-figures__block">
        <span className="three-key-figures__block__number">+ 9 500</span>
        <p className="three-key-figures__block__text">personnes accompagnées</p>
      </div>

      <div className="three-key-figures__block">
        <span className="three-key-figures__block__number">16</span>
        <p className="three-key-figures__block__text">ans d'expérience</p>
      </div>

      <div className="three-key-figures__block">
        <span className="three-key-figures__block__number">4,6</span>
        <p className="three-key-figures__block__text">note moyenne</p>
      </div>
    </section>
  );
}

export default ThreeKeyFigures;
