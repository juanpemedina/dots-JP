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
      <div className="flex justify-center ">
        <InfoCard
          title="Lorem Ipsum"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris  consectetur sit amet sem non sagittis. Nam est nulla, faucibus sit amet  facilisis sed, iaculis at ipsum. Integer congue mollis metus."
          imageUrl={InicioSectionF}
        />
        <InfoCard
          title="Lorem Ipsum"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris  consectetur sit amet sem non sagittis. Nam est nulla, faucibus sit amet  facilisis sed, iaculis at ipsum. Integer congue mollis metus."
          imageUrl={InicioSectionF}
        />
        <InfoCard
          title="Lorem Ipsum"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris  consectetur sit amet sem non sagittis. Nam est nulla, faucibus sit amet  facilisis sed, iaculis at ipsum. Integer congue mollis metus."
          imageUrl={InicioSectionF}
        />
      </div>
      <div>
        <h1 className="text-3xl font-bold underline">Inicio</h1>
      </div>
      <FooterContact />
    </>
  );
}

export default Inicio;
