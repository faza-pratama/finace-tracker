import { mockTransactions } from "../data/mockTransactions";
import StatCard from "../components/StatCard";
import TransactionTable from "../components/TransactionTable";

const Dashboard = () => {
  // Perhitungan Data Dinamis
  const totalIncome = mockTransactions
    .filter((trx) => trx.type === "income")
    .reduce((acc, trx) => acc + trx.amount, 0);

  const totalExpense = mockTransactions
    .filter((trx) => trx.type === "expense")
    .reduce((acc, trx) => acc + trx.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white p-6 md:p-12 overflow-hidden">
      {/* Efek Cahaya di Latar Belakang (Penting untuk Glassmorphism) */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] translate-x-1/4 translate-y-1/4 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-10">
        <header className="flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black tracking-tighter">FINANCE<span className="text-emerald-400">TRACKER</span></h1>
            <p className="text-zinc-500 text-sm">Monitoring your cashflow with precision.</p>
          </div>
          <button className="hidden md:block px-6 py-2 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all active:scale-95">
            + New Transaction
          </button>
        </header>

        {/* Bagian Kartu Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Balance" amount={balance} type="balance" />
          <StatCard title="Total Income" amount={totalIncome} type="income" />
          <StatCard title="Total Expense" amount={totalExpense} type="expense" />
        </div>

        {/* Bagian Tabel Transaksi */}
        <TransactionTable transactions={mockTransactions} />
      </div>
    </div>
  );
};

export default Dashboard;