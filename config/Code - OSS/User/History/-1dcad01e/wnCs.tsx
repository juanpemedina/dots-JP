import EntrySection from "../components/common/EntrySection";
import NavBar from "../components/navigation/NavBar";
import VEA_logo from "/VEA_logo.jpg";

function Retiros() {
  return (
    <>
      <NavBar />
      <EntrySection
        heading="Retiros"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur sit amet sem non sagittis. Nam est nulla, faucibus sit amet facilisis sed, iaculis at ipsum. Integer congue mollis metus."
        backgroundImage={VEA_logo}
      />

      <h1 className="text-3xl font-bold underline">Retiros</h1>
    </>
  );
}

export default Retiros;
