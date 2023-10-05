import React from "react";

export default function ChiSiamo() {
  return (
    <div className="chi-siamo-container">
      <div className="flex flex-row">
        <div className="basis-1/2">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMT7LNjfITBKK52kRbkwcscGMXpGQpdcqWBQXKc=w1080-h608-p-no-v0"
            className="img-chi-siamo"
          />
        </div>
        <div className="basis-1/2 p-10">
          <div className="grid justify-items-center ">
            <h2 className="titolo-chi-siamo">La nostra storia</h2>
          </div>
          <div className="paragrafo-chi-siamo">
            <p>
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
        </div>
      </div>
    </div>
  );
}
