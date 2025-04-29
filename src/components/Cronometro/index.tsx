import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/datetime";
import { ITarefa } from "../../types/tarefa";
import { useState } from "react";

interface Props {
  selecionado: ITarefa | undefined;
}

export default function Cronometro({selecionado}: Props) {
  const [tempo, setTempo] = useState(tempoParaSegundos(selecionado?.tempo ?? "00:00:00"));
  const [iniciado, setIniciado] = useState(false);
  const [intervalo, setIntervalo] = useState<number | undefined>(undefined);
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      Tempo: {tempo}
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
}
