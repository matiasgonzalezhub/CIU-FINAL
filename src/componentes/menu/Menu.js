import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";

function Menu() {
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleInput = () => {
    debugger;
    localStorage.setItem("Nombre", input);
    history.push("/busqueda?name=" + getItem() + "");
    history.go("/busqueda?name=" + getItem() + "");
  };

  function handleClick() {
    history.push("/busqueda?name=" + getItem() + "");
  };


  const completaInput = (e) => {
    setInput(e);
    localStorage.setItem("Nombre", e);
  };

  function getItem() {
    var a = localStorage.getItem("Nombre");
    return localStorage.getItem("Nombre");
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <NavLink to="/" className="navbar-brand">
        InfoCovidAR
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/local" className="nav-link">
              Argentina{" "}
            </NavLink>
          </li>
        </ul>

        <form className="form-inline mt-2 mt-md-0">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Buscar"
            aria-label="Buscar"
            onChange={(e) => completaInput(e.target.value)}
          />
          <NavLink
            to={"/busqueda?name=" + getItem() + ""}
            className="nav-item btn my-2 my-sm-0"
            replace
          >
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              onClick={handleInput}
            >
              {" "}
              Buscar
            </button>
          </NavLink>
        </form>
      </div>
    </nav>
  );
}

export default Menu;
