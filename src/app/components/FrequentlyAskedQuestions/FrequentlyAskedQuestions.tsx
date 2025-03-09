"use client";

// Next element
import { usePathname } from "next/navigation";

// Component
import QuestionAndAnswer from "../QuestionAndAnswer/QuestionAndAnswer";

// Style
import "./FrequentlyAskedQuestions.scss";

// Custom hook
import { useFaqSectionData } from "../../../hooks/useData";

interface FaqQuestionsProps {
  page: string;
  practiceName: string;
}

function FrequentlyAskedQuestions({ page, practiceName }: FaqQuestionsProps) {
  const pathname = usePathname();

  const faqSectionsContentArray = useFaqSectionData();

  const faqQuestionsFiltered = faqSectionsContentArray.filter(
    (faqQuestion) => faqQuestion.page === page
  );

  return (
    <section className="frequently-asked-questions-section">
      <div className="frequently-asked-questions-section__questions-container">
        <h2 className="frequently-asked-questions-section__questions-container__title">
          Questions fréquentes sur {practiceName}
        </h2>

        <h2 className="frequently-asked-questions-section__questions-container__title--mobile-version">
          Questions fréquentes
        </h2>

        <div className="frequently-asked-questions-section__questions-container__questions">
          {faqQuestionsFiltered.map((faqQuestion, index) => (
            <div key={index}>
              <QuestionAndAnswer
                question={faqQuestion.question}
                answer={faqQuestion.answer}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FrequentlyAskedQuestions;
