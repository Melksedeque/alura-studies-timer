import Botao from "../Botao";
import Relogio from "./Relogio";

export default function Cronometro() {
  return (
    <div className="">
      <p>Escolha um card e inicie o cronômetro</p>
      <div>
        <Relogio />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
}
