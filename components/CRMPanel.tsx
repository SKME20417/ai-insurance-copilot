"use client";
import { syncCRM } from "../lib/aiSimulator";

export default function CRMPanel() {
  return (
    <div
  id="crm"
  className="bg-white p-4 rounded shadow"
>

      <h3 className="font-semibold mb-2">CRM Integration (Salesforce/HubSpot)</h3>
      <button onClick={syncCRM} className="px-4 py-2 bg-indigo-600 text-white rounded">
        Sync to CRM
      </button>
    </div>
  );
}
