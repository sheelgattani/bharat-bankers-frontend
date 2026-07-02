export type LoanType = "home" | "lap" | "personal";

export type Loan = {
  loanType: LoanType | "";
  amount: string;
  propertyValue: string;
};

//#Same reasoning as Customer.ts — amount and propertyValue are string because <input> always gives us strings, 
// and we convert to number only at API send time.

// New
export type LoanFormProps = {
  loan: Loan;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};