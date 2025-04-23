import React from "react";

class Botao extends React.Component {
  render() {
    return (
      <button
        className=""
        onClick={() => alert("Botão clicado!")}
        style={{ backgroundColor: "blue" }}
      >
        {/* {this.props.children} */}
        Salvar
      </button>
    );
  }
}

export default Botao;
