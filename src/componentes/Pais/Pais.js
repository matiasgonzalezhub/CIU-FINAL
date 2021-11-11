import React from "react";
import { Fragment, useState, useEffect } from "react";

function Pais({ pais }) {
  const { confirmed, recovered, deaths, country, updated } = pais;

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
    </Fragment>
  );
}

export default Pais;
