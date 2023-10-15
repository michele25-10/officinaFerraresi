import React from "react";

export default function RichiediPreventivo() {
  return (
    <>
      <div className="richiedi-preventivo mb-5">
        <div className="titolo-paragrafo">
          <h2 className="text-center text-white">Richiedi preventivo</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="p-5">
            <img className="img" src="./Preventivo.jpg"></img>
          </div>
        </div>
      </div>
    </>
  );
}
