"use client";

// Components
import Layout from "../components/Layout/Layout";
import PageIntroduction from "../components/PageIntroduction/PageIntroduction";
import PricesBlocks from "@/app/components/PricesBlocks/PricesBlocks";
import FrequentlyAskedQuestions from "@/app/components/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PlacePresentationSection from "@/app/components/PlacePresentationSection/PlacePresentationSection";
import LastSectionWithButton from "@/app/components/LastSectionWithButton/LastSectionWithButton";

// Style
import "../assets/style/Global.scss";
import "../practical-information/practical-information.scss";
import "./prices.scss";

// Custom hooks
import {
  useTextAndImageSectionData,
  useLastSectionsData,
} from "../../hooks/useData";

function Prices() {
  const lastSectionsContentArray = useLastSectionsData();
  const { PlacePresentation } = useTextAndImageSectionData();

  return (
    <Layout>
      <PageIntroduction title="Tarifs" subtitle="" />

      <div className="practical-information__prices">
        <div className="practical-information__prices__blocks prices-page-version">
          <PricesBlocks
            title="La voyance"
            page="Voyance"
            pricesPageVersion="prices-page-version"
          />
          <PricesBlocks
            title="La méditation"
            page="Méditation"
            pricesPageVersion="prices-page-version"
          />
          <PricesBlocks
            title="Le soin énergétique"
            page="Soin énergétique"
            pricesPageVersion="prices-page-version"
          />
        </div>

        <p className="prices-page__paragraph">
          Modes de paiement acceptés : Carte bancaire, PayPal, chèques, espèces.
        </p>
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

      {lastSectionsContentArray?.[0] && (
        <LastSectionWithButton
          title={lastSectionsContentArray[0].lastsection_title}
          paragraph={lastSectionsContentArray[0].lastsection_paragraph}
          lastSectionWithButtonWithMarginTop=""
        />
      )}
    </Layout>
  );
}

export default Prices;
