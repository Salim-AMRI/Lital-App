import React, { Component } from "react";
import "./SignUp/SignUp.css";

export class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="Sin">
          <div className="Siin">
            <h1>BIENVENUR À NOTRE ATELIER LITAL</h1>
            <a href="/users">Gestion des utilisateurs</a><br/>
            <a href="/stock">Gestion de stock</a><br/>
            <a href="/historic">Historique du mouvement du stock</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
