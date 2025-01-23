// React elements
import { useEffect, useState } from "react";

// API Calls
import {
  fetchLargeImageContainerSections,
  fetchPageIntroductionSections,
  fetchThreeBlockSections,
  fetchFiveBlockSections,
  fetchTextAndImageSections,
  fetchBenefitsSections,
  fetchLastSections,
} from "@/app/utils/api";

type LargeImageContainerSection = {
  banner_title: string;
  banner_image: string;
};

type PageIntroductionSection = {
  introduction_title: string;
  introduction_subtitle: string;
};

type imageAndTextSection = {
  presentation_title: string;
  presentation_paragraph: string;
  presentation_image: string;
};

type ThreeBlockSection = {
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

type FiveBlockSection = {
  section_introduction: string;
  bloc_1_image: string;
  bloc_1_title: string;
  bloc_1_paragraph: string;
  bloc_2_image: string;
  bloc_2_title: string;
  bloc_2_paragraph: string;
  bloc_3_image: string;
  bloc_3_title: string;
  bloc_3_paragraph: string;
  bloc_4_image: string;
  bloc_4_title: string;
  bloc_4_paragraph: string;
  bloc_5_image: string;
  bloc_5_title: string;
  bloc_5_paragraph: string;
};

type BenefitsSection = {
  section_title: string;
  section_introduction: string;
  section_image: string;
  section_benefit_1: string;
  section_benefit_2: string;
  section_benefit_3: string;
  section_benefit_4: string;
  section_benefit_5: string;
};

type lastSection = {
  lastsection_title: string;
  lastsection_paragraph: string;
};

export const useLargeImageContainerSectionsData = () => {
  const [homepageLargeImage, setHomepageLargeImage] =
    useState<LargeImageContainerSection | null>(null);

  const [aboutLargeImage, setAboutLargeImage] =
    useState<LargeImageContainerSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const largeImageContainerSectionsList =
          await fetchLargeImageContainerSections();
        const homepageLargeImageData = largeImageContainerSectionsList[1].acf;
        const aboutLargeImageData = largeImageContainerSectionsList[0].acf;

        if (largeImageContainerSectionsList) {
          setHomepageLargeImage(homepageLargeImageData);
          setAboutLargeImage(aboutLargeImageData);
        }
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return { homepageLargeImage, aboutLargeImage };
};

export const usePageIntroductionSectionsData = () => {
  const [aboutIntroduction, setAboutIntroduction] =
    useState<PageIntroductionSection | null>(null);

  const [readingIntroduction, setReadingIntroduction] =
    useState<PageIntroductionSection | null>(null);

  const [meditationIntroduction, setMeditationIntroduction] =
    useState<PageIntroductionSection | null>(null);

  const [energyCareIntroduction, setEnergyCareIntroduction] =
    useState<PageIntroductionSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageIntroductionSectionsList =
          await fetchPageIntroductionSections();
        const homepageIntroductionData = pageIntroductionSectionsList[3].acf;
        const readingIntroductionData = pageIntroductionSectionsList[2].acf;
        const meditationIntroductionData = pageIntroductionSectionsList[1].acf;
        const energyCareIntroductionData = pageIntroductionSectionsList[0].acf;

        if (pageIntroductionSectionsList) {
          setAboutIntroduction(homepageIntroductionData);
          setReadingIntroduction(readingIntroductionData);
          setMeditationIntroduction(meditationIntroductionData);
          setEnergyCareIntroduction(energyCareIntroductionData);
        }
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return {
    aboutIntroduction,
    readingIntroduction,
    meditationIntroduction,
    energyCareIntroduction,
  };
};

export const usePresentationSectionData = () => {
  const [presentationContent, setPresentationContent] =
    useState<imageAndTextSection | null>(null);

  const [firstPartStory, setFirstPartStory] =
    useState<imageAndTextSection | null>(null);

  const [secondPartStory, setSecondPartStory] =
    useState<imageAndTextSection | null>(null);

  const [thirdPartStory, setThirdPartStory] =
    useState<imageAndTextSection | null>(null);

  const [fourthPartStory, setFourthPartStory] =
    useState<imageAndTextSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const textAndImageSectionsList = await fetchTextAndImageSections();

        const presentationContentData = textAndImageSectionsList[4].acf;
        const firstPartStoryContentData = textAndImageSectionsList[3].acf;
        const secondPartStoryContentData = textAndImageSectionsList[2].acf;
        const thirdPartStoryContentData = textAndImageSectionsList[1].acf;
        const fourthPartStoryContentData = textAndImageSectionsList[0].acf;

        if (textAndImageSectionsList) {
          setPresentationContent(presentationContentData);
          setFirstPartStory(firstPartStoryContentData);
          setSecondPartStory(secondPartStoryContentData);
          setThirdPartStory(thirdPartStoryContentData);
          setFourthPartStory(fourthPartStoryContentData);
        }
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return {
    presentationContent,
    firstPartStory,
    secondPartStory,
    thirdPartStory,
    fourthPartStory,
  };
};

export const useThreeblocksSectionData = () => {
  const [advantagesContent, setAdvantagesContent] =
    useState<ThreeBlockSection | null>(null);

  const [servicesContent, setServicesContent] =
    useState<ThreeBlockSection | null>(null);

  const [readingAdvantagesContent, setReadingAdvantagesContent] =
    useState<ThreeBlockSection | null>(null);

  const [meditationAdvantagesContent, setMeditationAdvantagesContent] =
    useState<ThreeBlockSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const threeBlockSectionsList = await fetchThreeBlockSections();

        const advantagesContentData = threeBlockSectionsList[3].acf;
        const servicesContentSection = threeBlockSectionsList[2].acf;
        const readingAdvantagesContentData = threeBlockSectionsList[1].acf;
        const meditationAdvantagesContentData = threeBlockSectionsList[0].acf;

        if (threeBlockSectionsList) {
          setAdvantagesContent(advantagesContentData);
          setServicesContent(servicesContentSection);
          setReadingAdvantagesContent(readingAdvantagesContentData);
          setMeditationAdvantagesContent(meditationAdvantagesContentData);
        }
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return {
    advantagesContent,
    servicesContent,
    readingAdvantagesContent,
    meditationAdvantagesContent,
  };
};

export const useFiveblocksSectionData = () => {
  const [energyCareAdvantagesContent, setEnergyCareAdvantagesContent] =
    useState<FiveBlockSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fiveBlockSectionsList = await fetchFiveBlockSections();

        const energyCareAdvantagesContentData = fiveBlockSectionsList[0].acf;

        if (energyCareAdvantagesContentData) {
          setEnergyCareAdvantagesContent(energyCareAdvantagesContentData);
        }
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return energyCareAdvantagesContent;
};

export const useBenefitsSectionData = () => {
  const [readingBenefitsContent, setReadingBenefitsContent] =
    useState<BenefitsSection | null>(null);

  const [meditationBenefitsContent, setMeditationBenefitsContent] =
    useState<BenefitsSection | null>(null);

  const [energyCareBenefitsContent, setEnergyCareBenefitsContent] =
    useState<BenefitsSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const benefitsSectionsList = await fetchBenefitsSections();

        const readingBenefitsContentData = benefitsSectionsList[2].acf;
        const meditationBenefitsContentData = benefitsSectionsList[1].acf;
        const energyCareBenefitsContentData = benefitsSectionsList[0].acf;

        if (readingBenefitsContentData) {
          setReadingBenefitsContent(readingBenefitsContentData);
          setMeditationBenefitsContent(meditationBenefitsContentData);
          setEnergyCareBenefitsContent(energyCareBenefitsContentData);
        }
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return {
    readingBenefitsContent,
    meditationBenefitsContent,
    energyCareBenefitsContent,
  };
};

export const useLastSectionsData = () => {
  const [homepageLastContent, setHomepageLastContent] =
    useState<lastSection | null>(null);

  const [aboutLastContent, setAboutLastContent] = useState<lastSection | null>(
    null
  );

  const [readingLastContent, setReadingLastContent] =
    useState<lastSection | null>(null);

  const [meditationLastContent, setMeditationLastContent] =
    useState<lastSection | null>(null);

  const [energyCareLastContent, setEnergyCareLastContent] =
    useState<lastSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lastSectionsList = await fetchLastSections();
        const homePageLastSection = lastSectionsList[4].acf;
        const aboutPageLastSection = lastSectionsList[3].acf;
        const readingPageLastSection = lastSectionsList[2].acf;
        const meditationPageLastSection = lastSectionsList[1].acf;
        const energyCarePageLastSection = lastSectionsList[0].acf;

        if (homePageLastSection) {
          setHomepageLastContent(homePageLastSection);
          setAboutLastContent(aboutPageLastSection);
          setReadingLastContent(readingPageLastSection);
          setMeditationLastContent(meditationPageLastSection);
          setEnergyCareLastContent(energyCarePageLastSection);
        }
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return {
    homepageLastContent,
    aboutLastContent,
    readingLastContent,
    meditationLastContent,
    energyCareLastContent,
  };
};
