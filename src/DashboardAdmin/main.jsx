import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

createRoot(document.getElementById("root")).render(
  <div className="min-h-screen bg-[#f5f7fb] font-poppins">
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <Header />
        <Dashboard />
      </main>
    </div>
  </div>,
);

