import { useState } from "react";
import type { Loan, LoanType } from "../types/Loan";
import { LOAN_TYPE_OPTIONS, PROPERTY_LOAN_TYPES } from "../constants/LoanFormConst";
import "./LoanForm.css";

const initialLoan: Loan = {
  loanType: "",
  amount: "",
  propertyValue: "",
};

function LoanForm() {
  const [loan, setLoan] = useState<Loan>(initialLoan);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setLoan((prev) => ({ ...prev, [name]: value }));
  }

  const requiresPropertyValue =
    loan.loanType !== "" &&
    PROPERTY_LOAN_TYPES.includes(loan.loanType as LoanType);

  return (
    <div className="loan-form">
      <h2 className="loan-form__title">Loan Requirements</h2>

      <div className="loan-form__grid">
        <label className="loan-form__field">
          Loan Type
          <select
            name="loanType"
            value={loan.loanType}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            {LOAN_TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="loan-form__field">
          Loan Amount (₹)
          <input
            type="number"
            name="amount"
            value={loan.amount}
            onChange={handleChange}
          />
        </label>

        {requiresPropertyValue && (
          <label className="loan-form__field">
            Property Value (₹)
            <input
              type="number"
              name="propertyValue"
              value={loan.propertyValue}
              onChange={handleChange}
            />
          </label>
        )}
      </div>
    </div>
  );
}

export default LoanForm;

//#