import React from "react";

export default function ChiSiamo() {
  return (
    <>
      <div className="chi-siamo-container">
        <div className="">
          <h2 className="titolo-chi-siamo mb-2 text-center">Chi siamo?</h2>
          <div className="chi-siamo-testo">
            <p className="text-center">
              Officina Ferraresi nasce nel 1970 dal suo fondatore Maurizio
              Ferraresi e dalla moglie Maria Antonietta. Dopo alcuni anni di
              attività i servizi offerti diventano sempre più specializzati e
              permettono di ricevere l'autorizzazione ufficiale Citroen. Sono
              molte infatti le collaborazioni e partnership che nel tempo hanno
              reso famosa l'officina nelle province di Rovigo, Ferrara, Verona e
              Padova. <br />
              La famiglia Ferraresi infatti da generazioni dedica tempo e amore
              ai motori e desidera che l’auto accompagni il vostro percorso, le
              vostre vacanze e i vostri impegni sempre con la massima sicurezza
              possibile.
              <br /> Un occhio al futuro e uno al passato per fornirvi il
              servizio di cui avete bisogno.
            </p>
          </div>
          <div className="text-center">
            <button className="btn mb-5 mt-5 bg-yellow-500 text-center transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white">
              Dove trovarci
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
