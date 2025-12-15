"use client";
import { useEffect, useState } from "react";
import { needStream } from "../lib/aiSimulator";

export default function NeedDetectionPanel() {
  const [needs, setNeeds] = useState<string[]>([]);

  useEffect(() => {
    needStream.subscribe(setNeeds);
  }, []);

  return (
   <div
  id="needs"
  className="bg-white p-4 rounded shadow self-start"
>


      <h3 className="font-semibold mb-2">Detected Customer Needs (AWS Comprehend)</h3>
      <ul className="list-disc ml-4 text-sm">
        {needs.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
