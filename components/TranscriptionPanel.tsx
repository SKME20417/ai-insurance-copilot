"use client";
import { useEffect, useState } from "react";
import { transcriptionStream } from "../lib/aiSimulator";

export default function TranscriptionPanel() {
  const [text, setText] = useState("");

  useEffect(() => {
    transcriptionStream.subscribe(setText);
  }, []);

  return (
   <div
  id="transcription"
  className="bg-white p-4 rounded shadow col-span-3 self-start"
>


      <h3 className="font-semibold mb-2">Real-Time Transcription</h3>
      <p className="text-sm bg-gray-100 p-3 rounded h-32 overflow-auto">
        {text || "Waiting for call..."}
      </p>
    </div>
  );
}
