import type { CustomerFormProps } from "../types/Customer";
import { EMPLOYMENT_TYPE_OPTIONS } from "../constants/CustomerFormConst";
import "./CustomerForm.css";

function CustomerForm({ customer, onChange }: CustomerFormProps) {
  return (
    <div className="customer-form">
      <h2 className="customer-form__title">Customer Details</h2>

      <div className="customer-form__grid">
        <label className="customer-form__field">
          Full Name
          <input
            type="text"
            name="name"
            value={customer.name}
            onChange={onChange}
          />
        </label>

        <label className="customer-form__field">
          Contact Number
          <input
            type="tel"
            name="contactNumber"
            value={customer.contactNumber}
            onChange={onChange}
          />
        </label>

        <label className="customer-form__field">
          Email
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={onChange}
          />
        </label>

        <label className="customer-form__field">
          Age
          <input
            type="number"
            name="age"
            value={customer.age}
            onChange={onChange}
          />
        </label>

        <label className="customer-form__field">
          Date of Birth
          <input
            type="date"
            name="dob"
            value={customer.dob}
            onChange={onChange}
          />
        </label>

        <label className="customer-form__field">
          Employment Type
          <select
            name="employmentType"
            value={customer.employmentType}
            onChange={onChange}
          >
            <option value="">Select...</option>
            {EMPLOYMENT_TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="customer-form__field">
          Employer Name
          <input
            type="text"
            name="employer"
            value={customer.employer}
            onChange={onChange}
          />
        </label>

        <label className="customer-form__field">
          Net Monthly Income (₹)
          <input
            type="number"
            name="netMonthlyIncome"
            value={customer.netMonthlyIncome}
            onChange={onChange}
          />
        </label>

        <label className="customer-form__field">
          Annual Gross Income (₹)
          <input
            type="number"
            name="annualGrossIncome"
            value={customer.annualGrossIncome}
            onChange={onChange}
          />
        </label>

        <label className="customer-form__field">
          CIBIL Score
          <input
            type="number"
            name="cibilScore"
            value={customer.cibilScore}
            onChange={onChange}
          />
        </label>

        <label className="customer-form__field">
          PAN Number
          <input
            type="text"
            name="panNumber"
            value={customer.panNumber}
            onChange={onChange}
          />
        </label>

        <label className="customer-form__field">
          Aadhaar Number
          <input
            type="text"
            name="aadharNumber"
            value={customer.aadharNumber}
            onChange={onChange}
          />
        </label>
      </div>
    </div>
  );
}

export default CustomerForm;

//#The component is now purely a display component that receives everything it needs from its parent. 
// This is called a controlled component driven by props — the component has no memory of its own.

//12 fields of one repeated pattern, 
// 1) every name attribute matches a key on the customer type
// 2) type also varies per field, they just change which keyboard is displayed
// 3) employmentType is a select instead of an input.