// Next element
import Image from "next/image";

// Style
import "./ContactAndOpeningHours.scss";

interface ContactAndOpeningHoursProps {
  image: string;
  contact: string;
  openingHours: string;
}

function ContactAndOpeningHours({
  image,
  contact,
  openingHours,
}: ContactAndOpeningHoursProps) {
  return (
    <section className="contact-and-opening-hours">
      <Image src={image} alt="" width={600} height={800} />

      <div className="contact-and-opening-hours__texts">
        <h2>Coordonnées</h2>

        <div className="contact-and-opening-hours__texts__blocks">
          <div className="contact-and-opening-hours__texts__blocks__item">
            <h3 className="contact-and-opening-hours__texts__blocks__item__title">
              Contact
            </h3>
            <p>{contact}</p>
          </div>

          <div className="contact-and-opening-hours__texts__blocks__item">
            <h3 className="contact-and-opening-hours__texts__blocks__item__title">
              Horaires d'ouverture
            </h3>
            <p>{openingHours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactAndOpeningHours;
