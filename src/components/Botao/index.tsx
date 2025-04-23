import React from "react";
import "./style.scss";

class Botao extends React.Component {
  render() {
    return (
      <button className="botao" onClick={() => alert("Botão clicado!")}>
        {/* {this.props.children} */}
        Salvar
      </button>
    );
  }
}

export default Botao;
