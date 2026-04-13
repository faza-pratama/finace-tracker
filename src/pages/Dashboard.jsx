import { mockTransactions } from "../data/mockTransaction";

const Dashboard = () => {
  // Nanti kita akan pakai data ini untuk menghitung saldo dan grafik
  console.log("Data transaksi:", mockTransactions);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Section */}
        <header>
          <h1 className="text-3xl font-bold text-emerald-400">Finance Tracker</h1>
          <p className="text-zinc-400 text-sm mt-1">Manage your personal finances easily</p>
        </header>

        {/* Nanti Komponen StatCard, Chart, dan Table akan ditaruh di sini */}
        <div className="p-6 border border-zinc-800 rounded-xl bg-zinc-900 border-dashed text-center text-zinc-500">
          Area Komponen UI (Fase 2)
        </div>

      </div>
    </div>
  );
};

export default Dashboard;