import React, { useState, useEffect, useRef } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const Tutorial = () => {
  const [rowData, setRowData] = useState();
  const gridRef = useRef();
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  const onSelectionChanged = (event) => {
    const selectedDataNode = event.api.getSelectedNodes();
    const rowData = selectedDataNode[0].data;
    console.log(selectedDataNode);
    console.log(rowData);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        ref={gridRef}
        rowSelection={"single"}
        onSelectionChanged={onSelectionChanged}
      >
        <AgGridColumn field="make"></AgGridColumn>
        <AgGridColumn field="model"></AgGridColumn>
        <AgGridColumn field="price"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};

export default Tutorial;
