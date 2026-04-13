import { mockTransactions } from "../data/mockTransaction";
import StatCard from "../components/Statcard";

const Dashboard = () => {
  // 🔹 Logika Perhitungan Dinamis
  const totalIncome = mockTransactions
    .filter((trx) => trx.type === "income")
    .reduce((acc, trx) => acc + trx.amount, 0);

  const totalExpense = mockTransactions
    .filter((trx) => trx.type === "expense")
    .reduce((acc, trx) => acc + trx.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white p-6 md:p-12 overflow-hidden">
      
      {/* 🔹 Background Glow Orbs (Agar Efek Glassmorphism Terlihat) */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto space-y-10">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white">
              Finance <span className="text-emerald-400">Tracker</span>
            </h1>
            <p className="text-zinc-400 text-sm mt-2">
              Welcome back! Here's your financial overview.
            </p>
          </div>
          
          <button className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-bold rounded-xl transition-all active:scale-95 text-sm">
            + New Transaction
          </button>
        </header>

        {/* 🔹 Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total Balance"
            amount={balance}
            type="balance"
          />
          <StatCard
            title="Total Income"
            amount={totalIncome}
            type="income"
          />
          <StatCard
            title="Total Expense"
            amount={totalExpense}
            type="expense"
          />
        </div>

        {/* Placeholder untuk Chart & Table (Fase Berikutnya) */}
        <div className="w-full h-64 border-2 border-dashed border-zinc-800 rounded-3xl flex items-center justify-center text-zinc-600 font-medium">
          Charts & Transaction History Coming Soon
        </div>

      </div>
    </div>
  );
};

export default Dashboard;