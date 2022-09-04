import ListadeProdutos from "./ListadeProdutos";

export default function Produtos() {
  const Produtos = [
    {
      Foto: "https://img.drogaraia.com.br/catalog/product/s/a/sabonete-l_quido-epidac-oc-300ml.jpg",
      Nome: "Sabonete Líquido Epidac OC Pele Oleosa e Acneica com 300ML",
      Preco: 59.92,
    },
    {
      Foto: "https://larocheposay.vteximg.com.br/arquivos/ids/161602-1380-auto/7899706159272_1.jpg",
      Nome: "Loção Hidratante Corporal e para o Rosto de CeraVe com Textura Fluida",
      /* prettier-ignore */
      Preco: 97.90,
    },
    {
      Foto: "https://img.drogasil.com.br/catalog/product/r/e/refil-oleo-de-limpeza-demaquilante-biore-210ml.jpg",
      Nome: "Óleo de Limpeza Demaquilante Bioré Refil com 210ml",
      Preco: 49.79,
    },
    {
      Foto: "https://cdn.principiaskin.com/media/catalog/product/cache/6542d07ca9f2d1aba3a70501cec3a52c/p/r/principia-skincare-cosmeticos-niacinamida-zinco-1.jpg",
      Nome: "Niacinamida",
      /* prettier-ignore */
      Preco: 54.00,
    },
    {
      Foto: "https://cdn.principiaskin.com/media/catalog/product/cache/a11fc81ad62814be31cd922a993aa5ec/p/r/principia-skincare-cosmeticos-vc-10-vitamina-c-acido-ferulico.jpg",
      Nome: "Vitamina C-10",
      /* prettier-ignore */
      Preco: 59.00,
    },
    {
      Foto: "https://farmagora.vteximg.com.br/arquivos/ids/178837-1000-1000/694767_.jpg",
      Nome: "Avene Água Termal 300ML",
      /* prettier-ignore */
      Preco: 109.99,
    },
    {
      Foto: "https://farmagora.vteximg.com.br/arquivos/ids/191687-1000-1000/738321_0.jpg",
      Nome: "Protetor SOlar ISDIN Fusion Water Oil Control FPS60 50ML",
      /* prettier-ignore */
      Preco: 88.79,
    },
    {
      Foto: "https://farmagora.vteximg.com.br/arquivos/ids/185973-1000-1000/715830.jpg",
      Nome: "Protetor Labial Nivea Med Repair FPS15 4,8G",
      /* prettier-ignore */
      Preco: 21.90,
    },
  ];

  return (
    <div className="containerProdutos">
      {Produtos.map((produto) => (
        <ListadeProdutos Foto={produto.Foto} Nome={produto.Nome} Preco={produto.Preco} />
      ))}
    </div>
  );
}
