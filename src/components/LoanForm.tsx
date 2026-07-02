import type { Loan, LoanType, LoanFormProps } from "../types/Loan";
import { LOAN_TYPE_OPTIONS, PROPERTY_LOAN_TYPES } from "../constants/LoanFormConst";
import "./LoanForm.css";

function LoanForm({ loan, onChange }: LoanFormProps) {
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
            onChange={onChange}
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
            onChange={onChange}
          />
        </label>

        {requiresPropertyValue && (
          <label className="loan-form__field">
            Property Value (₹)
            <input
              type="number"
              name="propertyValue"
              value={loan.propertyValue}
              onChange={onChange}
            />
          </label>
        )}
      </div>
    </div>
  );
}

export default LoanForm;

//# LoanForm is now purely a display component driven by props from App.tsx