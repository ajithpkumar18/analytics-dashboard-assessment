// src/hooks/useEVData.ts
"use client"
import { useEffect, useState } from "react";
import Papa from "papaparse";

export type EVRecord = {
    County: string;
    City: string;
    State: string;
    "Model Year": number;
    Make: string;
    Model: string;
    "Electric Vehicle Type": string;
    "Electric Range": number | null;
};

export default function useEVData() {
    const [data, setData] = useState<EVRecord[]>([]);

    useEffect(() => {
        Papa.parse<EVRecord>("/Electric_Vehicle_Population_Data.csv", {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: (result) => {
                const cleaned = result.data.map((row) => ({
                    ...row,
                    County: String(row.County || "").trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase()),
                    City: String(row.City || "").trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase()),
                    Make: String(row.Make || "").trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase()),
                    Model: String(row.Model || "").trim(),
                    "Electric Vehicle Type": String(row["Electric Vehicle Type"] || "").trim(),
                    "Electric Range": row["Electric Range"] === 0 ? null : row["Electric Range"],
                }));

                setData(cleaned);
            },
        });
        console.log(data)
    }, []);

    return data;
}
