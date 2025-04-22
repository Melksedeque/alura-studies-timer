import React from "react";

class Botao extends React.Component {
  render() {
    return (
      <button className="" onClick={() => alert("Botão clicado!")}>
        {/* {this.props.children} */}
        Salvar
      </button>
    );
  }
}

export default Botao;
