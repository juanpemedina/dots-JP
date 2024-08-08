import EntrySection from "../components/common/EntrySection";
import NavBar from "../components/navigation/NavBar";
import RC_logo from "/RC_logo.png";
function Contacto() {
  return (
    <>
      <EntrySection
        heading="Lorem ipsum dolor sit amet"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur sit amet sem non sagittis. Nam est nulla, faucibus sit amet facilisis sed, iaculis at ipsum. Integer congue mollis metus."
        backgroundImage={RC_logo}
      />
      <h1 className="text-3xl font-bold underline">Contacto</h1>
    </>
  );
}

export default Contacto;
