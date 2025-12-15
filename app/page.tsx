import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AgentDashboard from "../components/AgentDashboard";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <AgentDashboard />
      </div>
    </div>
  );
}
