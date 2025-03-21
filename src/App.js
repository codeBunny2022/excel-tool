import React from "react";
import FileUpload from "./components/FileUpload";
import DataTable from "./components/DataTable";

function App() {
    return (
        <div>
            <h1>Excel-like Interactive Tool</h1>
            <FileUpload />
            <DataTable />
        </div>
    );
}

export default App;
