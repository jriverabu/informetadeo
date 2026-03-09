import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  MessageCircle, 
  DollarSign, 
  ChevronDown, 
  ChevronUp,
  Info,
  Layers
} from 'lucide-react';

const App = () => {
  const [expandedCampaign, setExpandedCampaign] = useState(null);

  const campaigns = [
    { id: 1, name: "La Navidad sabe a chocolate en Tadeo Chocolatería", results: 3, type: "Mensajes a WhatsApp", costPerResult: 3690, budget: 80000, spent: 11070, impressions: 3709, reach: 3348 },
    { id: 2, name: "El nuevo brunch en Cúcuta ya tiene nombre", results: 19, type: "Mensajes a WhatsApp", costPerResult: 2756.89, budget: 60000, spent: 52381, impressions: 6154, reach: 3432 },
    { id: 3, name: "Enero sabe mejor con chocolate", results: 14, type: "Mensajes a WhatsApp", costPerResult: 4285.07, budget: 60000, spent: 59991, impressions: 6542, reach: 3525 },
    { id: 4, name: "Kami se puso la 10 mostrando los nuevos platos", results: 600, type: "Visitas al Perfil", costPerResult: 133.19, budget: 80000, spent: 79915, impressions: 16725, reach: 11242 },
    { id: 5, name: "Hay pecados que se disfrutan... y Tadeo es uno de ellos", results: 523, type: "Visitas al Perfil", costPerResult: 152.96, budget: 80000, spent: 80000, impressions: 41110, reach: 21606 },
    { id: 6, name: "La que todos piden, la que todos aman", results: 18550, type: "Interacción con Publicaciones", costPerResult: 4.31, budget: 80000, spent: 80000, impressions: 49694, reach: 32265 },
    { id: 7, name: "Storia d'Amore", results: 30, type: "Mensajes a WhatsApp", costPerResult: 2413.10, budget: 80000, spent: 72393, impressions: 10914, reach: 6232 },
    { id: 8, name: "Salí a buscar los bobones más ricos", results: 43, type: "Mensajes a WhatsApp", costPerResult: 1859.74, budget: 80000, spent: 79969, impressions: 6711, reach: 3645 },
    { id: 10, name: "Porque las mejores historias de amor", results: 10, type: "Mensajes a WhatsApp", costPerResult: 3008.10, budget: 80000, spent: 30081, impressions: 4263, reach: 2839 }
  ];

  const totals = {
    spent: campaigns.reduce((acc, curr) => acc + curr.spent, 0),
    reach: campaigns.reduce((acc, curr) => acc + curr.reach, 0),
    impressions: campaigns.reduce((acc, curr) => acc + curr.impressions, 0),
    whatsapp: campaigns.filter(c => c.type === "Mensajes a WhatsApp").reduce((acc, curr) => acc + curr.results, 0),
  };

  const MetricCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-orange-50 flex items-center space-x-4 transition-transform hover:scale-[1.02]">
      <div className={`p-3.5 rounded-2xl ${color} shadow-lg shadow-black/5`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-[10px] text-amber-900/40 font-bold uppercase tracking-[0.15em] mb-0.5">{title}</p>
        <p className="text-xl font-extrabold text-[#3D1D11] leading-tight">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FDF8F3] pb-12 selection:bg-orange-200">
      <header className="bg-[#3D1D11] text-white pt-10 pb-12 px-8 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="flex justify-between items-start relative z-10">
          <div>
            <h1 className="text-3xl font-playfair italic tracking-tight mb-1">Tadeo Chocolatería</h1>
            <p className="text-orange-300/80 text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
              Reporte de Datos Ene-Feb
            </p>
          </div>
          <div className="bg-white/10 p-2.5 rounded-xl border border-white/20 backdrop-blur-sm">
            <Layers size={22} className="text-orange-200" />
          </div>
        </div>
      </header>

      <main className="px-5 mt-[-35px]">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <MetricCard title="Inversión" value={`$${totals.spent.toLocaleString()}`} icon={DollarSign} color="bg-[#633526]" />
          <MetricCard title="Alcance" value={totals.reach.toLocaleString()} icon={Users} color="bg-orange-600" />
          <MetricCard title="Impresiones" value={totals.impressions.toLocaleString()} icon={TrendingUp} color="bg-[#8B4513]" />
          <MetricCard title="Mensajes" value={totals.whatsapp} icon={MessageCircle} color="bg-[#2D5A27]" />
        </section>

        <section className="bg-white/80 backdrop-blur-sm border border-amber-100/50 rounded-[2rem] p-5 mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-amber-100 rounded-lg">
              <Info size={14} className="text-amber-800" />
            </div>
            <h2 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-900/60 font-sans">Glosario de Datos</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-amber-50/50 p-3 rounded-2xl">
              <span className="font-bold block text-[10px] text-amber-900 mb-1 uppercase tracking-wider font-sans">Alcance</span> 
              <p className="text-[11px] text-amber-800/80 leading-snug font-medium font-sans">Usuarios únicos que vieron tus anuncios.</p>
            </div>
            <div className="bg-amber-50/50 p-3 rounded-2xl">
              <span className="font-bold block text-[10px] text-amber-900 mb-1 uppercase tracking-wider font-sans">Costo x Res.</span> 
              <p className="text-[11px] text-amber-800/80 leading-snug font-medium font-sans">Inversión promedio por cada acción lograda.</p>
            </div>
          </div>
        </section>

        <div className="space-y-4">
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-900/30 ml-2 mb-3 font-sans">Resultados por Campaña</h2>
          {campaigns.map((camp) => (
            <div key={camp.id} className="bg-white rounded-[2rem] border border-amber-100/60 overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="p-5 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-transform" onClick={() => setExpandedCampaign(expandedCampaign === camp.id ? null : camp.id)}>
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-12 rounded-full ${camp.type === 'Mensajes a WhatsApp' ? 'bg-[#4CAF50]' : 'bg-[#FF9800]'}`}></div>
                  <div>
                    <h3 className="text-[13px] font-bold text-[#3D1D11] leading-tight mb-1.5 font-playfair">{camp.name}</h3>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${camp.type === 'Mensajes a WhatsApp' ? 'bg-emerald-50 text-emerald-700' : 'bg-orange-50 text-orange-700'}`}>
                        {camp.results} {camp.type.split(' ')[0]}
                      </span>
                      <span className="text-[10px] font-semibold text-amber-900/40 font-sans">${camp.spent.toLocaleString()} invertidos</span>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 p-2 rounded-full">
                   {expandedCampaign === camp.id ? <ChevronUp size={18} className="text-amber-800" /> : <ChevronDown size={18} className="text-amber-800" />}
                </div>
              </div>
              {expandedCampaign === camp.id && (
                <div className="px-5 pb-6 pt-2 bg-amber-50/30 border-t border-amber-50/50 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="bg-white p-3 rounded-2xl border border-amber-100/50">
                      <p className="text-[9px] uppercase font-bold text-amber-400 mb-1 font-sans">Costo x Res.</p>
                      <p className="text-sm font-extrabold text-[#3D1D11] font-sans">${camp.costPerResult.toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-3 rounded-2xl border border-amber-100/50">
                      <p className="text-[9px] uppercase font-bold text-amber-400 mb-1 font-sans">Alcance</p>
                      <p className="text-sm font-extrabold text-[#3D1D11] font-sans">{camp.reach.toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-3 rounded-2xl border border-amber-100/50">
                      <p className="text-[9px] uppercase font-bold text-amber-400 mb-1 font-sans">Presupuesto</p>
                      <p className="text-sm font-extrabold text-[#3D1D11] font-sans">${(camp.budget/1000).toFixed(0)}k</p>
                    </div>
                  </div>
                  <div className="mt-2 bg-white/60 p-4 rounded-2xl border border-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-bold uppercase text-amber-900/50 tracking-widest font-sans">Ejecución del Presupuesto</span>
                      <span className="text-[10px] font-black text-[#3D1D11] bg-orange-100 px-2 py-0.5 rounded-full font-sans">{Math.round((camp.spent/camp.budget)*100)}%</span>
                    </div>
                    <div className="w-full bg-amber-100/50 h-2.5 rounded-full overflow-hidden p-0.5 border border-amber-200/20">
                      <div className={`h-full rounded-full transition-all duration-1000 ease-out ${camp.type === 'Mensajes a WhatsApp' ? 'bg-[#4CAF50]' : 'bg-[#FF9800]'}`} style={{ width: `${(camp.spent/camp.budget)*100}%` }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      <footer className="mt-12 px-8 text-center">
        <div className="inline-flex flex-col items-center">
          <div className="w-10 h-1 bg-amber-200 rounded-full mb-4"></div>
          <p className="text-[10px] font-bold text-amber-900/30 uppercase tracking-[0.4em] font-sans">Reporte Oficial de Métricas</p>
          <p className="text-[10px] font-playfair italic text-amber-900/20 mt-1">Calidad Artesanal en cada dato</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
