import CallSimulator from "./CallSimulator";
import TranscriptionPanel from "./TranscriptionPanel";
import NeedDetectionPanel from "./NeedDetectionPanel";
import PolicyRecommendationPanel from "./PolicyRecommendationPanel";
import CompliancePanel from "./CompliancePanel";
import UpsellPanel from "./UpsellPanel";
import DraftingPanel from "./DraftingPanel";
import CRMPanel from "./CRMPanel";
import DataLoader from "./DataLoader";

export default function AgentDashboard() {
  return (
    <div className="p-6 grid grid-cols-3 gap-4 auto-rows-min overflow-y-auto">
      <DataLoader />
      <CallSimulator />
      <TranscriptionPanel />
      <NeedDetectionPanel />
      <PolicyRecommendationPanel />
      <CompliancePanel />
      <UpsellPanel />
      <DraftingPanel />
      <CRMPanel />
    </div>
  );
}
