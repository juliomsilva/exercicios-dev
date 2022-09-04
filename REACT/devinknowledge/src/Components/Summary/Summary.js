import SummaryCard from "../SummaryCard/SummaryCard";
export default function Summary() {
  return (
    <div>
      <div id="cards">
        <SummaryCard title="Total" count={1} />
        <SummaryCard title="FrontEnd" count={1} />
        <SummaryCard title="BackEnd" count={1} />
        <SummaryCard title="FullStack" count={1} />
        <SummaryCard title="SoftSkill" count={1} />
      </div>
    </div>
  );
}
