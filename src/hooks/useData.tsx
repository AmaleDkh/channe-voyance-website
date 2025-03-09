// React elements
import { useEffect, useState } from "react";

// API Calls
import {
  fetchLargeImageContainerSections,
  fetchPageIntroductionSections,
  fetchThreeBlockSections,
  fetchTextAndImageSections,
  fetchBenefitsSections,
  fetchFaqSections,
  fetchLastSections,
  fetchBoutiqueSection,
  fetchCarePricesSections,
  fetchPracticalInformationSection,
  fetchReviewsSection,
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
  question: string;
  answer: string;
  page: string;
};

type BoutiqueSection = {
  product_image: string;
  product_name: string;
  product_price: string;
};

type CarePricesBlocks = {
  care: string;
  care_communication: string;
  care_duration: string;
  care_price: string;
};

// type CarePricesBlocks = {
//   care_information_title: string;
//   first_care_image: string;
//   first_care_communication: string;
//   first_care_duration: string;
//   first_care_price: string;
//   second_care_image: string;
//   second_care_communication: string;
//   second_care_duration: string;
//   second_care_price: string;
//   third_care_image: string;
//   third_care_communication: string;
//   third_care_duration: string;
//   third_care_price: string;
// };

type PracticalInformationSection = {
  practical_information_image: string;
  contact: string;
  opening_hours: string;
  localisation_address: string;
  localisation_first_access: string;
  localisation_second_access: string;
  localisation_third_access: string;
};

type LastSection = {
  lastsection_title: string;
  lastsection_paragraph: string;
};

type ReviewSection = {
  client_name: string;
  client_review: string;
};

export const useLargeImageContainerSectionsData = () => {
  const [homepageLargeImage, setHomepageLargeImage] =
    useState<LargeImageContainerSection | null>(null);

  // const [aboutLargeImage, setAboutLargeImage] =
  //   useState<LargeImageContainerSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const largeImageContainerSectionsList =
          await fetchLargeImageContainerSections();
        const homepageLargeImageData = largeImageContainerSectionsList[0].acf;
        // const aboutLargeImageData = largeImageContainerSectionsList[0].acf;

        if (largeImageContainerSectionsList) {
          setHomepageLargeImage(homepageLargeImageData);
          // setAboutLargeImage(aboutLargeImageData);
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

  return { homepageLargeImage };
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

  const [readingInterests, setReadingInterests] =
    useState<imageAndTextSection | null>(null);

  const [meditationInterests, setMeditationInterests] =
    useState<imageAndTextSection | null>(null);

  const [energyCareInterests, setEnergyCareInterests] =
    useState<imageAndTextSection | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const textAndImageSectionsList = await fetchTextAndImageSections();

        const presentationContentData = textAndImageSectionsList[9].acf;
        const firstPartStoryContentData = textAndImageSectionsList[8].acf;
        const secondPartStoryContentData = textAndImageSectionsList[7].acf;
        const thirdPartStoryContentData = textAndImageSectionsList[6].acf;
        const fourthPartStoryContentData = textAndImageSectionsList[5].acf;
        const meditationPageSelfPracticeData = textAndImageSectionsList[4].acf;
        const PlacePresentationData = textAndImageSectionsList[3].acf;
        const readingInterestsData = textAndImageSectionsList[2].acf;
        const meditationInterestsData = textAndImageSectionsList[1].acf;
        const energyCareInterestsData = textAndImageSectionsList[0].acf;

        if (textAndImageSectionsList) {
          setPresentationContent(presentationContentData);
          setFirstPartStory(firstPartStoryContentData);
          setSecondPartStory(secondPartStoryContentData);
          setThirdPartStory(thirdPartStoryContentData);
          setFourthPartStory(fourthPartStoryContentData);
          setMeditationPageSelfPractice(meditationPageSelfPracticeData);
          setPlacePresentation(PlacePresentationData);
          setReadingInterests(readingInterestsData);
          setMeditationInterests(meditationInterestsData);
          setEnergyCareInterests(energyCareInterestsData);
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
    readingInterests,
    meditationInterests,
    energyCareInterests,
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

export const useBenefitsSectionData = () => {
  const [benefitsSectionsArray, setBenefitsSectionsArray] = useState<
    BenefitsSection[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const benefitsSectionsList = await fetchBenefitsSections();

        const benefitsSections = benefitsSectionsList.map(
          (benefitSection: { acf: BenefitsSection }) => benefitSection.acf
        );

        setBenefitsSectionsArray(benefitsSections);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return benefitsSectionsArray;
};

export const useFaqSectionData = () => {
  const [faqSectionsContentArray, setFaqSectionsContentArray] = useState<
    FaqSection[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const faqQuestionsList = await fetchFaqSections();

        const faqQuestions = faqQuestionsList.map(
          (faqQuestion: { acf: FaqSection }) => faqQuestion.acf
        );

        setFaqSectionsContentArray(faqQuestions);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return faqSectionsContentArray;
};

export const useBoutiqueData = () => {
  const [boutiqueItemsContentArray, setBoutiqueItemsContentArray] = useState<
    BoutiqueSection[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const boutiqueItemsContentData = await fetchBoutiqueSection();

        const productBlocks = boutiqueItemsContentData.map(
          (productBlock: { acf: BoutiqueSection }) => productBlock.acf
        );

        setBoutiqueItemsContentArray(productBlocks);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return boutiqueItemsContentArray;
};

export const useCarePricesBlocksData = () => {
  const [carePricesContentArray, setCarePricesontentArray] = useState<
    CarePricesBlocks[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carePricesBlocksList = await fetchCarePricesSections();

        const carePricesBlocksListSections = carePricesBlocksList.map(
          (carePricesBlocksListSection: { acf: CarePricesBlocks }) =>
            carePricesBlocksListSection.acf
        );

        setCarePricesontentArray(carePricesBlocksListSections);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return carePricesContentArray;
};

export const usePracticalInformationData = () => {
  const [
    practicalInformationContentArray,
    setPracticalInformationContentArray,
  ] = useState<PracticalInformationSection[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const practicalInformationContentData =
          await fetchPracticalInformationSection();

        const practicalInformationArray = practicalInformationContentData.map(
          (practicalInformation: { acf: PracticalInformationSection }) =>
            practicalInformation.acf
        );

        setPracticalInformationContentArray(practicalInformationArray);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return practicalInformationContentArray;
};

export const useReviewsData = () => {
  const [reviewsContentArray, setReviewsContentArray] = useState<
    ReviewSection[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reviewsContentData = await fetchReviewsSection();

        const reviewsArray = reviewsContentData.map(
          (review: { acf: ReviewSection }) => review.acf
        );

        setReviewsContentArray(reviewsArray);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return reviewsContentArray;
};

export const useLastSectionsData = () => {
  const [lastSectionsContentArray, setLastSectionsContentArray] = useState<
    LastSection[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const lastSectionsList = await fetchLastSections();

        const lastSections = lastSectionsList.map(
          (lastSection: { acf: LastSection }) => lastSection.acf
        );

        setLastSectionsContentArray(lastSections);
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la section",
          error
        );
      }
    };
    fetchData();
  }, []);

  return lastSectionsContentArray;
};
