import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component<{ children: React.ReactNode }> {
  render() {
    return (
      <button className={style.botao} onClick={() => alert("Botão clicado!")}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
