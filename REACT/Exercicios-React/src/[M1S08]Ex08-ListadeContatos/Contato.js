import "./Contato.css";
export default function Contato({ Foto, Nome, Descricao }) {
  return (
    <div className="contatoContainer">
      <div className="Contato">
        <img src={Foto} className="fotoContato" />
        <div className="contatoDesc">
          <span className="NomeContato">{Nome}</span>
          <span className="DescContato">{Descricao}</span>
        </div>
      </div>
    </div>
  );
}
