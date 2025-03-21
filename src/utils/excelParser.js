import * as XLSX from "xlsx";

export const parseExcelFile = (file, setData) => {
    const reader = new FileReader();
    reader.onload = (event) => {
        const binaryStr = event.target.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const jsonData = XLSX.utils.sheet_to_json(sheet);
        console.log("Parsed Data:", jsonData); // Debugging: Check console output

        const formattedData = jsonData.map((row, index) => ({
            SrNo: index + 1,
            HSCode: row["HS Code"] || "",
            Description: row["Description of goods"] || "",
            Rate: parseFloat(row["Rate"]) || 0,
            Boxes: parseInt(row["Boxes"]) || 0,
            Qty: parseInt(row["Qty"]) || 0,
            NetWeight: parseFloat(row["Net weight"]) || 0,
            Amount: 0, // Auto-calculated
            Discount: 0, // Auto-calculated
            NetAmount: 0, // Auto-calculated
        }));

        setData(formattedData);
    };
    reader.readAsBinaryString(file);
};
