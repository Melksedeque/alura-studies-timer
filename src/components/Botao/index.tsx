import React from "react";
import style from "./Botao.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  children?: React.ReactNode,
  onClick?: () => void,
}

function Botao({onClick, type, children}: Props) {
  return (
    <button type={type} className={style.botao} onClick={onClick}>
      {children}
    </button>
  );
}

export default Botao;
