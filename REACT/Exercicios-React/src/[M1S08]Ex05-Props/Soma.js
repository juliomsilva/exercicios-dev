import PropTypes from "prop-types";

function Soma({ n1 = 0, n2 = 0 }) {
  return (
    <div>
      <h3 className="containerTitulo" style={{ color: "white" }}>
        A soma de {n1} + {n2} é {n1 + n2}
      </h3>
    </div>
  );
}
Soma.propTypes = {
  n1: PropTypes.number.isRequired,
  n2: PropTypes.number.isRequired,
};
// Soma.defaultProps = {
//   n1: 0,
//   n2: 0,
// };
export default Soma;
