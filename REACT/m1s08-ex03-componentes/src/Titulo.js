import logo from "./logo192.png";

function Titulo() {
  return (
    <div className="containerTitulo">
      <h1 className="titulo">Meu primeiro projeto em REACT</h1>
      <img src={logo} width="45px" className="logo" alt="React Logo"></img>
    </div>
  );
}
export default Titulo;
