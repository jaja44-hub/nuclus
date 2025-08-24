// Example schemas for sector-tailored Firestore collections
export const RealEstateListing = {
  id: "auto",
  address: "string",
  price: "number",
  agentId: "string",
  status: "string",
  sector: "realestate",
  customFields: {} // Flexible for sector-specific data
};

export const ConstructionProject = {
  id: "auto",
  name: "string",
  client: "string",
  supervisorId: "string",
  startDate: "timestamp",
  endDate: "timestamp",
  status: "string",
  sector: "construction",
  customFields: {} // Flexible for sector-specific data
};

// Repeat for manufacturing, legal, consulting, etc.