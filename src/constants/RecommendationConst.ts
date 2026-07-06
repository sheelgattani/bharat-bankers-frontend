import type { LoanType } from "../types/Loan";
import type { EmploymentType } from "../types/Customer";

export type MockBankOffer = {
  bankId: string;
  bankName: string;
  loanType: LoanType;
  ratesBySegment: Partial<Record<EmploymentType | "default", number>>;
};

// Rates mirror data/banks/bank_loan_data.json in the bharat-bankers-engine
// repo (home loan segments are real; lap/personal aren't modelled there yet,
// so those rows are illustrative placeholders).
export const MOCK_BANK_OFFERS: MockBankOffer[] = [
  {
    bankId: "icici",
    bankName: "ICICI Bank",
    loanType: "home",
    ratesBySegment: { salaried: 8.75, self_employed: 9.0 },
  },
  {
    bankId: "hdfc",
    bankName: "HDFC Bank",
    loanType: "home",
    ratesBySegment: { default: 8.55 },
  },
  {
    bankId: "kotak",
    bankName: "Kotak Mahindra Bank",
    loanType: "home",
    ratesBySegment: { salaried: 8.65, self_employed: 8.9 },
  },
  {
    bankId: "axis",
    bankName: "Axis Bank",
    loanType: "home",
    ratesBySegment: { salaried: 8.75, self_employed: 9.0 },
  },
  {
    bankId: "idfc",
    bankName: "IDFC First Bank",
    loanType: "home",
    ratesBySegment: { salaried: 8.6, self_employed: 8.85 },
  },
  {
    bankId: "icici",
    bankName: "ICICI Bank",
    loanType: "lap",
    ratesBySegment: { default: 9.8 },
  },
  {
    bankId: "hdfc",
    bankName: "HDFC Bank",
    loanType: "lap",
    ratesBySegment: { default: 9.5 },
  },
  {
    bankId: "hdfc",
    bankName: "HDFC Bank",
    loanType: "personal",
    ratesBySegment: { default: 11.25 },
  },
  {
    bankId: "axis",
    bankName: "Axis Bank",
    loanType: "personal",
    ratesBySegment: { default: 11.6 },
  },
];
