"use client";

// React elements
import { useEffect, useState } from "react";

// Components
import Layout from "./components/Layout/Layout";
import LargeImageContainer from "./components/LargeImageContainer/LargeImageContainer";
import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";
import ThreeBlocksSection from "./components/ThreeBlocksSection/ThreeBlocksSection";
import SectionWithBackgroundColor from "./components/SectionWithBackgroundColor/SectionWithBackgroundColor";
import Reviews from "./components/Reviews/Reviews";
import LastSectionWithButton from "./components/LastSectionWithButton/LastSectionWithButton";

// Style
import "./assets/Global.scss";

// API Calls
import {
  fetchLargeImageContainerSections,
  fetchThreeBlockSections,
  fetchTextAndImageSections,
  fetchLastSections,
} from "@/app/utils/api";

type LargeImageContainerSection = {
  banner_title: string;
  banner_image: string;
};

type presentationSection = {
  presentation_title: string;
  presentation_paragraph: string;
  presentation_image: string;
};

type advantagesContentSection = {
  section_introduction: string;
  bloc_1_image: string;
  bloc_1_titre: string;
  bloc_1_paragraph: string;
  bloc_2_image: string;
  bloc_2_titre: string;
  bloc_2_paragraph: string;
  bloc_3_image: string;
  bloc_3_titre: string;
  bloc_3_paragraph: string;
};

type servicesContentSection = {
  section_introduction: string;
  bloc_1_image: string;
  bloc_1_titre: string;
  bloc_1_paragraph: string;
  bloc_2_image: string;
  bloc_2_titre: string;
  bloc_2_paragraph: string;
  bloc_3_image: string;
  bloc_3_titre: string;
  bloc_3_paragraph: string;
};

type lastSection = {
  lastsection_title: string;
  lastsection_paragraph: string;
};

export default function Home() {
  const [LargeImageContainerSection, setLargeImageContainerSection] =
    useState<LargeImageContainerSection | null>(null);
  const [presentationContent, setPresentationContent] =
    useState<presentationSection | null>(null);
  const [advantagesContentSection, setAdvantagesContentSection] =
    useState<advantagesContentSection | null>(null);
  const [servicesContentSection, setServicesContentSection] =
    useState<servicesContentSection | null>(null);
  const [lastSectionContent, setLastSectionContent] =
    useState<lastSection | null>(null);

  const fetchLargeImageContainerSectionsData = async () => {
    try {
      const largeImageContainerSectionsList =
        await fetchLargeImageContainerSections();
      const largeImageContainerData = largeImageContainerSectionsList[0].acf;

      if (largeImageContainerData) {
        setLargeImageContainerSection(largeImageContainerData);
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la récupération de la section",
        error
      );
    }
  };

  const fetchPresentationData = async () => {
    try {
      const textAndImageSectionsList = await fetchTextAndImageSections();
      const presentationContentData = textAndImageSectionsList[0].acf;

      if (presentationContentData) {
        setPresentationContent(presentationContentData);
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la récupération de la section",
        error
      );
    }
  };

  const fetchThreeblocksSectionData = async () => {
    try {
      const threeBlockSectionsList = await fetchThreeBlockSections();
      const advantagesContentData = threeBlockSectionsList[1].acf;
      const servicesContentSection = threeBlockSectionsList[0].acf;

      if (threeBlockSectionsList) {
        setAdvantagesContentSection(advantagesContentData);
        setServicesContentSection(servicesContentSection);
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la récupération de la section",
        error
      );
    }
  };

  const fetchLastSectionsData = async () => {
    try {
      const lastSectionsList = await fetchLastSections();
      const homePageLastSection = lastSectionsList[0].acf;

      if (homePageLastSection) {
        setLastSectionContent(homePageLastSection);
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la récupération de la section",
        error
      );
    }
  };

  useEffect(() => {
    fetchLargeImageContainerSectionsData();
    fetchPresentationData();
    fetchThreeblocksSectionData();
    fetchLastSectionsData();
  }, []);

  return (
    <Layout>
      {LargeImageContainerSection && (
        <LargeImageContainer
          image={LargeImageContainerSection.banner_image}
          title={LargeImageContainerSection.banner_title}
        />
      )}

      {presentationContent && (
        <ImageAndTextSection
          image={presentationContent.presentation_image}
          title={presentationContent.presentation_title}
          paragraph={presentationContent.presentation_paragraph}
        />
      )}

      {advantagesContentSection && (
        <ThreeBlocksSection
          sectionIntroduction={advantagesContentSection.section_introduction}
          image1={advantagesContentSection.bloc_1_image}
          title1={advantagesContentSection.bloc_1_titre}
          paragraph1={advantagesContentSection.bloc_1_paragraph}
          image2={advantagesContentSection.bloc_2_image}
          title2={advantagesContentSection.bloc_2_titre}
          paragraph2={advantagesContentSection.bloc_3_paragraph}
          image3={advantagesContentSection.bloc_3_image}
          title3={advantagesContentSection.bloc_3_titre}
          paragraph3={advantagesContentSection.bloc_3_paragraph}
        />
      )}

      <SectionWithBackgroundColor />
      {servicesContentSection && (
        <ThreeBlocksSection
          sectionIntroduction={servicesContentSection.section_introduction}
          image1={servicesContentSection.bloc_1_image}
          title1={servicesContentSection.bloc_1_titre}
          paragraph1={servicesContentSection.bloc_1_paragraph}
          image2={servicesContentSection.bloc_2_image}
          title2={servicesContentSection.bloc_2_titre}
          paragraph2={servicesContentSection.bloc_3_paragraph}
          image3={servicesContentSection.bloc_3_image}
          title3={servicesContentSection.bloc_3_titre}
          paragraph3={servicesContentSection.bloc_3_paragraph}
        />
      )}

      <Reviews />

      {lastSectionContent && (
        <LastSectionWithButton
          title={lastSectionContent.lastsection_title}
          paragraph=""
        />
      )}
    </Layout>
  );
}
