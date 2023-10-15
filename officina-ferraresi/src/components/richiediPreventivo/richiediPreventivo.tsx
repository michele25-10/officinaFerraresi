import React from "react";

export default function RichiediPreventivo() {
  return (
    <>
      <div className="richiedi-preventivo mb-5">
        <div className="titolo-paragrafo">
          <h2 className="text-center ">Richiedi preventivo</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="grid justify-center">
            <div className="container mx-auto p-5">
              <img
                className="img-preventivo object-cover"
                src="./Preventivo.jpg"
              ></img>
            </div>
          </div>
          <div className="grid justify-center">
            <form>
              <div className="form-control">
                <label htmlFor="nome" className="label">
                  <span className="label-text">Nome</span>
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label htmlFor="cognome" className="label">
                  <span className="label-text">Cognome</span>
                </label>
                <input
                  type="text"
                  id="cognome"
                  name="cognome"
                  placeholder="Cognome"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label htmlFor="mail" className="label">
                  <span className="label-text">Mail</span>
                </label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  placeholder="Mail"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label htmlFor="numero" className="label">
                  <span className="label-text">Numero telefono</span>
                </label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  placeholder="Numero"
                  className="input input-bordered"
                  maxLength={10}
                />
              </div>
              <div className="form-control">
                <label htmlFor="richiesta" className="label">
                  <span className="label-text">Richiesta</span>
                </label>
                <textarea
                  id="richiesta"
                  name="richiesta"
                  placeholder="Richiesta"
                  className="input input-bordered"
                  maxLength={250}
                />
              </div>
              <div className="policy"></div>
              <div className="mt-3 text-center">
                <button className="btn btn-error">Invia</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
