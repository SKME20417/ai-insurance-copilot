"use client";
import { useState, useEffect } from "react";

export default function DraftViewer({
  email,
  quote
}: {
  email: string;
  quote: string;
}) {
  const [editableEmail, setEditableEmail] = useState("");
  const [editableQuote, setEditableQuote] = useState("");

  useEffect(() => {
    setEditableEmail(email);
  }, [email]);

  useEffect(() => {
    setEditableQuote(quote);
  }, [quote]);

  const sendEmail = () => {
    alert("Email sent successfully to the customer.");
  };

  const sendQuote = () => {
    alert("Quote sent successfully to the customer.");
  };

  return (
    <div className="grid grid-cols-2 gap-4 text-sm">
      {/* EMAIL */}
      {editableEmail && (
        <div className="border p-3 rounded bg-gray-50 flex flex-col gap-2">
          <h4 className="font-semibold">Drafted Email (Editable)</h4>

          <textarea
            value={editableEmail}
            onChange={(e) => setEditableEmail(e.target.value)}
            className="w-full h-48 p-2 border rounded text-sm"
          />

          <button
            onClick={sendEmail}
            className="self-end px-4 py-2 bg-green-600 text-white rounded"
          >
            Send Email
          </button>
        </div>
      )}

      {/* QUOTE */}
      {editableQuote && (
        <div className="border p-3 rounded bg-gray-50 flex flex-col gap-2">
          <h4 className="font-semibold">Drafted Quote (Editable)</h4>

          <textarea
            value={editableQuote}
            onChange={(e) => setEditableQuote(e.target.value)}
            className="w-full h-48 p-2 border rounded text-sm"
          />

          <button
            onClick={sendQuote}
            className="self-end px-4 py-2 bg-blue-600 text-white rounded"
          >
            Send Quote
          </button>
        </div>
      )}
    </div>
  );
}
