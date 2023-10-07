import React from "react";

export default function ChiSiamo() {
  return (
    <>
      <div className="chi-siamo-container">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
          <div className="">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMT7LNjfITBKK52kRbkwcscGMXpGQpdcqWBQXKc=w1080-h608-p-no-v0"
              className="img-chi-siamo"
            />
          </div>
          <div className="grid align-middle">
            <div>
              <h2 className="titolo-chi-siamo text-center">La nostra storia</h2>
            </div>
            <div className="paragrafo-chi-siamo text-center">
              <p>
                Officina Ferraresi nasce nel 1970 dal suo fondatore Maurizio
                Ferraresi e dalla moglie Maria Antonietta. Dopo alcuni anni di
                attività i servizi offerti diventano sempre più specializzati e
                permettono di ricevere l'autorizzazione ufficiale Citroen. Sono
                molte infatti le collaborazioni e partnership che nel tempo
                hanno reso famosa l'officina nelle province di Rovigo, Ferrara,
                Verona e Padova. <br />
                La famiglia Ferraresi infatti da generazioni dedica tempo e
                amore ai motori e desidera che l’auto accompagni il vostro
                percorso, le vostre vacanze e i vostri impegni sempre con la
                massima sicurezza possibile.
                <br /> Un occhio al futuro e uno al passato per fornirvi il
                servizio di cui avete bisogno.
              </p>
              <button className="btn mt-5 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500">
                Dove trovarci
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
