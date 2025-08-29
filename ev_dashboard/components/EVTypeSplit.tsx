// src/components/EVTypeSplit.tsx
"use client"
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useEVData from "../hooks/useEVData";

export default function EVTypeSplit() {
    const data = useEVData();
    const typeCounts = data.reduce<Record<string, number>>((acc, ev) => {
        acc[ev["Electric Vehicle Type"]] = (acc[ev["Electric Vehicle Type"]] || 0) + 1;
        return acc;
    }, {});

    const chartData = Object.entries(typeCounts).map(([type, count]) => ({
        type,
        count,
    }));

    const COLORS = ["#6366f1", "#f43f5e"];

    return (
        <div className="bg-white p-4 shadow rounded-2xl">
            <h2 className="text-lg font-bold mb-2">BEV vs PHEV Split</h2>
            <PieChart width={400} height={300}>
                <Pie
                    data={chartData}
                    dataKey="count"
                    nameKey="type"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label
                >
                    {chartData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
}
