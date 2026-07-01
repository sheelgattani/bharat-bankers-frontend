import type { EmploymentType } from "../types/Customer";

export const EMPLOYMENT_TYPE_OPTIONS: { value: EmploymentType; label: string }[] = [
  { value: "salaried", label: "Salaried" },
  { value: "self_employed", label: "Self-Employed" },
  { value: "business", label: "Business" },
];

//#for the dropdown