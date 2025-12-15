"use client";
import { generateDraftEmail, generateDraftQuote } from "../lib/aiSimulator";
import DraftViewer from "./DraftViewer";
import { useState } from "react";

export default function DraftingPanel() {
  const [email, setEmail] = useState("");
  const [quote, setQuote] = useState("");

  return (
    <div className="bg-white p-4 rounded shadow col-span-3">
      <h3 className="font-semibold mb-2">Automated Drafting</h3>

      <div className="flex gap-3 mb-3">
        <button onClick={() => setEmail(generateDraftEmail())} className="btn">
          Draft Email
        </button>
        <button onClick={() => setQuote(generateDraftQuote())} className="btn">
          Draft Quote
        </button>
      </div>

      <DraftViewer email={email} quote={quote} />
    </div>
  );
}
