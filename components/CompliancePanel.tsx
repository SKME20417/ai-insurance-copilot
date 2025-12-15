"use client";
import { useEffect, useState } from "react";
import { complianceStream } from "../lib/aiSimulator";

export default function CompliancePanel() {
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    complianceStream.subscribe(setAlerts);
  }, []);

  return (
    <div
  id="compliance"
  className="bg-red-50 p-4 rounded shadow"
>

      <h3 className="font-semibold mb-2 text-red-700">Compliance Flags</h3>
      <ul className="list-disc ml-4 text-sm text-red-600">
        {alerts.map((a, i) => (
          <li key={i}>{a}</li>
        ))}
      </ul>
    </div>
  );
}
