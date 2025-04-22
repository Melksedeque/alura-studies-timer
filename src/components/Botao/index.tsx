import React from "react";

class Botao extends React.Component {
  render() {
    return (
      <button className="" onClick={() => alert("Botão clicado!")}>
        Botão clicável!
      </button>
    );
  }
}

export default Botao;
