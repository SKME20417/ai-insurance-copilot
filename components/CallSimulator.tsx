"use client";

import { simulateTranscription } from "../lib/aiSimulator";

export default function CallSimulator() {
  return (
    <div
      id="live-call"
      className="bg-white p-4 rounded shadow col-span-3"
    >

      <h3 className="font-semibold mb-2">Live Call Simulator</h3>
      <button
        onClick={simulateTranscription}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Start Simulated Call (Amazon Transcribe)
      </button>
    </div>
  );
}
