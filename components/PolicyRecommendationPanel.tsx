"use client";
import { useEffect, useState } from "react";
import { policyStream } from "../lib/aiSimulator";

export default function PolicyRecommendationPanel() {
  const [policies, setPolicies] = useState<string[]>([]);

  useEffect(() => {
    policyStream.subscribe(setPolicies);
  }, []);

  return (
   <div className="bg-white p-4 rounded shadow self-start">

      <h3 className="font-semibold mb-2">Policy Recommendations (Bedrock)</h3>
      <ul className="list-disc ml-4 text-sm">
        {policies.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
