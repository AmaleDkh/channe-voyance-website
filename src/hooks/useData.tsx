// React elements
import { useEffect, useState } from "react";

// API Calls
import {
  fetchLargeImageContainerSections,
  fetchPageIntroductionSections,
  fetchThreeBlockSections,
  // fetchFiveBlockSections,
  fetchTextAndImageSections,
  fetchBenefitsSections,
  fetchFaqSections,
  fetchLastSections,
  fetchBoutiqueSection,
  fetchCarePricesSections,
  fetchPracticalInformationSection,
} from "@/app/utils/api";

type LargeImageContainerSection = {
  banner_title: string;
  banner_image: string;
  banner_introduction: string;
};

type PageIntroductionSection = {
  introduction_title: string;
  introduction_subtitle: string;
};

type imageAndTextSection = {
  text_and_image_title: string;
  text_and_image_paragraph: string;
  text_and_image_first_image: string;
  text_and_image_second_image: string;
};

type ThreeBlockSection = {
  section_title: string;
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

// type FiveBlockSection = {
//   section_introduction: string;
//   bloc_1_image: string;
//   bloc_1_title: string;
//   bloc_1_paragraph: string;
//   bloc_2_image: string;
//   bloc_2_title: string;
//   bloc_2_paragraph: string;
//   bloc_3_image: string;
//   bloc_3_title: string;
//   bloc_3_paragraph: string;
//   bloc_4_image: string;
//   bloc_4_title: string;
//   bloc_4_paragraph: string;
//   bloc_5_image: string;
//   bloc_5_title: string;
//   bloc_5_paragraph: string;
// };

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

type FaqSection = {
  faq_section_question1: string;
  faq_section_answer1: string;
  faq_section_question2: string;
  faq_section_answer2: string;
  faq_section_question3: string;
  faq_section_answer3: string;
  faq_section_question4: string;
  faq_section_answer4: string;
  faq_section_question5: string;
  faq_section_answer5: string;
  faq_section_question6: string;
  faq_section_answer6: string;
  faq_section_question7: string;
  faq_section_answer7: string;
  faq_section_question8: string;
  faq_section_answer8: string;
  faq_section_question9: string;
  faq_section_answer9: string;
  faq_section_question10: string;
  faq_section_answer10: string;
  faq_section_image: string;
};

type BoutiqueSection = {
  store_first_item_name: string;
  store_first_item_price: string;
  store_first_item_image: string;
  store_second_item_name: string;
  store_second_item_price: string;
  store_second_item_image: string;
  store_third_item_name: string;
  store_third_item_price: string;
  store_third_item_image: string;
  store_fourth_item_name: string;
  store_fourth_item_price: string;
  store_fourth_item_image: string;
};

type CarePricesBlocks = {
  care_information_title: string;
  first_care_communication: string;
  first_care_duration: string;
  first_care_price: string;
  second_care_communication: string;
  second_care_duration: string;
  second_care_price: string;
  third_care_communication: string;
  third_care_duration: string;
  third_care_price: string;
};

type PracticalInformationSection = {
  practical_information_image: string;
  contact: string;
  opening_hours: string;
  localisation_address: string;
  localisation_access: string;
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

  const [storeIntroduction, setStoreIntroduction] =
    useState<PageIntroductionSection | null>(null);

  const [reviewsIntroduction, setReviewsIntroduction] =
    useState<PageIntroductionSection | null>(null);

  const [
    practicalInformationIntroduction,
    setPracticalInformationIntroduction,
  ] = useState<PageIntroductionSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageIntroductionSectionsList =
          await fetchPageIntroductionSections();
        const homepageIntroductionData = pageIntroductionSectionsList[6].acf;
        const readingIntroductionData = pageIntroductionSectionsList[5].acf;
        const meditationIntroductionData = pageIntroductionSectionsList[4].acf;
        const energyCareIntroductionData = pageIntroductionSectionsList[3].acf;
        const storeIntroductionData = pageIntroductionSectionsList[2].acf;
        const reviewsIntroductionData = pageIntroductionSectionsList[1].acf;
        const practicalInformationIntroductionData =
          pageIntroductionSectionsList[0].acf;

        if (pageIntroductionSectionsList) {
          setAboutIntroduction(homepageIntroductionData);
          setReadingIntroduction(readingIntroductionData);
          setMeditationIntroduction(meditationIntroductionData);
          setEnergyCareIntroduction(energyCareIntroductionData);
          setStoreIntroduction(storeIntroductionData);
          setReviewsIntroduction(reviewsIntroductionData);
          setPracticalInformationIntroduction(
            practicalInformationIntroductionData
          );
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
    practicalInformationIntroduction,
    storeIntroduction,
    reviewsIntroduction,
  };
};

export const useTextAndImageSectionData = () => {
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

  const [meditationPageSelfPractice, setMeditationPageSelfPractice] =
    useState<imageAndTextSection | null>(null);

  const [PlacePresentation, setPlacePresentation] =
    useState<imageAndTextSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const textAndImageSectionsList = await fetchTextAndImageSections();

        const presentationContentData = textAndImageSectionsList[6].acf;
        const firstPartStoryContentData = textAndImageSectionsList[5].acf;
        const secondPartStoryContentData = textAndImageSectionsList[4].acf;
        const thirdPartStoryContentData = textAndImageSectionsList[3].acf;
        const fourthPartStoryContentData = textAndImageSectionsList[2].acf;
        const meditationPageSelfPracticeData = textAndImageSectionsList[1].acf;
        const PlacePresentationData = textAndImageSectionsList[0].acf;

        if (textAndImageSectionsList) {
          setPresentationContent(presentationContentData);
          setFirstPartStory(firstPartStoryContentData);
          setSecondPartStory(secondPartStoryContentData);
          setThirdPartStory(thirdPartStoryContentData);
          setFourthPartStory(fourthPartStoryContentData);
          setMeditationPageSelfPractice(meditationPageSelfPracticeData);
          setPlacePresentation(PlacePresentationData);
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
    meditationPageSelfPractice,
    PlacePresentation,
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

  const [energyCareStepsContent, setEnergyCareStepsContent] =
    useState<ThreeBlockSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const threeBlockSectionsList = await fetchThreeBlockSections();

        const advantagesContentData = threeBlockSectionsList[4].acf;
        const servicesContentSection = threeBlockSectionsList[3].acf;
        const readingAdvantagesContentData = threeBlockSectionsList[2].acf;
        const meditationAdvantagesContentData = threeBlockSectionsList[1].acf;
        const energyCareStepsContentData = threeBlockSectionsList[0].acf;

        if (threeBlockSectionsList) {
          setAdvantagesContent(advantagesContentData);
          setServicesContent(servicesContentSection);
          setReadingAdvantagesContent(readingAdvantagesContentData);
          setMeditationAdvantagesContent(meditationAdvantagesContentData);
          setEnergyCareStepsContent(energyCareStepsContentData);
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
    energyCareStepsContent,
  };
};

// export const useFiveblocksSectionData = () => {
//   const [energyCareAdvantagesContent, setEnergyCareAdvantagesContent] =
//     useState<FiveBlockSection | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const fiveBlockSectionsList = await fetchFiveBlockSections();

//         const energyCareAdvantagesContentData = fiveBlockSectionsList[0].acf;

//         if (energyCareAdvantagesContentData) {
//           setEnergyCareAdvantagesContent(energyCareAdvantagesContentData);
//         }
//       } catch (error) {
//         console.error(
//           "Une erreur est survenue lors de la récupération de la section",
//           error
//         );
//       }
//     };
//     fetchData();
//   }, []);

//   return energyCareAdvantagesContent;
// };

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

export const useFaqSectionData = () => {
  const [readingFaqContent, setReadingFaqContent] = useState<FaqSection | null>(
    null
  );

  const [meditationFaqContent, setMeditationFaqContent] =
    useState<FaqSection | null>(null);

  const [energyCareFaqContent, setEnergyCareFaqContent] =
    useState<FaqSection | null>(null);

  const [practicalInformationFaqContent, setPracticalInformationFaqContent] =
    useState<FaqSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const faqSectionsList = await fetchFaqSections();

        const readingFaqContentData = faqSectionsList[3].acf;
        const meditationFaqContentData = faqSectionsList[2].acf;
        const energyCareFaqContentData = faqSectionsList[1].acf;
        const practicalInformationFaqContentData = faqSectionsList[0].acf;

        if (faqSectionsList) {
          setReadingFaqContent(readingFaqContentData);
          setMeditationFaqContent(meditationFaqContentData);
          setEnergyCareFaqContent(energyCareFaqContentData);
          setPracticalInformationFaqContent(practicalInformationFaqContentData);
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
    readingFaqContent,
    meditationFaqContent,
    energyCareFaqContent,
    practicalInformationFaqContent,
  };
};

export const useBoutiqueData = () => {
  const [boutiqueItemsContent, setBoutiqueItemsContent] =
    useState<BoutiqueSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const boutiqueItemsContentData = await fetchBoutiqueSection();
        const boutiqueItemsContentSection = boutiqueItemsContentData[0].acf;

        if (boutiqueItemsContentSection) {
          setBoutiqueItemsContent(boutiqueItemsContentSection);
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
    boutiqueItemsContent,
  };
};

export const useCarePricesBlocksData = () => {
  const [readingCarePricesContent, setReadingCarePricesContent] =
    useState<CarePricesBlocks | null>(null);

  const [meditationCarePricesContent, setMeditationCarePricesContent] =
    useState<CarePricesBlocks | null>(null);

  const [energyCarePricesContent, setEnergyCarePricesContent] =
    useState<CarePricesBlocks | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carePricesBlockssList = await fetchCarePricesSections();

        const meditationCarePricesData = carePricesBlockssList[2].acf;
        const energyCarePricesData = carePricesBlockssList[1].acf;
        const readingCarePricesData = carePricesBlockssList[0].acf;

        if (carePricesBlockssList) {
          setMeditationCarePricesContent(meditationCarePricesData);
          setEnergyCarePricesContent(energyCarePricesData);
          setReadingCarePricesContent(readingCarePricesData);
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
    readingCarePricesContent,
    meditationCarePricesContent,
    energyCarePricesContent,
  };
};

export const usePracticalInformationData = () => {
  const [practicalInformationContent, setPracticalInformationContent] =
    useState<PracticalInformationSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const practicalInformationContentData =
          await fetchPracticalInformationSection();
        const practicalInformationContentSection =
          practicalInformationContentData[0].acf;

        if (practicalInformationContentData) {
          setPracticalInformationContent(practicalInformationContentSection);
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
    practicalInformationContent,
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

  const [reviewsLastContent, setReviewsLastContent] =
    useState<lastSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lastSectionsList = await fetchLastSections();
        const homePageLastSection = lastSectionsList[5].acf;
        const aboutPageLastSection = lastSectionsList[4].acf;
        const readingPageLastSection = lastSectionsList[3].acf;
        const meditationPageLastSection = lastSectionsList[2].acf;
        const energyCarePageLastSection = lastSectionsList[1].acf;
        const reviewsPageLastSection = lastSectionsList[0].acf;

        if (homePageLastSection) {
          setHomepageLastContent(homePageLastSection);
          setAboutLastContent(aboutPageLastSection);
          setReadingLastContent(readingPageLastSection);
          setMeditationLastContent(meditationPageLastSection);
          setEnergyCareLastContent(energyCarePageLastSection);
          setReviewsLastContent(reviewsPageLastSection);
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
    reviewsLastContent,
  };
};
