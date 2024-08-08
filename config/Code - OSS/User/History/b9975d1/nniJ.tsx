import EntrySection from "../components/common/EntrySection";
import NavBar from "../components/navigation/NavBar";
import RC_logo from "/RC_logo.png";
function Contacto() {
  return (
    <>
      <NavBar />
      <EntrySection
        heading="Contacto"
        paragraph="Lorem ipsum dolor sit amet, consectetur."
        backgroundImage={RC_logo}
      />
      <h1 className="text-3xl font-bold underline">Contacto</h1>
      <FooterContact />
    </>
  );
}

export default Contacto;
