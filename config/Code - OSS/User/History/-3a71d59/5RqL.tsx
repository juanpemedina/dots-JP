import EntrySection from "../components/common/EntrySection";
import FooterContact from "../components/footer/FooterContact";
import InfoCard from "../components/infoCards/InfoCard";
import NavBar from "../components/navigation/NavBar";
import InicioSectionF from "/InicioSectionF.png";

function Inicio() {
  return (
    <>
      <NavBar />
      <EntrySection
        heading="Lorem ipsum dolor sit amet"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur sit amet sem non sagittis. Nam est nulla, faucibus sit amet facilisis sed, iaculis at ipsum. Integer congue mollis metus."
        backgroundImage={InicioSectionF}
      />
      <div className="flex flex-wrap md:flex-row justify-center items-center py-10 md:space-y-0">
        <InfoCard
          title="Lorem Ipsum 1"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris  consectetur sit amet sem non sagittis. Nam est nulla, faucibus sit amet  facilisis sed, iaculis at ipsum. Integer congue mollis metus."
          imageUrl={InicioSectionF}
        />
        <InfoCard
          title="Lorem Ipsum 2"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris  consectetur sit amet sem non sagittis. Nam est nulla, faucibus sit amet  facilisis sed, iaculis at ipsum. Integer congue mollis metus."
          imageUrl={InicioSectionF}
        />
        <InfoCard
          title="Lorem Ipsum 3"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris  consectetur sit amet sem non sagittis. Nam est nulla, faucibus sit amet  facilisis sed, iaculis at ipsum. Integer congue mollis metus."
          imageUrl={InicioSectionF}
        />
        <InfoCard
          title="Lorem Ipsum 4"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris  consectetur sit amet sem non sagittis. Nam est nulla, faucibus sit amet  facilisis sed, iaculis at ipsum. Integer congue mollis metus."
          imageUrl={InicioSectionF}
        />
      </div>
      <FooterContact />
    </>
  );
}

export default Inicio;
