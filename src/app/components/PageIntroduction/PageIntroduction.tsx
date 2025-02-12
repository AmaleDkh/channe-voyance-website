// Style
import "./PageIntroduction.scss";

interface pageIntroductionProps {
  title: string;
  subtitle: string;
}

function PageIntroduction({ title, subtitle }: pageIntroductionProps) {
  return (
    <section className="page-introduction">
      <h1 className="page-introduction__title">{title}</h1>
      <p className="page-introduction__subtitle">{subtitle}</p>
    </section>
  );
}

export default PageIntroduction;
