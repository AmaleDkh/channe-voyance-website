// React element
import { useState } from "react";

// Style
import "./QuestionAndAnswer.scss";

interface QuestionsProps {
  question: string;
  answer: string;
}

function QuestionAndAnswer({ question, answer }: QuestionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="question-and-answer">
      <div
        className="question-and-answer__question-block"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        <p className="question-and-answer__question">{question}</p>
        <hr className="question-and-answer__question-block__dash"></hr>

        {/* <span className="question-and-answer__question-block__dash"></span> */}
        {/* <span className="question-and-answer__question-block__dash">-</span> */}
      </div>
      {/* <p
        className="question-and-answer__question"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {question}
      </p> */}

      {isOpen && (
        <p
          className={`question-and-answer__answer ${
            isOpen ? "question-and-answer__answer--open" : ""
          }`}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default QuestionAndAnswer;
