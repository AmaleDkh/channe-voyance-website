"use client";

// Component
import QuestionAndAnswer from "../QuestionAndAnswer/QuestionAndAnswer";

// Style
import "./FrequentlyAskedQuestions.scss";

interface FaqsSectionProps {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  question7: string;
  question8: string;
  question9: string;
  question10: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  answer7: string;
  answer8: string;
  answer9: string;
  answer10: string;
  image: string;
}

function FrequentlyAskedQuestions({
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
  question4,
  answer4,
  question5,
  answer5,
  question6,
  answer6,
  question7,
  answer7,
  question8,
  answer8,
  question9,
  answer9,
  question10,
  answer10,
  image,
}: FaqsSectionProps) {
  return (
    <section className="frequently-asked-questions-section">
      <div className="frequently-asked-questions-section__questions-container">
        <h2 className="frequently-asked-questions-section__questions-container__title">
          Questions fréquentes
        </h2>
        <div className="frequently-asked-questions-section__questions-container__questions">
          <QuestionAndAnswer question={question1} answer={answer1} />
          <QuestionAndAnswer question={question2} answer={answer2} />
          <QuestionAndAnswer question={question3} answer={answer3} />
          <QuestionAndAnswer question={question4} answer={answer4} />
          <QuestionAndAnswer question={question5} answer={answer5} />
          <QuestionAndAnswer question={question6} answer={answer6} />
          <QuestionAndAnswer question={question7} answer={answer7} />
          <QuestionAndAnswer question={question8} answer={answer8} />
          <QuestionAndAnswer question={question9} answer={answer9} />
          <QuestionAndAnswer question={question10} answer={answer10} />
        </div>
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
