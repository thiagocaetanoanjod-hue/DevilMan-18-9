interface Vehicle {
  id: string;
  type: string;
  model: string;
  speed: number;
}

interface FleetTableProps {
  vehicles: Vehicle[];
  isCategoryOnline: (category: string) => boolean;
}

export const FleetTable = ({ vehicles, isCategoryOnline }: FleetTableProps) => {
  return (
    <div className="bg-noc-card rounded-2xl border border-slate-800 overflow-hidden">
      <div className="p-4 border-b border-slate-800">
        <h4 className="text-slate-300 text-sm font-semibold">Monitorização de Ativos da Frota</h4>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-400">
          <thead className="bg-slate-900/50 text-slate-300 uppercase">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Tipo</th>
              <th className="p-3">Modelo</th>
              <th className="p-3">Velocidade</th>
              <th className="p-3">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {vehicles.map((v) => {
              const online = isCategoryOnline(v.type);
              return (
                <tr key={v.id} className="hover:bg-slate-800/30">
                  <td className="p-3 font-mono text-white">{v.id}</td>
                  <td className="p-3">{v.type}</td>
                  <td className="p-3">{v.model}</td>
                  <td className="p-3">{online ? `${v.speed} km/h` : '0 km/h'}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      online ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
                    }`}>
                      {online ? 'SINAL OK' : 'LINK PERDIDO'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};