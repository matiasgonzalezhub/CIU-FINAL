import React from "react";
import { Fragment, useState, useEffect } from "react";

function Pais({ pais }) {
  const { confirmed, recovered, deaths, country, updated } = pais;

  const [cantidadCasosPrimerTrimestre, setCantidadCasosPrimerTrimestre] =
    useState();

  const [cantidadCasosSegundoTrimestre, setCantidadCasosSegundoTrimestre] =
    useState();

  const [cantidadCasosTercerTrimestre, setCantidadCasosTercerTrimestre] =
    useState();

  const [cantidadCasosCuartoTrimestre, setCantidadCasosCuartoTrimestre] =
    useState();

  const [cantidadMuertesPrimerTrimestre, setCantidadMuertesPrimerTrimestre] =
    useState();

  const [cantidadMuertesSegundoTrimestre, setCantidadMuertesSegundoTrimestre] =
    useState();

  const [cantidadMuertesTercerTrimestre, setCantidadMuertesTercerTrimestre] =
    useState();

  const [cantidadMuertesCuartoTrimestre, setCantidadMuertesCuartoTrimestre] =
    useState();

  const findAverage = (arr) => {
    const { length } = arr;
    return arr.reduce((acc, val) => {
      return acc + val.value / length;
    }, 0);
  };

  useEffect(() => {
    fetchDataConfirmed();
    fetchDataDeaths();
  });

  const fetchDataConfirmed = async () => {
    let casos;

    const url =
      "https://covid-api.mmediagroup.fr/v1/history?country=" +
      country +
      "&status=Confirmed";

    try {
      const response = await fetch(url);
      const json = await response.json();

      casos = json.All.dates;
      let toObject = Object.entries(casos).map(([key, value]) => ({
        key,
        value,
      }));

      let primerTrimestre = toObject.filter(function (el) {
        return el.key <= "2021-03-31" && el.key >= "2021-01-01";
      });

      let segundoTrimestre = toObject.filter(function (el) {
        return el.key <= "2021-06-30" && el.key >= "2021-04-01";
      });

      let tercerTrimestre = toObject.filter(function (el) {
        return el.key <= "2021-09-30" && el.key >= "2021-07-01";
      });
      let cuartoTrimestre = toObject.filter(function (el) {
        return el.key <= "2021-12-31" && el.key >= "2021-10-01";
      });

      setCantidadCasosPrimerTrimestre(Math.ceil(findAverage(primerTrimestre)));

      setCantidadCasosSegundoTrimestre(
        Math.ceil(findAverage(segundoTrimestre))
      );
      setCantidadCasosTercerTrimestre(Math.ceil(findAverage(tercerTrimestre)));

      setCantidadCasosCuartoTrimestre(Math.ceil(findAverage(cuartoTrimestre)));
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchDataDeaths = async () => {
    let casos;

    const url =
      "https://covid-api.mmediagroup.fr/v1/history?country=Argentina&status=deaths";

    try {
      const response = await fetch(url);
      const json = await response.json();

      casos = json.All.dates;
      let toObject = Object.entries(casos).map(([key, value]) => ({
        key,
        value,
      }));

      let primerTrimestre = toObject.filter(function (el) {
        return el.key <= "2021-03-31" && el.key >= "2021-01-01";
      });

      let segundoTrimestre = toObject.filter(function (el) {
        return el.key <= "2021-06-30" && el.key >= "2021-04-01";
      });

      let tercerTrimestre = toObject.filter(function (el) {
        return el.key <= "2021-09-30" && el.key >= "2021-07-01";
      });
      let cuartoTrimestre = toObject.filter(function (el) {
        return el.key <= "2021-12-31" && el.key >= "2021-10-01";
      });

      setCantidadMuertesPrimerTrimestre(
        Math.ceil(findAverage(primerTrimestre))
      );

      setCantidadMuertesSegundoTrimestre(
        Math.ceil(findAverage(segundoTrimestre))
      );

      setCantidadMuertesTercerTrimestre(
        Math.ceil(findAverage(tercerTrimestre))
      );

      setCantidadMuertesCuartoTrimestre(
        Math.ceil(findAverage(cuartoTrimestre))
      );
    } catch (error) {
      console.log("error", error);
    }
  };

  const path = `https://quickchart.io/chart?bkg=white&c={ type: 'bar', data: { labels: ['1er Trimestre', '2do  Trimestre', '13er Trimestre', '4to Trimestre'], datasets: [{ label: 'Casos', data: [${cantidadCasosPrimerTrimestre}, ${cantidadCasosSegundoTrimestre}, ${cantidadCasosTercerTrimestre}, ${cantidadCasosCuartoTrimestre}] }, { label: 'Muertes', data: [${cantidadMuertesPrimerTrimestre}, ${cantidadMuertesSegundoTrimestre}, ${cantidadMuertesTercerTrimestre}, ${cantidadMuertesCuartoTrimestre}] }]}}`;

  return (
    <Fragment>
      <br></br>
      <div className="col-md-4 shadow-sm p-3 mb-5 bg-white rounded">
        <h2>{country}</h2>
        <img
          style={{
            resizeMode: "center",
            width: 300,
          }}
          alt="casos"
          src={path}
        ></img>
        <br></br>
        <br></br>
        <p>
          <strong>Cantidad de casos registrados</strong> {confirmed}
        </p>
        <p>
          <strong>Cantidad de muertes</strong> {deaths}
        </p>
        <p>
          <strong>Cantidad de recuperados</strong> {recovered}
        </p>
        <p>
          <strong>Actualizado al </strong> {updated}
        </p>
      </div>
      <br></br>
    </Fragment>
  );
}

export default Pais;
