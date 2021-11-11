import React from "react";

function Footer() {
  return (
    <footer className="container">
      <p className="float-right">
        <a href="#" rel="noopener noreferrer">
          Subir
        </a>
      </p>
      <p>
        &copy; {new Date().getFullYear()} InfoCovidAR. &middot;{" "}
        <a href="#" rel="noopener noreferrer">
          Política de Privacidad
        </a>{" "}
        &middot;{" "}
        <a href="#" rel="noopener noreferrer">
          Términos
        </a>
      </p>
    </footer>
  );
}

export default Footer;
