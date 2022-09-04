export default function TipCard({ title, linguagem, categoria, descricao, video }) {
  return (
    <div>
      <div class="bodycards">
        <span id="tituloCard">Titulo: {title} </span>
        <span id="skillCard">Linguagem/Skill: {linguagem} </span>
        <span id="categoriaCard">Categoria: {categoria}</span>
        <span id="descCard">Descrição:{descricao}</span>
        <div class="icons">
          <img src="./imagens/delete.png" alt="" id="btn-delete" onclick="deletarObjeto('${card.titulo}')" height="25px" />

          <a href="${card.url}" id="link">
            <img src="./imagens/video-camera.png" id="video" alt="" height="25px" />
          </a>
        </div>
      </div>
    </div>
  );
}
