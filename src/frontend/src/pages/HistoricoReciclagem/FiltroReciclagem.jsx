export default function FiltroReciclagem({ setFiltro }) {
  return (
    <section className="filtros">
      <button onClick={() => setFiltro('todos')}>Todos</button>
      <button onClick={() => setFiltro('papel')}>Papel</button>
      <button onClick={() => setFiltro('plástico')}>Plástico</button>
      <button onClick={() => setFiltro('vidro')}>Vidro</button>
    </section>
  );
}
