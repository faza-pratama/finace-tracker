import { ArrowUp, ArrowDown, Wallet } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";

function StatCard({ title, amount, type }) {
  const textColor = 
    type === "income" ? "text-emerald-400" : 
    type === "expense" ? "text-rose-400" : "text-white";

  return (
    <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-zinc-400 text-sm font-medium uppercase tracking-wider">{title}</h3>
        <div className={`p-2 rounded-lg bg-zinc-800/50 ${textColor}`}>
          {type === "income" && <ArrowUp size={20} />}
          {type === "expense" && <ArrowDown size={20} />}
          {type === "balance" && <Wallet size={20} />}
        </div>
      </div>
      <p className={`text-3xl font-bold ${textColor}`}>
        {formatCurrency(amount)}
      </p>
    </div>
  );
}

export default StatCard;