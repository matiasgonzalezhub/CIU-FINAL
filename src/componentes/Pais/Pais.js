import React from "react";
import { Fragment, useState, useEffect } from "react";

function Pais({ pais }) {
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
  } = pais;

  return (
    <Fragment>
      <div className="col-md-4">
        <h2>{country}</h2>
        <img
          style={{
            resizeMode: "center",
            width: 300,
          }}          
          alt="casos"
          src="https://quickchart.io/chart?bkg=white&c={ type: 'bar', data: { labels: ['1er Trimestre', '2do  Trimestre', '13er Trimestre', '4to Trimestre'], datasets: [{ label: 'Casos', data: [50, 60, 70, 180] }, { label: 'Muertes', data: [100, 200, 300, 400] }] }}"
        ></img>
        <br></br>
        <br></br>
        <p>Cantidad de casos registrados {confirmed}</p>
        <p>Cantidad de muertes {deaths}</p>
        <p>Cantidad de recuperados {recovered}</p>
        <p>Actualizado al {updated}</p>
      </div>
      <br></br>
    </Fragment>
  );
}

export default Pais;
