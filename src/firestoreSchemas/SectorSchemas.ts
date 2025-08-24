// src/firestoreSchemas/SectorSchemas.ts
export type Sector = "realestate" | "construction" | "manufacturing" | "legal" | "consulting";

export type EnterpriseItemBase = {
  id: string;
  sector: Sector;
  title: string;
  summary?: string;
  ownerId: string;
  createdAt: number;
  updatedAt: number;
  tags?: string[];
};

export type RealEstateListing = EnterpriseItemBase & {
  type: "listing";
  address: string;
  price: number;
  status: "draft" | "active" | "sold";
};

export type ConstructionProject = EnterpriseItemBase & {
  type: "project";
  phase: "design" | "permit" | "build" | "handover";
  budget?: number;
};

export type ManufacturingSpec = EnterpriseItemBase & {
  type: "spec";
  sku: string;
  bomUrl?: string;
};

export type EnterpriseItem =
  | RealEstateListing
  | ConstructionProject
  | ManufacturingSpec
  | EnterpriseItemBase;
