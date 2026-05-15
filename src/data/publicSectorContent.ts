import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Building2,
  ClipboardCheck,
  Database,
  HeadphonesIcon,
  HeartPulse,
  Landmark,
  LayoutGrid,
  LifeBuoy,
  MapPin,
  Network,
  PhoneCall,
  Shield,
  Stethoscope,
  Truck,
  Users,
  Zap,
} from "lucide-react";

export const heroStats = [
  { stat: "25+ Years", label: "Government consulting experience" },
  { stat: "30+ Programs", label: "Enterprise initiatives delivered" },
  { stat: "NYC & NYS", label: "Trusted in high-visibility programs" },
  { stat: "M/WBE-Certified", label: "Supplier diversity value" },
];

export const audiences: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "State Agencies", description: "Statewide programs, oversight, and execution support.", icon: Landmark },
  { title: "Local Government", description: "City and county agencies running public-facing services.", icon: Building2 },
  { title: "Public Health Programs", description: "Population health, vaccination, and clinical operations.", icon: Stethoscope },
  { title: "Human Services Programs", description: "Intake, case management, and service delivery.", icon: HeartPulse },
  { title: "Emergency Response Initiatives", description: "Rapid mobilization for time-critical efforts.", icon: AlertTriangle },
  { title: "Public-Sector Prime Contractors", description: "Subcontracting and teaming on government work.", icon: Shield },
  { title: "Cooperative Purchasing Participants", description: "Agencies and partners using cooperative vehicles.", icon: Network },
];

export const capabilities: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Emergency Response", description: "Rapid operational coordination for urgent, high-visibility initiatives.", icon: Zap },
  { title: "Program Management", description: "Oversight, planning, stakeholder coordination, and execution tracking.", icon: ClipboardCheck },
  { title: "Staffing & Workforce Deployment", description: "Flexible staffing support for programs requiring scalable teams.", icon: Users },
  { title: "Logistics & Field Operations", description: "Coordination across locations, teams, vendors, and service delivery points.", icon: Truck },
  { title: "Data, Reporting & Transparency", description: "Reporting workflows, dashboards, executive visibility, and performance tracking.", icon: BarChart3 },
  { title: "Client / Constituent Support", description: "High-touch support for public-facing programs and service populations.", icon: LifeBuoy },
  { title: "Call Center Support", description: "Support models for intake, inquiries, escalation, and service coordination.", icon: PhoneCall },
  { title: "Multi-Site Operations", description: "Coordination across distributed teams, sites, agencies, and vendors.", icon: MapPin },
];

export const whyIbcCards = [
  { title: "Embedded with Leadership", description: "We sit alongside program leaders, not in advisory silos." },
  { title: "Real-Time Issue Resolution", description: "Issues get unblocked in the moment, not in next month's report." },
  { title: "Strategy + Operations + Technology Aligned", description: "We connect the layers most firms keep separate." },
  { title: "War Room Execution Model", description: "A focused, cross-functional model proven under pressure." },
];

export const procurementReadiness = [
  "Contract administration support",
  "Onboarding and implementation planning",
  "Status reporting and performance tracking",
  "Documentation and compliance support",
  "Scalable staffing and deployment coordination",
  "Subcontractor and partner coordination",
  "Stakeholder communication and escalation",
  "Multi-workstream coordination",
  "Issue tracking and resolution workflows",
  "Closeout support and lessons learned documentation",
];

export const experienceHighlights: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "COVID-19 Response — NYC", description: "Large-scale vaccination operations, emergency coordination, and rapid system deployment.", icon: Activity },
  { title: "Immigrant & Asylum Program Setup", description: "Intake, case management, and operational scaling under urgent conditions.", icon: HeartPulse },
  { title: "Public-Facing Digital Platforms", description: "Implementation management of systems serving large populations under tight timelines.", icon: LayoutGrid },
  { title: "Multi-Agency Data Ecosystems", description: "Real-time reporting, data sharing, and cross-agency coordination.", icon: Database },
  { title: "Program Turnaround Engagements", description: "Stabilizing delayed and high-risk initiatives.", icon: HeadphonesIcon },
];

export const supplierDiversityBlocks = [
  "M/WBE-certified firm",
  "Woman-owned positioning",
  "Public-sector partner support",
  "Subcontractor coordination",
  "Flexible teaming models",
  "Scalable staffing and implementation support",
];

export const certificationLabels = [
  "M/WBE Certified",
  "WBENC Women-Owned",
  "SBA WOSB",
  "NYC MWBE",
  "Port Authority NY & NJ MWBE",
];

export const contact = {
  lead: "Janki Patel",
  role: "Public Sector Lead",
  phone: "+1 (732) 620 6290",
  email: "janki@innovativebc.io",
  website: "innovativebc.io",
  linkedin: "linkedin.com/company/innovativebusinessconcepts",
};

export const inquiryTypes = [
  "Public-sector procurement",
  "Cooperative contracting",
  "Teaming / subcontracting",
  "Capability statement request",
  "Other",
];

export const capabilityStatementHref = "/ibc-public-sector-capability-statement.pdf";
