import React from "react";
import { Fragment, useState, useEffect } from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import Pais from "../Pais/Pais";

import Jumbotron from "../jumbotron/Jumbotron";
import { useLocation } from "react-router-dom";

function Busqueda() {
  const [infoBusqueda, setInfoBusqueda] = useState([]);
  const [direccion, setDireccion] = useState("");
  const [existe, setExiste] = useState(true);

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

  function useQuery() {
    const { search } = useLocation();

    setDireccion(React.useMemo(() => new URLSearchParams(search), [search]));
  }


  
  function getListOfCountries(json) {
    let lista = [];
    var newArrayDataOfOjbect = Object.values(json);

    newArrayDataOfOjbect.forEach((element) => {
      var item = element.All;

      lista.push(item);
    });

    return lista;
  }




  useEffect(() => {
   
    var a = direccion;

    var pais = localStorage.getItem("Nombre")
      ? localStorage.getItem("Nombre")
      : "Argentina";

    const nameCapitalized = pais.charAt(0).toUpperCase() + pais.slice(1);

    console.log("Pais: " + nameCapitalized);

    const url =
      "https://covid-api.mmediagroup.fr/v1/cases?country=" + nameCapitalized;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

    let cantidad = getListOfCountries(json.All);

        if (json.All.country !== nameCapitalized) {
          setExiste(false);
        } else {
          setInfoBusqueda(json.All);
        }
      } catch (error) {      
        setExiste(false);
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
                {existe ? (
                  <Pais key={iso} pais={infoBusqueda} />
                ) : (
                  <div>El nombre del pais no coincide con el nombre de la API </div>
                )}
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
