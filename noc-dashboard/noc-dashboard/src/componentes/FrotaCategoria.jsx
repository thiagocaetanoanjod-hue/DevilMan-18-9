// Dentro da renderização da lista (veiculosExibidos.map):
const urlMapa = `https://www.google.com/maps/search/?api=1&query=${veiculo.latitude},${veiculo.longitude}`;
const textoGPS = `${veiculo.latitude}, ${veiculo.longitude}`;

return (
  <div key={veiculo.id} className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
    <div className={`card glass-card h-100 ${!veiculoAtivo ? 'offline-mode border-danger' : ''}`}>
      <div className="cenario">
        <div className="parallax-bg" style={{ animationPlayState: veiculoAtivo ? 'running' : 'paused' }}></div>
        <div className="estrada">
          <div className="linhas-estrada" style={{ animationPlayState: veiculoAtivo ? 'running' : 'paused' }}></div>
        </div>
        
        {/* Veículo como link clicável para o Google Maps */}
        <a
          href={veiculoAtivo ? urlMapa : "#"}
          target={veiculoAtivo ? "_blank" : "_self"}
          rel="noopener noreferrer"
          title={veiculoAtivo ? "Rastrear no Google Maps" : "Veículo Offline"}
          className="veiculo-container text-decoration-none"
          style={{ animationPlayState: veiculoAtivo ? 'running' : 'paused' }}
        >
          {veiculo.modelo}
        </a>
      </div>

      <div className="card-body">
        <div className="d-flex justify-content-between mb-3 align-items-center">
          <h5 className="fw-bold text-info m-0">{veiculo.id}</h5>
          <span className={`badge ${veiculoAtivo ? 'bg-success' : 'bg-danger'}`}>
            {veiculoAtivo ? 'SINAL OK' : 'LINK PERDIDO'}
          </span>
        </div>

        <div className="row text-secondary small">
          <div className="col-6 mb-2">
            <strong className="text-white">Velocidade:</strong><br />
            <span className={veiculoAtivo ? "text-info fw-bold" : ""}>
              {veiculoAtivo ? `${veiculo.vel} km/h` : '0 km/h'}
            </span>
          </div>

          <div className="col-6 mb-2 text-end">
            <strong className="text-white">Posição SQL:</strong><br />
            <a
              href={veiculoAtivo ? urlMapa : "#"}
              target={veiculoAtivo ? "_blank" : "_self"}
              className={`font-monospace text-decoration-none ${veiculoAtivo ? 'text-warning' : 'text-secondary'}`}
            >
              {veiculoAtivo ? textoGPS : 'OFFLINE'}
            </a>
            
            <div style={{ fontSize: '0.65rem', marginTop: '4px' }}>
              Sync: {veiculoAtivo && veiculo.ultima_atualizacao ? new Date(veiculo.ultima_atualizacao).toLocaleTimeString() : '--:--:--'}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);