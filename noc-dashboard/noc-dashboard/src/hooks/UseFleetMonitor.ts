import { useState } from 'react';

export const useFleetMonitor = () => {
  const [linksStatus, setLinksStatus] = useState<Record<string, boolean>>({
    vsat: true,
    ospf: true,
    bgp: true,
    lte: true
  });

  const toggleLink = (key: string) => {
    setLinksStatus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isCategoryOnline = (category: string) => {
    if (['Carro', 'SUV'].includes(category)) return linksStatus.vsat;
    if (['Caminhão', 'Ônibus'].includes(category)) return linksStatus.ospf;
    return linksStatus.lte;
  };

  return { linksStatus, toggleLink, isCategoryOnline };
};