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
      <p
        className="question-and-answer__question"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {question}
      </p>
      {isOpen && (
        <p
          // className="question-and-answer__answer"
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
