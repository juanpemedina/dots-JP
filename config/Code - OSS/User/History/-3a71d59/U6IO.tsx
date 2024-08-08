import React from "react";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <InfoCard
          title="Un fin de semana diferente"
          text="La experiencia Search es única. Es una pausa a la rutina y el comienzo de una nueva búsqueda. En Search podrás conocer una forma diferente de descubrir el sentido de tu vida."
          imageUrl={InicioSectionF}
        />
        <InfoCard
          title="Una nueva relación"
          text="La vida tiene un secreto que descubrir y muchos han descubierto ese secreto en Search. Cristo no es un cuento de fábula, es un amigo que espera por ti con brazos abiertos."
          imageUrl={InicioSectionF}
        />
        <InfoCard
          title="Un estilo de vida"
          text="Todos queremos pertenecer, encajar o formar parte de algo. En Search puedes formar parte de un equipo realmente grande, que trabaja día a día por ser feliz y hacer felices a los demás."
          imageUrl={InicioSectionF}
        />
        <InfoCard
          title="Nuevos amigos"
          text="En Search te están esperando esos amigos que siempre has querido tener. Además de encontrar a ese único y verdadero amigo en Cristo."
          imageUrl={InicioSectionF}
        />
      </div>
      <FooterContact />
    </>
  );
}

export default Inicio;
