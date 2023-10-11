import React from "react";

export default function DoveTrovarci() {
  return (
    <div>
      <div className="text-center">
        <h2 className="titolo-paragrafo mb-3">Dove trovarci?</h2>
      </div>
      <div className="lista-foto p-5">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <div id="map"></div>
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
