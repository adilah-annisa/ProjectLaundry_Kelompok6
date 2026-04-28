import { IoShirtOutline, IoCubeOutline, IoTimeOutline, IoCloseCircleOutline } from "react-icons/io5";

const stats = [
    {
        label: "Total Pesanan",
        value: "1,248",
        icon: IoShirtOutline,
        color: "#3b82f6",
        bgIcon: "bg-blue-50",
    },
    {
        label: "Pesanan Selesai",
        value: "1,180",
        icon: IoCubeOutline,
        color: "#10b981",
        bgIcon: "bg-green-50",
    },
    {
        label: "Sedang Diproses",
        value: "45",
        icon: IoTimeOutline,
        color: "#f59e0b",
        bgIcon: "bg-yellow-50",
    },
    {
        label: "Pesanan Batal",
        value: "23",
        icon: IoCloseCircleOutline,
        color: "#ef4444",
        bgIcon: "bg-red-50",
    },
];

const orders = [
    { name: "Ahmad Rizky", address: "Jl. Mawar No. 12, Jakarta", date: "15 Jan 2025", time: "08:00", status: "Selesai" },
    { name: "Siti Aminah", address: "Jl. Melati No. 45, Bandung", date: "15 Jan 2025", time: "09:30", status: "Diproses" },
    { name: "Budi Santoso", address: "Jl. Anggrek No. 8, Surabaya", date: "14 Jan 2025", time: "10:15", status: "Dikirim" },
    { name: "Dewi Lestari", address: "Jl. Kenanga No. 22, Yogyakarta", date: "14 Jan 2025", time: "11:00", status: "Selesai" },
    { name: "Eko Prasetyo", address: "Jl. Cempaka No. 17, Semarang", date: "13 Jan 2025", time: "13:45", status: "Cancel" },
    { name: "Rina Wulandari", address: "Jl. Dahlia No. 5, Malang", date: "13 Jan 2025", time: "14:20", status: "Diproses" },
];

const statusStyles = {
    Selesai: "bg-green-100 text-green-600",
    Diproses: "bg-yellow-100 text-yellow-600",
    Dikirim: "bg-blue-100 text-blue-600",
    Cancel: "bg-red-100 text-red-600",
};

export default function Dashboard() {
    return (
        <div className="space-y-8">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm p-6 flex items-center gap-4 hover:shadow-md transition-shadow"
                        >
                            <div
                                className={`w-14 h-14 rounded-xl ${stat.bgIcon} flex items-center justify-center`}
                            >
                                <Icon className="text-2xl" style={{ color: stat.color }} />
                            </div>
                            <div>
                                <p className="font-inter-semibold text-2xl text-gray-800">{stat.value}</p>
                                <p className="text-sm text-gray-500 font-poppins mt-0.5">{stat.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="font-inter-semibold text-lg text-gray-800">Pesanan Terbaru</h2>
                    <button className="text-sm text-[#3b6fd8] font-inter-medium hover:underline">
                        Lihat Semua
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="text-left px-6 py-4 text-xs font-inter-semibold text-gray-600 uppercase tracking-wider">
                                    Nama Pelanggan
                                </th>
                                <th className="text-left px-6 py-4 text-xs font-inter-semibold text-gray-600 uppercase tracking-wider">
                                    Alamat
                                </th>
                                <th className="text-left px-6 py-4 text-xs font-inter-semibold text-gray-600 uppercase tracking-wider">
                                    Tanggal
                                </th>
                                <th className="text-left px-6 py-4 text-xs font-inter-semibold text-gray-600 uppercase tracking-wider">
                                    Waktu Jemput
                                </th>
                                <th className="text-left px-6 py-4 text-xs font-inter-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {orders.map((order, index) => (
                                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-inter-medium text-gray-800">
                                        {order.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 font-poppins">
                                        {order.address}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 font-poppins">
                                        {order.date}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 font-poppins">
                                        {order.time}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex px-3 py-1 rounded-full text-xs font-inter-semibold ${statusStyles[order.status]}`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

