import "./Produtos.css";
export default function ListadeProdutos({ Foto, Nome, Preco }) {
  return (
    <div className="CardProdutos">
      <img src={Foto} className="imgProduto" />
      <span className="NomeProduto">{Nome}</span>
      <div className="Preco">
        <span>{Preco}</span>
      </div>
      <button className="btn">Comprar</button>
    </div>
  );
}
