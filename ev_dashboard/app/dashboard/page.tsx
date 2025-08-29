// src/pages/Dashboard.tsx
import KPISection from "@/components/KPISection";
import EVGrowthChart from "@/components/EVGrowthChart";
import EVByMake from "@/components/EVByMake";
import EVTypeSplit from "@/components/EVTypeSplit";

export default function Dashboard() {
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Electric Vehicle Dashboard</h1>
            <KPISection />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <EVGrowthChart />
                <EVByMake />
                <EVTypeSplit />
            </div>
        </div>
    );
}
