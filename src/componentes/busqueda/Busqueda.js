import React from "react";
import { Fragment, useState, useEffect } from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import Pais from "../Pais/Pais";

import Jumbotron from "../jumbotron/Jumbotron";

function Busqueda() {
  const [infoBusqueda, setInfoBusqueda] = useState([]);

  const {
    confirmed,
    recovered,
    deaths,
    country,
    population,
    continent,
    abbreviation,
    location,
    iso,
    capital_city,
    updated,
  } = infoBusqueda;

  useEffect(() => {
    var pais = localStorage.getItem("Nombre")
      ? localStorage.getItem("Nombre")
      : "Argentina";

    const url = "https://covid-api.mmediagroup.fr/v1/cases?country=" + pais;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setInfoBusqueda(json.All);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Menu />

      <main role="main" className="flex-shrink-0 mt-5">
        <Fragment>
          <main role="main">
            <Jumbotron />

            <div className="container">
              <div className="row d-flex justify-content-center">
                <Pais key={iso} pais={infoBusqueda} />
              </div>
              <hr></hr>
            </div>
          </main>
        </Fragment>
      </main>

      <Footer />
    </>
  );
}

export default Busqueda;
