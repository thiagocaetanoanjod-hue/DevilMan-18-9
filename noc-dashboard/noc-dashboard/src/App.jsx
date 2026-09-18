// Inicialização do estado
const [dados, setDados] = useState({ infraestrutura: [], frota: [], noc: {} });

// No JSX da Navbar/Menu:
<a
  href={`https://www.google.com/maps/search/?api=1&query=${dados.noc.latitude},${dados.noc.longitude}`}
  target="_blank"
  rel="noopener noreferrer"
  title="Abrir Base NOC (SENAI Vila Leopoldina)"
  className="spinning-globe"
></a>