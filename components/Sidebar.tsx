"use client";

const sections = [
  { id: "live-call", label: "Live Call" },
  { id: "transcription", label: "Transcription" },
  { id: "needs", label: "Needs & Policies" },
  { id: "compliance", label: "Compliance" },
  { id: "upsell", label: "Upsell" },
  { id: "crm", label: "CRM Sync" }
];

export default function Sidebar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-64 bg-gray-900 text-white p-4 space-y-4">
      <h2 className="text-lg font-bold">Agent Console</h2>
      <ul className="space-y-2 text-sm">
        {sections.map(s => (
          <li
            key={s.id}
            className="cursor-pointer hover:text-blue-400"
            onClick={() => scrollTo(s.id)}
          >
            {s.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
