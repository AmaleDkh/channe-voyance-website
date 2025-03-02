const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Get all posts
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${apiUrl}/posts`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des posts");
    }

    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error("Erreur lors de la récupération des posts", error);
    throw error;
  }
};

// Get all large image container sections
export const fetchLargeImageContainerSections = async () => {
  try {
    const response = await fetch(`${apiUrl}/large_image_section`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();
    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};

// Get all page introduction sections
export const fetchPageIntroductionSections = async () => {
  try {
    const response = await fetch(`${apiUrl}/introduction_section`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();
    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};

// Get all text and image sections
export const fetchTextAndImageSections = async () => {
  try {
    const response = await fetch(`${apiUrl}/text_image_section`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();
    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};

// Get all three block sections
export const fetchThreeBlockSections = async () => {
  try {
    const response = await fetch(`${apiUrl}/three_blocks_section`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();
    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};

// Get all five block sections
// export const fetchFiveBlockSections = async () => {
//   try {
//     const response = await fetch(`${apiUrl}/five_blocks_section`);

//     if (!response.ok) {
//       throw new Error("Erreur lors de la requête GET des sections");
//     }

//     const sections = await response.json();
//     return sections;
//   } catch (error) {
//     console.error("Erreur lors de la récupération des sections", error);
//     throw error;
//   }
// };

// Get all benefits sections
export const fetchBenefitsSections = async () => {
  try {
    const response = await fetch(`${apiUrl}/benefits_section`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();
    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};

// Get all faq sections
export const fetchFaqSections = async () => {
  try {
    const response = await fetch(`${apiUrl}/faq_section`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();
    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};

// Get boutique section
export const fetchBoutiqueSection = async () => {
  try {
    const response = await fetch(`${apiUrl}/boutique`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();
    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};

// Get all care prices sections
export const fetchCarePricesSections = async () => {
  try {
    const response = await fetch(`${apiUrl}/prices`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();

    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};

// Get practical information section
export const fetchPracticalInformationSection = async () => {
  try {
    const response = await fetch(`${apiUrl}/info_pratiques`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();

    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};

// Get all reviews section
export const fetchReviewsSection = async () => {
  try {
    const response = await fetch(`${apiUrl}/reviews`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();

    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};

// Get all last sections
export const fetchLastSections = async () => {
  try {
    const response = await fetch(`${apiUrl}/last_section`);

    if (!response.ok) {
      throw new Error("Erreur lors de la requête GET des sections");
    }

    const sections = await response.json();
    return sections;
  } catch (error) {
    console.error("Erreur lors de la récupération des sections", error);
    throw error;
  }
};
