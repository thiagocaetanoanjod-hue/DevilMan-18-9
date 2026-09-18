const db = require('./database');

const categorias = [
  { tipo: "Ônibus", modelo: "Mercedes-Benz" },
  { tipo: "Caminhão", modelo: "Volvo FH" },
  { tipo: "Moto", modelo: "Honda CB 500" },
  { tipo: "Carro", modelo: "Toyota Corolla" },
  { tipo: "Caminhonete", modelo: "Toyota Hilux" },
  { tipo: "Van", modelo: "Renault Master" },
  { tipo: "SUV", modelo: "Jeep Compass" },
  { tipo: "Esportivo", modelo: "Porsche 911" },
  { tipo: "Trator", modelo: "John Deere" },
  { tipo: "Ambulância", modelo: "Mercedes Sprinter" }
];

function gerarCoordenada(base, variancia) {
  return (base + (Math.random() * variancia - variancia / 2)).toFixed(4);
}

db.serialize(() => {
  console.log("Iniciando geração de carga de Big Data. Aguarde...");
  db.run("BEGIN TRANSACTION");

  const stmt = db.prepare('INSERT OR REPLACE INTO frota (id, modelo, tipo, vel, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?)');
  let count = 1;
  const volumePorCategoria = 10000; // Total de 100.000 registos

  categorias.forEach(cat => {
    for (let i = 0; i < volumePorCategoria; i++) {
      const id = `V-${count.toString().padStart(6, '0')}`;
      const vel = Math.floor(Math.random() * 120).toString();
      const lat = gerarCoordenada(-14.23, 30);
      const lng = gerarCoordenada(-51.92, 30);

      stmt.run([id, cat.modelo, cat.tipo, vel, lat, lng]);
      count++;
    }
  });

  stmt.finalize();

  db.run("COMMIT", () => {
    console.log(`Sucesso! ${count - 1} veículos foram inseridos no banco de dados.`);
    db.close();
  });
});