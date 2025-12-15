"use client";
import { useState } from "react";
import { parseCSV } from "../lib/csvUtils";
import { sampleInsuranceData } from "../lib/sampleData";
import DataPreviewTable from "./DataPreviewTable";

export default function DataLoader() {
  const [data, setData] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [source, setSource] = useState("");

  const loadSampleData = () => {
    setData(sampleInsuranceData);
    setLoaded(true);
    setSource("Preloaded US Insurance Sample Data");
  };

  const handleUpload = async (e: any) => {
    const file = e.target.files[0];
    const parsed = await parseCSV(file);
    setData(parsed);
    setLoaded(true);
    setSource("Uploaded CSV Data");
  };

  return (
    <div className="bg-white p-4 rounded shadow col-span-3">
      <h3 className="font-semibold mb-2">Data Handling</h3>

      <div className="flex gap-3 mb-2">
        <button onClick={loadSampleData} className="btn">
          Load Sample Data
        </button>

        <input type="file" accept=".csv" onChange={handleUpload} />

        <a
          href="/insurance_agent_data_template.csv"
          download
          className="px-4 py-2 bg-gray-600 text-white rounded"
        >
          Download CSV Template
        </a>
      </div>

      {loaded && (
        <>
          <p className="text-green-600 text-sm mb-2">
            ✅ {source} loaded successfully
          </p>
          <DataPreviewTable data={data.slice(0, 10)} />
        </>
      )}
    </div>
  );
}
