export default function RenderCond() {
  const ReactBom = false;
  return (
    <span>
      {ReactBom ? (
        <>
          <span style={{ color: "white" }}>Neste GitHub</span>
          <span style={{ color: "#00a000", fontWeight: "bold" }}> AMAMOS</span>
          <span style={{ color: "#0086f8", fontWeight: "bold" }}> React</span>
        </>
      ) : (
        <>
          <span style={{ color: "white" }}>Neste GitHub</span>
          <span style={{ color: "red", fontWeight: "bold" }}> ODIAMOS</span>
          <span style={{ color: "#0086f8", fontWeight: "bold" }}> React</span>
        </>
      )}
    </span>
  );
}
