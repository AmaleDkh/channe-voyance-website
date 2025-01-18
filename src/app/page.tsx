"use client";

// React elements
import { useEffect, useState } from "react";

// Components
import Layout from "./components/Layout/Layout";
import ImageAndTextSection from "./components/ImageAndTextSection/ImageAndTextSection";
import ThreeBlocksSection from "./components/ThreeBlocksSection/ThreeBlocksSection";
import SectionWithBackgroundColor from "./components/SectionWithBackgroundColor/SectionWithBackgroundColor";
import Reviews from "./components/Reviews/Reviews";
import LastSectionWithButton from "./components/LastSectionWithButton/LastSectionWithButton";

// Style
import "./assets/Global.scss";

// API Call
import { fetchPosts } from "@/app/utils/api";

export default function Home() {
  const [presentationTitle, setPresentationTitle] = useState("");
  const [presentationParagraph, setPresentationnParagraph] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const presentationContent = await fetchPosts();

        if (presentationContent) {
          setPresentationTitle(presentationContent[0].title.rendered);
          setPresentationnParagraph(presentationContent[0].content.rendered);
        }
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération de la présentation",
          error
        );
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <ImageAndTextSection
        title={presentationTitle}
        paragraph={presentationParagraph}
      />
      <ThreeBlocksSection />
      <SectionWithBackgroundColor />
      <ThreeBlocksSection />
      <Reviews />
      <LastSectionWithButton />
    </Layout>
  );
}
