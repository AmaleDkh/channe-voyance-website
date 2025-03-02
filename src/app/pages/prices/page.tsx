"use client";

// Components
import Layout from "../../components/Layout/Layout";
import PageIntroduction from "../../components/PageIntroduction/PageIntroduction";
import ReadingPricesBlocks from "@/app/components/ReadingPricesBlocks/ReadingPricesBlocks";
import PricesBlocks from "@/app/components/PricesBlocks/PricesBlocks";
import FrequentlyAskedQuestions from "@/app/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PlacePresentationSection from "@/app/components/PlacePresentationSection/PlacePresentationSection";
import LastSectionWithButton from "@/app/components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../../assets/style/Global.scss";
import "../practical-information/practical-information.scss";
import "./prices.scss";

// Custom hooks
import {
  useCarePricesBlocksData,
  useFaqSectionData,
  useTextAndImageSectionData,
  useLastSectionsData,
} from "../../../hooks/useData";

function Prices() {
  const { readingCarePricesContent, meditationCarePricesContent } =
    useCarePricesBlocksData();
  const { practicalInformationFaqContent } = useFaqSectionData();
  const { homepageLastContent } = useLastSectionsData();
  const { PlacePresentation } = useTextAndImageSectionData();

  return (
    <Layout>
      <PageIntroduction title="Tarifs" subtitle="" />

      <div className="practical-information__prices">
        <div className="practical-information__prices__blocks prices-page-version">
          <div className="practical-information__prices__blocks__block">
            <h2 className="practical-information__prices__blocks__block__title">
              La voyance
            </h2>
            {readingCarePricesContent && (
              <ReadingPricesBlocks
                firstItemImage={readingCarePricesContent.first_care_image}
                firstItemTitle={
                  readingCarePricesContent.first_care_communication
                }
                firstItemDuration={readingCarePricesContent.first_care_duration}
                firstItemPrice={readingCarePricesContent.first_care_price}
                secondItemImage={readingCarePricesContent.second_care_image}
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
            <h2 className="practical-information__prices__blocks__block__title">
              La méditation et les soins énergétiques
            </h2>

            {meditationCarePricesContent && (
              <PricesBlocks
                firstImage={meditationCarePricesContent.first_care_image}
                firstTitle={
                  meditationCarePricesContent.first_care_communication
                }
                firstDuration={meditationCarePricesContent.first_care_duration}
                firstPrice={meditationCarePricesContent.first_care_price}
                secondTitle={
                  meditationCarePricesContent.second_care_communication
                }
                secondImage={meditationCarePricesContent.second_care_image}
                secondDuration={
                  meditationCarePricesContent.second_care_duration
                }
                secondPrice={meditationCarePricesContent.second_care_price}
                thirdImage={meditationCarePricesContent.third_care_image}
                thirdTitle={
                  meditationCarePricesContent.third_care_communication
                }
                thirdDuration={meditationCarePricesContent.third_care_duration}
                thirdPrice={meditationCarePricesContent.third_care_price}
              />
            )}
          </div>
        </div>

        <p className="prices-page__paragraph">
          Modes de paiement acceptés : Carte bancaire, PayPal, chèques, espèces.
        </p>
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
          question9=""
          answer9=""
          question10=""
          answer10=""
          image=""
        />
      )}

      {PlacePresentation && (
        <PlacePresentationSection
          title={PlacePresentation.text_and_image_title}
          paragraph={PlacePresentation.text_and_image_paragraph}
          firstImage={PlacePresentation.text_and_image_first_image}
          secondImage={PlacePresentation.text_and_image_second_image}
        />
      )}

      {homepageLastContent && (
        <LastSectionWithButton
          title={homepageLastContent.lastsection_title}
          paragraph={homepageLastContent.lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default Prices;
