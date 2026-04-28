import { MdSpaceDashboard } from "react-icons/md";
import { GoListOrdered } from "react-icons/go";
import { IoCalendarOutline, IoLogOutOutline } from "react-icons/io5";
import { CgUserList } from "react-icons/cg";

export default function Sidebar() {
    const menuItems = [
        { icon: MdSpaceDashboard, label: "Dashboard", active: true },
        { icon: GoListOrdered, label: "Pesanan", active: false },
        { icon: IoCalendarOutline, label: "Jadwal", active: false },
        { icon: CgUserList, label: "Keuangan", active: false },
        { icon: IoLogOutOutline, label: "Keluar", active: false },
    ];

    return (
        <aside className="min-h-screen w-[240px] bg-gradient-to-b from-[#4f8cff] to-[#3b6fd8] flex flex-col p-6 text-white">
            {/* Logo */}
            <div className="mb-10">
                <h1 className="font-poppins-semibold text-2xl leading-tight">LaundryExpress</h1>
                <p className="text-sm text-blue-100 opacity-80 mt-1">Admin Dashboard</p>
            </div>

            {/* Menu */}
            <nav className="flex-1">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <li key={index}>
                                <div
                                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-200 ${
                                        item.active
                                            ? "bg-white text-[#3b6fd8] font-inter-semibold shadow-md"
                                            : "text-white/90 hover:bg-white/10 font-inter-medium"
                                    }`}
                                >
                                    <Icon className="text-xl" />
                                    <span className="text-sm">{item.label}</span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-white/20">
                <p className="text-xs text-blue-100 opacity-60 text-center">
                    &copy; 2025 LaundryExpress
                </p>
            </div>
        </aside>
    );
}
