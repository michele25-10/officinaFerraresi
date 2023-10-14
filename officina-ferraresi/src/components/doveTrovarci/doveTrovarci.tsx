import React from "react";
import { useState, useEffect } from "react";
import { number } from "zod";

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
  console.log(windowSize);
  return (
    <div>
      <div className="text-center">
        <h2 className="titolo-paragrafo mb-3">Dove trovarci?</h2>
      </div>
      <div className="dove-ci-troviamo p-5">
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
            <div className="text-center">
              <h2 className="orari">Orari</h2>
            </div>
            <div>
              <ul>
                <li>
                  <span>lun: 08:00–12:00, 14:30–18:30</span>
                </li>
                <li>
                  <span>mar: 08:00–12:00, 14:30–18:30</span>
                </li>
                <li>
                  <span>mer: 08:00–12:00, 14:30–18:30</span>
                </li>
                <li>
                  <span>gio: 08:00–12:00, 14:30–18:30</span>
                </li>
                <li>
                  <span>ven: 08:00–12:00, 14:30–18:30</span>
                </li>
                <li>
                  <span>sab: 08:30–11:30</span>
                </li>
                <li>
                  <span>dom: Chiuso</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
