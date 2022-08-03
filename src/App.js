import React, { Component } from "react";
import morango from "./img/morango.jpeg";

export default class App extends Component {
  state = {
    nome: "Fabiana",
    idade: 29,
    comidaFavorita: "Prestigio",
    musica: ["Desabafo", "Você não soube me amar", "Dona da quebrada"]
  };

  render() {
    return (
      <div>
        <h1>{this.state.nome}</h1>
        <h2>{this.state.idade}</h2>
        <h3>{this.state.comidaFavorita}</h3>
        <ul>
          <li>{this.state.musica[0]}</li>
          <li>{this.state.musica[1]}</li>
          <li>{this.state.musica[2]}</li>
        </ul>
        <img src={morango} alt="Morango" />
      </div>
    );
  }
}
