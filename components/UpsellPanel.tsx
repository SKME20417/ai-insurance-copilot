"use client";
import { useEffect, useState } from "react";
import { upsellStream } from "../lib/aiSimulator";

export default function UpsellPanel() {
  const [offers, setOffers] = useState<string[]>([]);

  useEffect(() => {
    upsellStream.subscribe(setOffers);
  }, []);

  return (
<div
  id="upsell"
  className="bg-green-50 p-4 rounded shadow self-start"
>


      <h3 className="font-semibold mb-2">Upsell / Cross-sell Opportunities</h3>
      <ul className="list-disc ml-4 text-sm">
        {offers.map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>
    </div>
  );
}
