import React from "react";
import Lavaggio2 from "../../../public/Lavaggio2.png";

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
              <img className="object-cover" src="../Lavaggio2.png" />
            </div>
            <div>
              <img className="object-cover" src="../Lavaggio2.png" />
            </div>
            <div>
              <img className="object-cover" src="../Lavaggio2.png" />
            </div>
            <div>
              <img className="object-cover" src="../Lavaggio2.png" />
            </div>
            <div>
              <img className="object-cover" src="../Lavaggio2.png" />
            </div>
            <div>
              <img className="object-cover" src="../Lavaggio2.png" />
            </div>
            <div>
              <img className="object-cover" src="../Lavaggio2.png" />
            </div>
            <div>
              <img className="object-cover" src="../Lavaggio2.png" />
            </div>
            <div>
              <img className="object-cover" src="../Lavaggio2.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
