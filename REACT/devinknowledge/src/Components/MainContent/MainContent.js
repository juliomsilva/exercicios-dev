import Summary from "../../Components/Summary/Summary";
import CardList from "../CardList/CardList";
import Filter from "../Filter/Filter";
import TipCard from "../TipCard/TipCard";
import { useTips } from "../../Contexts/tipsContext";

export default function MainContent() {
  const { tipList } = useTips();
  return (
    <div>
      <div id="estatisticas">
        <Summary />
        <Filter />
        <CardList>
          <div id="MostrarCards">
            {tipList.map((tip) => {
              return <TipCard key={tip.id} id={tip.id} title={tip.Titulo} linguagem={tip.Linguagem} categoria={tip.Categoria} descricao={tip.Descricao} />;
            })}
          </div>
        </CardList>
      </div>
    </div>
  );
}
