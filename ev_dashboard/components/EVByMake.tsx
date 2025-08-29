// src/components/EVByMake.tsx
"use client"
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import useEVData from "../hooks/useEVData";
import { countByMake } from "../utils/aggregations";

function EVByMake() {
    const data = useEVData();
    const makes = countByMake(data)
        .sort((a, b) => b.Count - a.Count)
        .slice(0, 10);

    return (
        <div className="bg-white p-4 shadow rounded-2xl">
            <h2 className="text-lg font-bold mb-2">Top 10 EV Manufacturers</h2>
            <BarChart width={600} height={300} data={makes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Make" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Count" fill="#22c55e" />
            </BarChart>
        </div>
    );
}

export default EVByMake;
