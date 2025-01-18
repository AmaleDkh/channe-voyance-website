const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Get all posts
export const fetchPosts = async () => {
  try {
    const response = await fetch(`${apiUrl}/posts`);
    console.log("response", response);

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
