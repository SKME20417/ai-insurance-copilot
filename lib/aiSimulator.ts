import { Subject } from "rxjs";

/* ============================
   STREAMS (SIMULATED AWS FLOW)
   ============================ */

export const transcriptionStream = new Subject<string>();
export const needStream = new Subject<string[]>();
export const policyStream = new Subject<string[]>();
export const complianceStream = new Subject<string[]>();
export const upsellStream = new Subject<string[]>();

/* ============================
   LIVE CALL SIMULATION
   ============================ */

export function simulateTranscription() {
  const transcript =
    "Customer is looking for health insurance with family coverage and a lower premium.";

  transcriptionStream.next(transcript);

  needStream.next([
    "Health Insurance",
    "Family Coverage",
    "Low Premium Requirement"
  ]);

  policyStream.next([
    "Health Secure Plus – Family Floater",
    "Care Advantage Gold"
  ]);

  complianceStream.next([
    "Waiting period disclosure required",
    "Policy exclusions must be explained"
  ]);

  upsellStream.next([
    "Critical Illness Rider",
    "Accidental Death Benefit"
  ]);
}

/* ============================
   GENAI DRAFTING (VISIBLE)
   ============================ */

export function generateDraftEmail() {
  return `
Dear Customer,

Thank you for speaking with us today.

Based on your requirements, we recommend our Health Secure Plus policy
with comprehensive family coverage and cost-effective premiums.

Key highlights:
• Cashless hospitalization
• Family floater benefits
• Wide hospital network

Please let us know if you would like to proceed.

Regards,
Insurance Advisory Team
`;
}

export function generateDraftQuote() {
  return `
Policy Name: Health Secure Plus – Family (USA)

Coverage Amount: $500,000
Annual Premium: $1,850
Deductible: $2,000
Copay: $30 per visit
Waiting Period: 12 months

This quote is indicative and subject to underwriting approval
as per US insurance regulations.
`;
}


/* ============================
   CRM SYNC (SIMULATED)
   ============================ */

export function syncCRM() {
  alert("Customer interaction synced to CRM successfully.");
}
