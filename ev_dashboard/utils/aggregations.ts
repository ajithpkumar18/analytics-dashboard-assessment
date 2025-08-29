// src/utils/aggregations.ts
import { EVRecord } from "../hooks/useEVData";

// Count by manufacturer
export function countByMake(data: EVRecord[]) {
    const counts: Record<string, number> = {};
    data.forEach(ev => {
        counts[ev.Make] = (counts[ev.Make] || 0) + 1;
    });
    return Object.entries(counts).map(([Make, Count]) => ({ Make, Count }));
}

// Count by year
export function countByYear(data: EVRecord[]) {
    const counts: Record<number, number> = {};
    data.forEach(ev => {
        counts[ev["Model Year"]] = (counts[ev["Model Year"]] || 0) + 1;
    });
    return Object.entries(counts).map(([Year, Count]) => ({ Year: +Year, Count }));
}

// Range stats
export function rangeStats(data: EVRecord[]) {
    const ranges = data.map(ev => ev["Electric Range"]).filter((r): r is number => r !== null && !Number(isNaN(r)) && typeof r === "number");
    return {
        min_range: Math.min(...ranges),
        max_range: Math.max(...ranges),
        avg_range: ranges.reduce((a, b) => a + b, 0) / ranges.length,
    };
}
