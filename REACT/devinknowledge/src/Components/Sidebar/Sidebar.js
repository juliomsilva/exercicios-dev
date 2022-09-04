import { useState } from "react";
import { useTips } from "../../Contexts/tipsContext";

export default function Sidebar() {
  const { tipList, setTipList } = useTips();
  const [tip, setTip] = useState({
    id: "",
    Titulo: "",
    Linguagem: "",
    Categoria: "",
    Descricao: "",
    Video: "",
  });
  function Salvar() {
    if (tip.Titulo === "") {
      alert("Titulo não pode ser vazio");
    } else {
      const tipWithID = { ...tip, id: Math.random() };
      setTipList([...tipList, tipWithID]);
    }
  }
  return (
    <div>
      <div id="form">
        <img src="./imagens/form.png" />
        <label>Título</label>
        <input
          value={tip.Titulo}
          onChange={(e) => {
            setTip({
              ...tip,
              Titulo: e.target.value,
            });
          }}
          type="text"
          id="input-titulo"
          placeholder="Digite um titulo"
          minlength="8"
          maxlength="64"
          required
        />
        <label>Linguagem/Skill</label>
        <input
          value={tip.Linguagem}
          onChange={(e) => {
            setTip({ ...tip, Linguagem: e.target.value });
          }}
          type="text"
          id="input-skill"
          placeholder="Digite uma linguagem ou Skill"
          minlength="4"
          maxlength="16"
          required
        />
        <label>Categoria</label>
        <select
          value={tip.Categoria}
          onChange={(e) => {
            setTip({ ...tip, Categoria: e.target.value });
          }}
          id="categoria"
          required
        >
          <option value="" disabled selected>
            Selecione uma categoria
          </option>
          <option value="frontend">FrontEnd</option>
          <option value="backend">BackEnd</option>
          <option value="fullstack">FullStack</option>
          <option value="comportsoft">Comportamental/Soft</option>
        </select>
        <label>Descrição</label>
        <textarea
          value={tip.Descricao}
          onChange={(e) => {
            setTip({ ...tip, Descricao: e.target.value });
          }}
          id="text-descricao"
          cols="30"
          rows="10"
          placeholder="Escreva aqui o detalhamento da sua dica..."
          required
          minlength="32"
          maxlength="512"
        ></textarea>
        <label>Video do Youtube</label>
        <input
          value={tip.Video}
          onChange={(e) => {
            setTip({ ...tip, Video: e.target.value });
          }}
          type="url"
          id="input-url"
          placeholder="https://suaurl.com"
        />

        <div id="btn-form">
          <input type="submit" id="btn-Limpar" onClick="LimparForm()" value="Limpar" />
          <input type="submit" id="btn-Salvar" value="Salvar" onClick={Salvar} />
        </div>
      </div>
    </div>
  );
}
