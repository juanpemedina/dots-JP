import EntrySection from "../components/common/EntrySection";
import FooterContact from "../components/footer/FooterContact";
import NavBar from "../components/navigation/NavBar";
import VEA_logo from "/VEA_logo.png";

function Retiros() {
  return (
    <>
      <NavBar />
      <EntrySection
        heading="Retiros"
        paragraph="¡ Lorem ipsum dolor !"
        backgroundImage={VEA_logo}
      />

      <h1 className="text-3xl font-bold underline">Retiros</h1>
      <FooterContact />
    </>
  );
}

export default Retiros;
