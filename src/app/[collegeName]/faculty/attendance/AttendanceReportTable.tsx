'use client';

import { useEffect, useState } from 'react';
import { utils, writeFile } from 'xlsx';

interface AttendanceRow {
    prn: string;
    name: string;
    student_id: string;
    attendance: Record<string, boolean>; // date -> status
}

interface AttendanceReportTableProps {
    attendanceData: AttendanceRow[];
}

export default function AttendanceReportTable({ attendanceData }: AttendanceReportTableProps) {
    const [report, setReport] = useState<any[]>([]);
    const [allDates, setAllDates] = useState<string[]>([]);
    const [minPercentage, setMinPercentage] = useState(0);
    const [maxPercentage, setMaxPercentage] = useState(100);

    useEffect(() => {
        const dateSet = new Set<string>();

        attendanceData.forEach((row) => {
            Object.keys(row.attendance).forEach(date => dateSet.add(date));
        });

        const sortedDates = Array.from(dateSet).sort((a, b) => {
            const [dayA, monthA, yearA] = a.split('/').map(Number);
            const [dayB, monthB, yearB] = b.split('/').map(Number);
            return new Date(yearA, monthA - 1, dayA).getTime() - new Date(yearB, monthB - 1, dayB).getTime();
        });

        setAllDates(sortedDates);

        const flatReport = attendanceData.map((row) => {
            const formattedRow: any = {
                prn_no: row.prn,
                name: row.name,
            };

            let totalPresent = 0;
            sortedDates.forEach(date => {
                const isPresent = row.attendance[date] === true;
                formattedRow[date] = isPresent ? 'Present' : 'Absent';
                if (isPresent) totalPresent++;
            });

            const totalLectures = sortedDates.length;
            const percentage = totalLectures > 0 ? (totalPresent / totalLectures) * 100 : 0;

            formattedRow["total_present"] = totalPresent;
            formattedRow["total_lectures"] = totalLectures;
            formattedRow["attendance_percentage"] = percentage.toFixed(2) + '%';

            return {
                ...formattedRow,
                __percent: percentage, // used for filtering
            };
        });

        setReport(flatReport);
    }, [attendanceData]);

    const downloadExcel = () => {
        const filteredData = report.filter(row =>
            row.__percent >= minPercentage && row.__percent <= maxPercentage
        );

        const cleanedData = filteredData.map(({ __percent, ...rest }) => rest); // remove __percent

        const worksheet = utils.json_to_sheet(cleanedData, {
            header: ["prn_no", "name", ...allDates, "total_present", "total_lectures", "attendance_percentage"]
        });

        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Attendance");
        writeFile(workbook, "Attendance_Report.xlsx");
    };

    return (
        <div className="overflow-x-auto p-4">
            <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <label htmlFor="min" className="font-semibold">Min %:</label>
                    <input
                        id="min"
                        type="number"
                        value={minPercentage}
                        onChange={(e) => setMinPercentage(Number(e.target.value))}
                        min={0}
                        max={100}
                        className="w-20 border px-2 py-1 rounded bg-white"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="max" className="font-semibold">Max %:</label>
                    <input
                        id="max"
                        type="number"
                        value={maxPercentage}
                        onChange={(e) => setMaxPercentage(Number(e.target.value))}
                        min={0}
                        max={100}
                        className="w-20 border px-2 py-1 rounded bg-white"
                    />
                </div>
                <button
                    onClick={downloadExcel}
                    className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-700"
                >
                    Download Excel
                </button>
            </div>

            <table className="min-w-full border border-gray-300 text-black">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2">PRN</th>
                        <th className="border px-4 py-2">Name</th>
                        {allDates.map((date) => (
                            <th key={date} className="border px-4 py-2">{date}</th>
                        ))}
                        <th className="border px-4 py-2">Total Present</th>
                        <th className="border px-4 py-2">Total Lectures</th>
                        <th className="border px-4 py-2">Attendance %</th>
                    </tr>
                </thead>
                <tbody>
                    {report
                        .filter(row => row.__percent >= minPercentage && row.__percent <= maxPercentage)
                        .map((row, idx) => (
                            <tr key={idx} className="text-center">
                                <td className="border px-4 py-2">{row.prn_no}</td>
                                <td className="border px-4 py-2">{row.name}</td>
                                {allDates.map(date => (
                                    <td key={date} className="border px-4 py-2">
                                        {row[date]}
                                    </td>
                                ))}
                                <td className="border px-4 py-2">{row.total_present}</td>
                                <td className="border px-4 py-2">{row.total_lectures}</td>
                                <td className="border px-4 py-2">{row.attendance_percentage}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}
