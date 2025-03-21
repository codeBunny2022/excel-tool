import React from "react";
import { parseExcelFile } from "../utils/excelParser";
import useTableStore from "../store/useTableStore";

const FileUpload = () => {
    const setData = useTableStore((state) => state.setData);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            parseExcelFile(file, setData);
        }
    };

    return (
        <div>
            <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
        </div>
    );
};

export default FileUpload;
