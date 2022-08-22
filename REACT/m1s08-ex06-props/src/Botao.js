function Botao({ bgcolor, fontcolor }) {
  return (
    <div className="containerTitulo">
      <button className="btn" style={{ background: bgcolor, color: fontcolor }}>
        Clique Aqui
      </button>
    </div>
  );
}
export default Botao;
