"use client";

// Components
import Layout from "../../components/Layout/Layout";
import PageIntroduction from "@/app/components/PageIntroduction/PageIntroduction";
import ContactAndOpeningHours from "@/app/components/ContactAndOpeningHours/ContactAndOpeningHours";
import AddressAndAccess from "@/app/components/AddressAndAccess/AddressAndAccess";
import FrequentlyAskedQuestions from "@/app/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PricesBlocks from "@/app/components/PricesBlocks/PricesBlocks";

// Style
import "../../assets/Global.scss";
import "./practical-information.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  usePracticalInformationData,
  useFaqSectionData,
  useCarePricesBlocksData,
} from "../../../hooks/useData";
import ReadingPricesBlocks from "@/app/components/ReadingPricesBlocks/ReadingPricesBlocks";

function PracticalInformation() {
  const { practicalInformationIntroduction } =
    usePageIntroductionSectionsData();
  const { practicalInformationContent } = usePracticalInformationData();
  const { practicalInformationFaqContent } = useFaqSectionData();
  const { readingCarePricesContent } = useCarePricesBlocksData();
  const { meditationCarePricesContent } = useCarePricesBlocksData();

  return (
    <Layout>
      {practicalInformationIntroduction && (
        <PageIntroduction
          title={practicalInformationIntroduction.introduction_title}
          subtitle={practicalInformationIntroduction.introduction_subtitle}
        />
      )}

      {practicalInformationContent && (
        <ContactAndOpeningHours
          image={practicalInformationContent.practical_information_image}
          contact={practicalInformationContent.contact}
          openingHours={practicalInformationContent.opening_hours}
        />
      )}

      {practicalInformationContent && (
        <AddressAndAccess
          localisationAddress={practicalInformationContent.localisation_address}
          localisationAccess={practicalInformationContent.localisation_access}
        />
      )}

      <div className="practical-information__prices">
        <h2>Durées & tarifs</h2>

        <div className="practical-information__prices__blocks">
          <div className="practical-information__prices__blocks__block">
            <h3 className="practical-information__prices__blocks__block__title">
              La voyance
            </h3>
            {readingCarePricesContent && (
              <ReadingPricesBlocks
                firstItemTitle={
                  readingCarePricesContent.first_care_communication
                }
                firstItemDuration={readingCarePricesContent.first_care_duration}
                firstItemPrice={readingCarePricesContent.first_care_price}
                secondItemTitle={
                  readingCarePricesContent.second_care_communication
                }
                secondItemDuration={
                  readingCarePricesContent.second_care_duration
                }
                secondItemPrice={readingCarePricesContent.second_care_price}
              />
            )}
          </div>

          <div className="practical-information__prices__blocks__block">
            <h3 className="practical-information__prices__blocks__block__title">
              La méditation et les soins énergétiques
            </h3>

            {meditationCarePricesContent && (
              <PricesBlocks
                firstTitle={
                  meditationCarePricesContent.first_care_communication
                }
                firstDuration={meditationCarePricesContent.first_care_duration}
                firstPrice={meditationCarePricesContent.first_care_price}
                secondTitle={
                  meditationCarePricesContent.second_care_communication
                }
                secondDuration={
                  meditationCarePricesContent.second_care_duration
                }
                secondPrice={meditationCarePricesContent.second_care_price}
                thirdTitle={
                  meditationCarePricesContent.third_care_communication
                }
                thirdDuration={meditationCarePricesContent.third_care_duration}
                thirdPrice={meditationCarePricesContent.third_care_price}
              />
            )}
          </div>
        </div>
      </div>

      {practicalInformationFaqContent && (
        <FrequentlyAskedQuestions
          question1={practicalInformationFaqContent.faq_section_question1}
          answer1={practicalInformationFaqContent.faq_section_answer1}
          question2={practicalInformationFaqContent.faq_section_question2}
          answer2={practicalInformationFaqContent.faq_section_answer2}
          question3={practicalInformationFaqContent.faq_section_question3}
          answer3={practicalInformationFaqContent.faq_section_answer3}
          question4={practicalInformationFaqContent.faq_section_question4}
          answer4={practicalInformationFaqContent.faq_section_answer4}
          question5={practicalInformationFaqContent.faq_section_question5}
          answer5={practicalInformationFaqContent.faq_section_answer5}
          question6={practicalInformationFaqContent.faq_section_question6}
          answer6={practicalInformationFaqContent.faq_section_answer6}
          question7={practicalInformationFaqContent.faq_section_question7}
          answer7={practicalInformationFaqContent.faq_section_answer7}
          question8={practicalInformationFaqContent.faq_section_question8}
          answer8={practicalInformationFaqContent.faq_section_answer8}
          question9={practicalInformationFaqContent.faq_section_question9}
          answer9={practicalInformationFaqContent.faq_section_answer9}
          question10={practicalInformationFaqContent.faq_section_question10}
          answer10={practicalInformationFaqContent.faq_section_answer10}
          image={practicalInformationFaqContent.faq_section_image}
        />
      )}
    </Layout>
  );
}

export default PracticalInformation;
