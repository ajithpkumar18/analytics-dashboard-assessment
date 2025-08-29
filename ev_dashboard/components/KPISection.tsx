// src/components/KPISection.tsx
"use client"
import useEVData from "../hooks/useEVData";
import { rangeStats } from "../utils/aggregations";

function KPISection() {
    const data = useEVData();
    const stats = rangeStats(data);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 bg-white shadow rounded-2xl text-center">
                <h3 className="text-gray-500">Total EVs</h3>
                <p className="text-2xl font-bold">{data.length.toLocaleString()}</p>
            </div>
            <div className="p-4 bg-white shadow rounded-2xl text-center">
                <h3 className="text-gray-500">Avg Range</h3>
                <p className="text-2xl font-bold">{Math.round(stats.avg_range)} miles</p>
            </div>
            <div className="p-4 bg-white shadow rounded-2xl text-center">
                <h3 className="text-gray-500">Max Range</h3>
                <p className="text-2xl font-bold">{stats.max_range} miles</p>
            </div>
        </div>
    );
}

export default KPISection;
