// src/components/EVGrowthChart.tsx
"use client"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import useEVData from "../hooks/useEVData";
import { countByYear } from "../utils/aggregations";

export default function EVGrowthChart() {
    const data = useEVData();
    const yearly = countByYear(data).sort((a, b) => a.Year - b.Year);

    return (
        <div className="bg-white p-4 shadow rounded-2xl">
            <h2 className="text-lg font-bold mb-2">EV Adoption Trend</h2>
            <LineChart width={600} height={300} data={yearly}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Year" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Count" stroke="#4f46e5" />
            </LineChart>
        </div>
    );
}
