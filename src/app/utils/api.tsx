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
