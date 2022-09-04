import Contato from "./Contato";
import "./Contato.css";
export default function ListaContatos() {
  const Contatos = [
    {
      Foto: "https://www.computerhope.com/people/pictures/joe_belfiore.jpg",
      Nome: "Joe Belfiore",
      Descricao: "In a word far away",
    },
    {
      Foto: "https://t.ctcdn.com.br/IFvswOVy57rDAEBc5_ox062Me0c=/400x400/smart/filters:format(webp)/i490763.jpeg",
      Nome: "Bill  Gates",
      Descricao: "What i'm doing here",
    },
    {
      Foto: "https://akns-images.eonline.com/eol_images/Entire_Site/2014914/rs_1024x759-141014083905-1024-Mark-Zuckerberg-ebola.ls.101414_copy.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
      Nome: "Mark Zuckerberg",
      Descricao: "Really Busy, WhatsApp only",
    },
    {
      Foto: "https://pbs.twimg.com/profile_images/1133068768932794368/GJySN1oN_400x400.png",
      Nome: "Marissa Mayer",
      Descricao: "In a rush to catch a plane",
    },
    {
      Foto: "https://assets.weforum.org/sf_account/image/eR6OL3TJn810Bg_oFBdQidWcB1BjnGOk7gxSSoaV3Lo.jpg",
      Nome: "Sundar Pichai",
      Descricao: "Do androids dream of electric sheep",
    },
  ];
  return (
    <div className="Container">
      {Contatos.map((contato) => (
        <Contato Foto={contato.Foto} Nome={contato.Nome} Descricao={contato.Descricao} />
      ))}
    </div>
  );
}
