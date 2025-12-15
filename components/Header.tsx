export default function Header() {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/12/EXL_Service_logo.png"
          alt="EXL"
          className="h-8"
        />
        <h1 className="text-xl font-semibold">
          EXL AI Copilot for Insurance Agents
        </h1>
      </div>

      <span className="text-sm text-gray-500">
        US Insurance | Real-Time Agent Assist | Compliance Enabled
      </span>
    </div>
  );
}
