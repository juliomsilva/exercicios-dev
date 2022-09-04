import PropTypes from "prop-types";
import imagem from "../[M1S08]Ex07/modelo.png";
import menu from "../[M1S08]Ex07/menu.png";
import hyalu from "../[M1S08]Ex07/hyalu.webp";
import coracao from "../[M1S08]Ex07/coracao.png";
import coracaopreto from "../[M1S08]Ex07/coracaopreto.png";
import "../[M1S08]Ex07/amor.css";

function PostInstagram() {
  const post = {
    imgPerfil: imagem,
    nomePerfil: "JenifferKnoner",
    tempoOnline: "5m",
    Post: "Boa tarde meninas, estou aqui para compartilhar este novo serum da La-Roche o Hyalu B5.",
    Likes: 1000,
  };
  return (
    <div className="containerPost">
      <div className="Header">
        <img src={post.imgPerfil} className="imgPerfil"></img>

        <div className="Textos">
          <span className="nomePefil">{post.nomePerfil}</span>
          <span className="tempoOnline">{post.tempoOnline}</span>
        </div>
        <img src={menu} className="Menu"></img>
      </div>
      <div className="containerPostagem">
        <span className="Postagem">{post.Post}</span>
        <img src={hyalu} className="fotoPost"></img>
      </div>
      <div className="Footer">
        <div className="FooterBar">
          {post.Likes > 0 ? <img src={coracao} className="Coracao" /> : <img src={coracaopreto} className="Coracao" />}
          <span className="Comments">Comentários</span>
          <span className="Compartilhe">Compartilhar</span>
        </div>
        <div className="Curtidores">
          <span>Curtido por:</span>
          {post.Likes > 0 ? <span className="quemCurtiu">Julio Cesar e {post.Likes} pessoas</span> : <></>}
        </div>
      </div>
    </div>
  );
}

PostInstagram.propTypes = {
  imgPerfil: PropTypes.any,
  nomePerfil: PropTypes.string,
  tempoOnline: PropTypes.string,
  Post: PropTypes.string,
  Likes: PropTypes.number,
};

export default PostInstagram;
