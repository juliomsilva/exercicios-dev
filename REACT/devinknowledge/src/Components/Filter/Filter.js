import { useState } from "react";
import { useTips } from "../../Contexts/tipsContext";

export default function Filter() {
  const { tipList, setTiplist } = useTips();
  const [filter, setFilter] = useState(null);

  function Pesquisar() {
    var filtrarTexto = filter;
    var cards = tipList;
  }
  return (
    <div>
      <div id="areaPesquisa">
        <input value={filter} onChange={(e) => setFilter(e.target.value)} type="text" id="input-pesquisa" onkeyup={Pesquisar()} placeholder="Digite um título para buscar..."></input>
      </div>
    </div>
  );
}
