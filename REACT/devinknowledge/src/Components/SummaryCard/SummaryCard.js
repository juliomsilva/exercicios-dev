import PropTypes from "prop-types";
export default function SummaryCard({ title, count }) {
  return (
    <div>
      <div class="cardTopo">
        <span>{title}</span>
        <span id="contagem-total">{count}</span>
      </div>
    </div>
  );
}
SummaryCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
};
