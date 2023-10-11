import React from "react";

export default function Galleria() {
  return (
    <>
      <div className="galleria-container">
        <div className="text-center">
          <h2 className="titolo-paragrafo mb-3">Galleria</h2>
        </div>
        <div className="lista-foto p-5">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <img
                className="immagine-galleria object-cover"
                src="../Lavaggio2.png"
              />
            </div>
            <div>
              <img
                className="immagine-galleria object-cover"
                src="../Lavaggio.png"
              />
            </div>
            <div>
              <img
                className="immagine-galleria object-cover"
                src="../Lucidatura2.jpg"
              />
            </div>
            <div>
              <img
                className="immagine-galleria object-cover"
                src="../Negozio.png"
              />
            </div>
            <div>
              <img
                className="immagine-galleria object-cover"
                src="../Negozio2.png"
              />
            </div>
            <div>
              <img
                className="immagine-galleria object-cover"
                src="../OfficinaSito.jpg"
              />
            </div>
            <div>
              <img
                className="immagine-galleria object-cover"
                src="../Piano&Gomme.jpg"
              />
            </div>
            <div>
              <img
                className="immagine-galleria object-cover"
                src="../Revisione.jpg"
              />
            </div>
            <div>
              <img
                className="immagine-galleria object-cover"
                src="../Revisione2.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
