import { ArrowUp, ArrowDown, Wallet } from "lucide-react";
import { formatCurrency } from "../utils/formatCurrency";

function StatCard({ title, amount, type }) {
  // Menentukan warna teks dan ikon berdasarkan tipe transaksi
  const textColor =
    type === "income"
      ? "text-emerald-400"
      : type === "expense"
      ? "text-rose-400"
      : "text-white";

  return (
    <div className="relative overflow-hidden bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-2xl p-6 shadow-xl">
      {/* Header: Title + Dynamic Icon */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-medium text-zinc-400 tracking-wide uppercase">
          {title}
        </h3>

        <div className={`p-2 rounded-lg bg-zinc-800/50 ${textColor}`}>
          {type === "income" && <ArrowUp className="w-5 h-5" />}
          {type === "expense" && <ArrowDown className="w-5 h-5" />}
          {type === "balance" && <Wallet className="w-5 h-5" />}
        </div>
      </div>

      {/* Amount Display */}
      <div className="space-y-1">
        <p className={`text-3xl font-bold tracking-tight ${textColor}`}>
          {formatCurrency(amount)}
        </p>
        <p className="text-xs text-zinc-500 font-medium">
          Updated just now
        </p>
      </div>
    </div>
  );
}

export default StatCard;