import React from "react";
import useTableStore from "../store/useTableStore";

const DataTable = () => {
    const { data, updateCell } = useTableStore();

    return (
        <table border="1">
            <thead>
                <tr>
                    <th>Sr No</th>
                    <th>HS Code</th>
                    <th>Description of goods</th>
                    <th>Rate</th>
                    <th>Boxes</th>
                    <th>Qty</th>
                    <th>Net weight</th>
                    <th>Amount</th>
                    <th>Discount</th>
                    <th>Net Amount</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.SrNo}</td>
                            <td><input value={row.HSCode} onChange={(e) => updateCell(index, "HSCode", e.target.value)} /></td>
                            <td><input value={row.Description} onChange={(e) => updateCell(index, "Description", e.target.value)} /></td>
                            <td><input type="number" value={row.Rate} onChange={(e) => updateCell(index, "Rate", parseFloat(e.target.value) || 0)} /></td>
                            <td><input type="number" value={row.Boxes} onChange={(e) => updateCell(index, "Boxes", parseInt(e.target.value) || 0)} /></td>
                            <td><input type="number" value={row.Qty} onChange={(e) => updateCell(index, "Qty", parseInt(e.target.value) || 0)} /></td>
                            <td><input type="number" value={row.NetWeight} onChange={(e) => updateCell(index, "NetWeight", parseFloat(e.target.value) || 0)} /></td>
                            <td>{row.Amount.toFixed(2)}</td>
                            <td>{row.Discount.toFixed(2)}</td>
                            <td>{row.NetAmount.toFixed(2)}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="10" style={{ textAlign: "center" }}>No data available</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default DataTable;
