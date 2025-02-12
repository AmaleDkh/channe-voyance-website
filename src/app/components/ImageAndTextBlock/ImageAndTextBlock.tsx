// Next elements
import Image from "next/image";
import { usePathname } from "next/navigation";

// Style
import "./ImageAndTextBlock.scss";

interface imageAndTextBlockProps {
  image: string;
  title: string;
  paragraph: string;
  flexVersion: string;
}

function ImageAndTextBlock({
  image,
  title,
  paragraph,
  flexVersion,
}: imageAndTextBlockProps) {
  const pathname = usePathname();

  return (
    <div className={`image-and-text-block ${flexVersion}`}>
      <div className="image-and-text-block__image-container">
        <Image
          src={image}
          alt=""
          className="image-and-text-block__image-container__image"
          width={280}
          height={280}
        />
      </div>

      <div className="image-and-text-block__text">
        <h3 className="image-and-text-block__text__title">{title}</h3>
        <p className="image-and-text-block__text__paragraph">{paragraph}</p>
      </div>
    </div>
  );
}

export default ImageAndTextBlock;
