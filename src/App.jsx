import React, { useMemo } from 'react';
import { 
  MessageCircle, 
  MousePointer2, 
  Users, 
  TrendingUp, 
  DollarSign, 
  BarChart3,
  Layers,
  ArrowUpRight,
  ShoppingBag
} from 'lucide-react';

const rawData = [
  { nombre: "Kami se puso la 10 mostrando los nuevos platos de Tadeo Chocolatería", resultados: 288, indicador: "Visitas al Perfil", costo: 152.94, gasto: 44048, alcance: 7041 },
  { nombre: "Hay pecados que se disfrutan... y Tadeo es uno de ellos", resultados: 300, indicador: "Visitas al Perfil", costo: 158.38, gasto: 47516, alcance: 14743 },
  { nombre: "La que todos piden, la que todos aman", resultados: 18550, indicador: "Interacciones", costo: 4.31, gasto: 80000, alcance: 32265 },
  { nombre: "Storia d'Amore", resultados: 30, indicador: "Mensajes a WhatsApp", costo: 2413.1, gasto: 72393, alcance: 6232 },
  { nombre: "Salí a buscar los bombones más ricos de toda la ciudad", resultados: 43, indicador: "Mensajes a WhatsApp", costo: 1859.74, gasto: 79969, alcance: 3645 },
  { nombre: "Porque las mejores historias de amor", resultados: 10, indicador: "Mensajes a WhatsApp", costo: 3008.1, gasto: 30081, alcance: 2839 },
];

const App = () => {
  const totals = useMemo(() => {
    const categories = {
      "Mensajes a WhatsApp": { spend: 0, res: 0 },
      "Interacciones": { spend: 0, res: 0 },
      "Visitas al Perfil": { spend: 0, res: 0 }
    };

    let totalSpend = 0;
    let totalReach = 0;

    rawData.forEach(item => {
      if (categories[item.indicador]) {
        categories[item.indicador].spend += item.gasto;
        categories[item.indicador].res += item.resultados;
      }
      totalSpend += item.gasto;
      totalReach += item.alcance;
    });

    return { categories, totalSpend, totalReach };
  }, []);

  const formatCurrency = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(val);
  const formatNumber = (val) => new Intl.NumberFormat('es-CO').format(val);

  return (
    <div className="min-h-screen bg-orange-50/30 p-4 md:p-8 font-sans text-slate-900">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="bg-amber-800 p-3 rounded-2xl shadow-lg">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black text-amber-900 tracking-tight leading-none">Tadeo Chocolatería</h1>
            <p className="text-amber-700/70 mt-1 uppercase text-xs font-bold tracking-widest">Panel de Rendimiento Publicitario</p>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-sm border border-amber-100">
          <div className="bg-amber-100 p-2 rounded-xl">
            <DollarSign className="w-6 h-6 text-amber-700" />
          </div>
          <div>
            <p className="text-[10px] text-amber-600 font-black uppercase tracking-tighter">Inversión Total</p>
            <p className="text-xl font-black text-amber-900">{formatCurrency(totals.totalSpend)}</p>
          </div>
        </div>
      </header>

      {/* Main KPIs */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <KPICard 
          title="Mensajes WhatsApp" 
          value={totals.categories["Mensajes a WhatsApp"].res} 
          subValue={`Costo Prom: ${formatCurrency(totals.categories["Mensajes a WhatsApp"].spend / totals.categories["Mensajes a WhatsApp"].res)}`}
          icon={<MessageCircle className="w-6 h-6 text-emerald-600" />}
          color="bg-emerald-50"
          accent="border-emerald-100"
        />
        <KPICard 
          title="Interacciones" 
          value={formatNumber(totals.categories["Interacciones"].res)} 
          subValue={`Costo Prom: ${formatCurrency(totals.categories["Interacciones"].spend / totals.categories["Interacciones"].res)}`}
          icon={<MousePointer2 className="w-6 h-6 text-blue-600" />}
          color="bg-blue-50"
          accent="border-blue-100"
        />
        <KPICard 
          title="Visitas al Perfil" 
          value={formatNumber(totals.categories["Visitas al Perfil"].res)} 
          subValue={`Costo Prom: ${formatCurrency(totals.categories["Visitas al Perfil"].spend / totals.categories["Visitas al Perfil"].res)}`}
          icon={<Users className="w-6 h-6 text-amber-600" />}
          color="bg-amber-50"
          accent="border-amber-100"
        />
        <KPICard 
          title="Alcance Total" 
          value={formatNumber(totals.totalReach)} 
          subValue="Personas alcanzadas"
          icon={<BarChart3 className="w-6 h-6 text-rose-600" />}
          color="bg-rose-50"
          accent="border-rose-100"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Table Section */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl shadow-amber-900/5 border border-amber-50 overflow-hidden">
          <div className="p-8 border-b border-slate-50">
            <h2 className="text-xl font-black flex items-center gap-3 text-amber-900">
              <Layers className="w-6 h-6 text-amber-600" />
              Desglose de Campañas
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-amber-50/30 text-amber-800/40 text-[10px] font-black uppercase tracking-widest">
                  <th className="px-8 py-5">Campaña</th>
                  <th className="px-8 py-5">Resultados</th>
                  <th className="px-8 py-5 text-right">Costo/R</th>
                  <th className="px-8 py-5 text-right">Gasto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-50/50">
                {rawData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/20 transition-all group">
                    <td className="px-8 py-5">
                      <p className="text-sm font-bold text-slate-800 line-clamp-1 mb-1">{item.nombre}</p>
                      <span className={`text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-tighter ${
                        item.indicador.includes('Mensajes') ? 'bg-emerald-100 text-emerald-700' : 
                        item.indicador.includes('Interacciones') ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.indicador}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <p className="text-base font-black text-slate-900">{formatNumber(item.resultados)}</p>
                    </td>
                    <td className="px-8 py-5 text-right font-medium text-slate-500 text-sm">
                      {formatCurrency(item.costo)}
                    </td>
                    <td className="px-8 py-5 text-right">
                      <p className="text-sm font-black text-slate-800">{formatCurrency(item.gasto)}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side Metrics */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-amber-900/5 border border-amber-50">
            <h3 className="font-black text-amber-900 mb-8 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-amber-600" />
              Eficiencia por Canal
            </h3>
            <div className="space-y-8">
              <MetricProgress 
                label="Conversión WhatsApp" 
                cost={totals.categories["Mensajes a WhatsApp"].spend / totals.categories["Mensajes a WhatsApp"].res} 
                max={3500}
                color="bg-emerald-500"
              />
              <MetricProgress 
                label="Interacciones" 
                cost={totals.categories["Interacciones"].spend / totals.categories["Interacciones"].res} 
                max={200}
                color="bg-blue-500"
              />
              <MetricProgress 
                label="Tráfico Perfil" 
                cost={totals.categories["Visitas al Perfil"].spend / totals.categories["Visitas al Perfil"].res} 
                max={1000}
                color="bg-amber-500"
              />
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-800 to-amber-950 p-8 rounded-[2.5rem] shadow-2xl shadow-amber-900/20 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <h4 className="text-amber-200/60 text-[10px] font-black uppercase tracking-widest mb-2">Alcance de Marca</h4>
              <p className="text-5xl font-black mb-4 tracking-tighter">{formatNumber(totals.totalReach)}</p>
              <div className="flex items-center gap-2 text-amber-200/80 text-sm font-bold">
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span>Impacto en clientes potenciales</span>
              </div>
            </div>
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KPICard = ({ title, value, subValue, icon, color, accent }) => (
  <div className={`bg-white p-8 rounded-[2.5rem] shadow-sm border ${accent} hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300`}>
    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <div>
      <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{title}</h3>
      <p className="text-3xl font-black text-slate-900">{value}</p>
      <p className="text-[11px] text-slate-500 mt-2 font-bold bg-slate-50 inline-block px-2 py-1 rounded-lg">{subValue}</p>
    </div>
  </div>
);

const MetricProgress = ({ label, cost, max, color }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-end">
      <span className="text-xs font-black text-slate-500 uppercase tracking-tighter">{label}</span>
      <span className="text-sm font-black text-amber-900">
        {new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(cost)}
      </span>
    </div>
    <div className="w-full bg-amber-50 h-2.5 rounded-full overflow-hidden border border-amber-100/50">
      <div 
        className={`${color} h-full rounded-full transition-all duration-1000 ease-out shadow-inner`} 
        style={{ width: `${Math.min((cost / max) * 100, 100)}%` }}
      ></div>
    </div>
  </div>
);

export default App;

export default App;
