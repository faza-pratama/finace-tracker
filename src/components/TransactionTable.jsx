import { formatCurrency } from "../utils/formatCurrency";

function TransactionTable({ transactions = [] }) {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric"
    });
  };

  const displayAmount = (amount, type) => {
    const sign = type === "income" ? "+" : "-";
    return `${sign} ${formatCurrency(amount)}`;
  };

  return (
    <div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 shadow-xl">
      <h2 className="text-white text-xl font-bold mb-6">Recent Transactions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="text-zinc-500 text-xs uppercase tracking-widest border-b border-white/10">
              <th className="pb-4 px-2">Transaction</th>
              <th className="pb-4 px-2">Date</th>
              <th className="pb-4 px-2 text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {transactions.map((trx) => (
              <tr key={trx.id} className="group hover:bg-white/5 transition-all">
                <td className="py-4 px-2">
                  <p className="text-white font-semibold group-hover:text-emerald-400 transition-colors">{trx.title}</p>
                  <p className="text-zinc-500 text-xs">{trx.category}</p>
                </td>
                <td className="py-4 px-2 text-zinc-400 text-sm">{formatDate(trx.date)}</td>
                <td className={`py-4 px-2 text-right font-bold ${trx.type === "income" ? "text-emerald-400" : "text-rose-400"}`}>
                  {displayAmount(trx.amount, trx.type)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;