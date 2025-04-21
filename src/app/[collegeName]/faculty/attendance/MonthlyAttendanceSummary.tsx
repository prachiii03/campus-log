import React, { useState } from 'react';
import { AttendanceRow } from './attendance-page';
import { utils, writeFile } from 'xlsx';

interface MonthlyViewProps {
    data: AttendanceRow[];
}

const MonthlyAttendanceSummary: React.FC<MonthlyViewProps> = ({ data }) => {
    const [percentageFilter, setPercentageFilter] = useState<number>(0);

    const summarize = (attendance: Record<string, boolean>) => {
        const monthlyData: Record<string, { present: number; absent: number }> = {};
        let totalPresent = 0, totalAbsent = 0;

        for (const [date, status] of Object.entries(attendance)) {
            const [day, month, year] = date.split('/');
            const key = `${new Date(+year, +month - 1).toLocaleString('default', { month: 'long' })} ${year}`;

            if (!monthlyData[key]) monthlyData[key] = { present: 0, absent: 0 };

            if (status) {
                monthlyData[key].present++;
                totalPresent++;
            } else {
                monthlyData[key].absent++;
                totalAbsent++;
            }
        }

        const percentage = totalPresent + totalAbsent === 0 ? 0 : ((totalPresent / (totalPresent + totalAbsent)) * 100);
        return { monthlyData, totalPresent, totalAbsent, percentage };
    };

    const allMonths = Array.from(
        new Set(data.flatMap(d => Object.keys(summarize(d.attendance).monthlyData)))
    ).sort((a, b) => {
        const toDate = (str: string) => new Date(`${str.split(" ")[0]} 1, ${str.split(" ")[1]}`);
        return toDate(a).getTime() - toDate(b).getTime();
    });


    const filteredData = data.filter(student => {
        const { percentage } = summarize(student.attendance);
        return percentage >= percentageFilter;
    });

    const downloadExcel = () => {
        const flatData = filteredData.map(student => {
            const { monthlyData, totalPresent, totalAbsent, percentage } = summarize(student.attendance);
            const row: Record<string, any> = {
                prn: student.prn,
                name: student.name,
            };
            allMonths.forEach(month => {
                row[month] = `P: ${monthlyData[month]?.present || 0}, A: ${monthlyData[month]?.absent || 0}`;
            });
            row["Total Present"] = totalPresent;
            row["Total Absent"] = totalAbsent;
            row["Attendance %"] = `${percentage.toFixed(2)}%`;
            return row;
        });

        const worksheet = utils.json_to_sheet(flatData, { header: ["prn", "name", ...allMonths, "Total Present", "Total Absent", "Attendance %"] });
        const workbook = utils.book_new();
        utils.book_append_sheet(workbook, worksheet, "Monthly Attendance");
        writeFile(workbook, "Monthly_Attendance_Report.xlsx");
    };

    return (
        <div className="p-4 overflow-x-auto">
            <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                    <label className="mr-2 font-medium">Minimum Attendance %:</label>
                    <input
                        type="number"
                        value={percentageFilter}
                        onChange={(e) => setPercentageFilter(Number(e.target.value))}
                        className="border rounded px-2 py-1 w-24 bg-white text-black"
                        placeholder="e.g. 75"
                        min="0"
                        max="100"
                    />
                </div>
                <button
                    onClick={downloadExcel}
                    className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-600"
                >
                    Download Excel
                </button>
            </div>

            <table className="w-full border-collapse border text-sm">
                <thead>
                    <tr>
                        <th className="border p-2">PRN</th>
                        <th className="border p-2">Name</th>
                        {allMonths.map(month => (
                            <th key={month} className="border p-2">{month}</th>
                        ))}
                        <th className="border p-2">Total Present</th>
                        <th className="border p-2">Total Absent</th>
                        <th className="border p-2">Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(student => {
                        const { monthlyData, totalPresent, totalAbsent, percentage } = summarize(student.attendance);
                        return (
                            <tr key={student.prn}>
                                <td className="border p-2">{student.prn}</td>
                                <td className="border p-2">{student.name}</td>
                                {allMonths.map(month => (
                                    <td key={month} className="border p-2 text-center">
                                        P: {monthlyData[month]?.present || 0} <br />
                                        A: {monthlyData[month]?.absent || 0}
                                    </td>
                                ))}
                                <td className="border p-2 text-center">{totalPresent}</td>
                                <td className="border p-2 text-center">{totalAbsent}</td>
                                <td className="border p-2 text-center">{percentage.toFixed(2)}%</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default MonthlyAttendanceSummary;
