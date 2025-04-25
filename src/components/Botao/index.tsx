import React from "react";
import style from "./Botao.module.scss";

class Botao extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined,
  children: React.ReactNode;
}> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button
        type={type}
        className={style.botao}
        onClick={() => alert("Botão clicado!")}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
