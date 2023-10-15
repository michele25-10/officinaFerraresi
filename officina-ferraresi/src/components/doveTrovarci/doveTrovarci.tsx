import React from "react";
import { useState, useEffect } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
export default function DoveTrovarci() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className="titolo-paragrafo mb-3">Dove trovarci?</h2>
      </div>
      <div className="dove-ci-troviamo mb-5 p-5">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <div className="grid justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2819.9337928063333!2d11.538910575796535!3d45.0262694625522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f0064a2ca3da1%3A0xc43c6af55d53566b!2sOFFICINA%20FERRARESI!5e0!3m2!1sit!2sit!4v1697276458455!5m2!1sit!2sit"
                height={windowSize.width > 800 ? "500" : "300"}
                width={windowSize.width > 800 ? "500" : "300"}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div>
            <div className="">
              <h2 className="sottotitolo-paragrafo">Orari</h2>
            </div>
            <div className="testo-paragrafo mb-5">
              <ul className="list-disc">
                <li>
                  <span>
                    <b>lun</b>: 08:00–12:00, 14:30–18:30
                  </span>
                </li>
                <li>
                  <span>
                    <b>mar</b>: 08:00–12:00, 14:30–18:30
                  </span>
                </li>
                <li>
                  <span>
                    <b>mer</b>: 08:00–12:00, 14:30–18:30
                  </span>
                </li>
                <li>
                  <span>
                    <b>gio</b>: 08:00–12:00, 14:30–18:30
                  </span>
                </li>
                <li>
                  <span>
                    <b>ven</b>: 08:00–12:00, 14:30–18:30
                  </span>
                </li>
                <li>
                  <span>
                    <b>sab</b>: 08:30–11:30
                  </span>
                </li>
                <li>
                  <span>
                    <b>dom</b>: Chiuso
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <div className="sottotitolo-paragrafo">
                <h2>Chiamaci ora!</h2>
              </div>
              <div className="chiama-ora mt-2">
                <a href="tel:+3899982052">
                  <button className="btn btn-error">
                    <BiSolidPhoneCall fill="black" size={25} />
                    +3899982052
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
