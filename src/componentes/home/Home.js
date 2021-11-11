import React from "react";
import { Fragment, useState, useEffect } from "react";
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";
import Pais from "../Pais/Pais";
import Jumbotron from "../jumbotron/Jumbotron";

function Home() {
  const [buscar, setBuscar] = useState("");

  const handleInput = () => {
    alert(buscar);
  };

  const [infoPaises, setInfoPaises] = useState([]);

  useEffect(() => {
    const url = "https://covid-api.mmediagroup.fr/v1/cases";

    const fetchData = async () => {
      try {
        let lista = [];
        let sixMostCases = [];

        const response = await fetch(url);
        const json = await response.json();

        lista = getListOfCountries(json);
        sixMostCases = getSixMostCases(lista);

        setInfoPaises(sixMostCases);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();

    console.log(infoPaises);
  }, []);

  function getSixMostCases(lista) {
    let ordenada = lista.sort(
      (a, b) => parseFloat(a.confirmed) - parseFloat(b.confirmed)
    );

    return ordenada.slice(190, lista.length).reverse().slice(1, 7);
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

  return (
    <>
      <Menu />

      <main role="main" className="flex-shrink-0 mt-5">
        <Jumbotron />
        <div className="container">
          <Fragment>
            <main role="main">
              <div className="container">
                <div className="row">
                  {infoPaises.map((pais) => (
                    <Pais key={pais.iso} pais={pais} />
                  ))}
                </div>
                <hr></hr>
              </div>
            </main>
          </Fragment>

          {/**<hr className="featurette-divider" />*/}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;
