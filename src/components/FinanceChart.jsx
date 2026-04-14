import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { formatCurrency } from "../utils/formatCurrency";

// 🔹 Custom Tooltip agar bergaya Glassmorphism
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-2xl">
        <p className="text-zinc-400 text-xs uppercase font-bold mb-2">{payload[0].payload.name}</p>
        <p className="text-emerald-400 font-semibold">
          Income: {formatCurrency(payload[0].value)}
        </p>
        <p className="text-rose-400 font-semibold">
          Expense: {formatCurrency(payload[1].value)}
        </p>
      </div>
    );
  }
  return null;
};

function FinanceChart({ data }) {
  return (
    <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-xl h-[400px]">
      <h2 className="text-white text-lg font-bold mb-6">Financial Overview</h2>
      
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" vertical={false} />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#71717a', fontSize: 12 }}
            dy={10}
          />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'white', opacity: 0.05 }} />
          
          {/* Batang Income */}
          <Bar 
            dataKey="income" 
            fill="#34d399" 
            radius={[4, 4, 0, 0]} 
            barSize={40} 
          />
          
          {/* Batang Expense */}
          <Bar 
            dataKey="expense" 
            fill="#fb7185" 
            radius={[4, 4, 0, 0]} 
            barSize={40} 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default FinanceChart;