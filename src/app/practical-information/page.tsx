"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "@/app/components/PageIntroduction/PageIntroduction";
import ContactAndOpeningHours from "@/app/components/ContactAndOpeningHours/ContactAndOpeningHours";
import AddressAndAccess from "@/app/components/AddressAndAccess/AddressAndAccess";
import FrequentlyAskedQuestions from "@/app/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PricesBlocks from "@/app/components/PricesBlocks/PricesBlocks";
import ReadingPricesBlocks from "@/app/components/PricesBlocks/PricesBlocks";
import LastSectionWithButton from "@/app/components/LastSectionWithButton/LastSectionWithButton";
import PlacePresentationSection from "@/app/components/PlacePresentationSection/PlacePresentationSection";

// Style
import "../assets/style/Global.scss";
import "./practical-information.scss";

// Custom hooks
import {
  usePageIntroductionSectionsData,
  usePracticalInformationData,
  useCarePricesBlocksData,
  useLastSectionsData,
  useTextAndImageSectionData,
} from "../../hooks/useData";

function PracticalInformation() {
  const { practicalInformationIntroduction } =
    usePageIntroductionSectionsData();
  const { PlacePresentation } = useTextAndImageSectionData();
  const carePricesContentArray = useCarePricesBlocksData();
  const practicalInformationContentArray = usePracticalInformationData();
  const lastSectionsContentArray = useLastSectionsData();

  return (
    <Layout>
      {practicalInformationIntroduction && (
        <PageIntroduction
          title={practicalInformationIntroduction.introduction_title}
          subtitle={practicalInformationIntroduction.introduction_subtitle}
        />
      )}

      {practicalInformationContentArray && (
        <ContactAndOpeningHours
          image={
            practicalInformationContentArray[0]?.practical_information_image
          }
          contact={practicalInformationContentArray[0]?.contact}
          openingHours={practicalInformationContentArray[0]?.opening_hours}
        />
      )}

      {practicalInformationContentArray && (
        <AddressAndAccess
          localisationAddress={
            practicalInformationContentArray[0]?.localisation_address
          }
          localisationFirstAccess={
            practicalInformationContentArray[0]?.localisation_first_access
          }
          localisationSecondAccess={
            practicalInformationContentArray[0]?.localisation_second_access
          }
          localisationThirdAccess={
            practicalInformationContentArray[0]?.localisation_third_access
          }
        />
      )}

      <div className="practical-information__prices">
        <h2>Durées & tarifs</h2>

        <div className="practical-information__prices__blocks">
          <div className="practical-information__prices__blocks__block">
            <h3 className="practical-information__prices__blocks__block__title">
              La voyance
            </h3>
            {carePricesContentArray && (
              <ReadingPricesBlocks
                firstItemImage={carePricesContentArray[0]?.first_care_image}
                firstItemTitle={
                  carePricesContentArray[0]?.first_care_communication
                }
                firstItemDuration={
                  carePricesContentArray[0]?.first_care_duration
                }
                firstItemPrice={carePricesContentArray[0]?.first_care_price}
                secondItemImage={carePricesContentArray[0]?.second_care_image}
                secondItemTitle={
                  carePricesContentArray[0]?.second_care_communication
                }
                secondItemDuration={
                  carePricesContentArray[0]?.second_care_duration
                }
                secondItemPrice={carePricesContentArray[0]?.second_care_price}
              />
            )}
          </div>

          <div className="practical-information__prices__blocks__block">
            <h3 className="practical-information__prices__blocks__block__title">
              La méditation et les soins énergétiques
            </h3>

            {carePricesContentArray && (
              <PricesBlocks
                firstImage={carePricesContentArray[1]?.first_care_image}
                firstTitle={carePricesContentArray[1]?.first_care_communication}
                firstDuration={carePricesContentArray[1]?.first_care_duration}
                firstPrice={carePricesContentArray[1]?.first_care_price}
                secondTitle={
                  carePricesContentArray[1]?.second_care_communication
                }
                secondImage={carePricesContentArray[1]?.second_care_image}
                secondDuration={carePricesContentArray[1]?.second_care_duration}
                secondPrice={carePricesContentArray[1]?.second_care_price}
                thirdImage={carePricesContentArray[1]?.third_care_image}
                thirdTitle={carePricesContentArray[1]?.third_care_communication}
                thirdDuration={carePricesContentArray[1]?.third_care_duration}
                thirdPrice={carePricesContentArray[1]?.third_care_price}
              />
            )}
          </div>
        </div>
      </div>

      <FrequentlyAskedQuestions
        page="Informations pratiques"
        practiceName="les consultations"
      />

      {PlacePresentation && (
        <PlacePresentationSection
          title={PlacePresentation.text_and_image_title}
          paragraph={PlacePresentation.text_and_image_paragraph}
          firstImage={PlacePresentation.text_and_image_first_image}
          secondImage={PlacePresentation.text_and_image_second_image}
        />
      )}

      {lastSectionsContentArray?.[5] && (
        <LastSectionWithButton
          title={lastSectionsContentArray[5].lastsection_title}
          paragraph={lastSectionsContentArray[5].lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default PracticalInformation;
