import type { LoanType } from "../types/Loan";

export const LOAN_TYPE_OPTIONS: { value: LoanType; label: string }[] = [
  { value: "home", label: "Home Loan" },
  { value: "lap", label: "Loan Against Property (LAP)" },
  { value: "personal", label: "Personal Loan" },
];

export const PROPERTY_LOAN_TYPES: LoanType[] = ["home", "lap"];