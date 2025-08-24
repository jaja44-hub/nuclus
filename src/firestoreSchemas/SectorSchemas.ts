// Firestore schemas for multi-sector enterprise use

export type Sector =
  | "realestate"
  | "construction"
  | "manufacturing"
  | "legal"
  | "consulting";

// Generic enterprise item, reusable across sectors
export interface EnterpriseItem {
  id: string;
  sector: Sector;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  customFields: Record<string, any>;
  status: string;
}

// Real estate listing example
export interface RealEstateListing extends EnterpriseItem {
  address: string;
  price: number;
  agentId: string;
}

// Construction project example
export interface ConstructionProject extends EnterpriseItem {
  client: string;
  supervisorId: string;
  startDate: Date;
  endDate: Date;
}

// Manufacturing work order example
export interface ManufacturingOrder extends EnterpriseItem {
  factory: string;
  batchNumber: string;
  quantity: number;
}

// Consulting case example
export interface ConsultingCase extends EnterpriseItem {
  client: string;
  consultantId: string;
  caseType: string;
}