import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component {
  render() {
    return (
      <button className={style.botao} onClick={() => alert("Botão clicado!")}>
        {/* {this.props.children} */}
        Salvar
      </button>
    );
  }
}

export default Botao;
