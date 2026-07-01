import { useState } from "react";
import type { Customer } from "../types/Customer";
import { EMPLOYMENT_TYPE_OPTIONS } from "../constants/CustomerFormConst";
import "./CustomerForm.css";

const initialCustomer: Customer = {
  name: "",
  contactNumber: "",
  email: "",
  age: "",
  dob: "",
  employmentType: "",
  employer: "",
  netMonthlyIncome: "",
  annualGrossIncome: "",
  cibilScore: "",
  panNumber: "",
  aadharNumber: "",
};

function CustomerForm() {
  const [customer, setCustomer] = useState<Customer>(initialCustomer);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  }

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
            onChange={handleChange}
          />
        </label>

        <label className="customer-form__field">
          Contact Number
          <input
            type="tel"
            name="contactNumber"
            value={customer.contactNumber}
            onChange={handleChange}
          />
        </label>

        <label className="customer-form__field">
          Email
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
          />
        </label>

        <label className="customer-form__field">
          Age
          <input
            type="number"
            name="age"
            value={customer.age}
            onChange={handleChange}
          />
        </label>

        <label className="customer-form__field">
          Date of Birth
          <input
            type="date"
            name="dob"
            value={customer.dob}
            onChange={handleChange}
          />
        </label>

        <label className="customer-form__field">
          Employment Type
          <select
            name="employmentType"
            value={customer.employmentType}
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </label>

        <label className="customer-form__field">
          Net Monthly Income (₹)
          <input
            type="number"
            name="netMonthlyIncome"
            value={customer.netMonthlyIncome}
            onChange={handleChange}
          />
        </label>

        <label className="customer-form__field">
          Annual Gross Income (₹)
          <input
            type="number"
            name="annualGrossIncome"
            value={customer.annualGrossIncome}
            onChange={handleChange}
          />
        </label>

        <label className="customer-form__field">
          CIBIL Score
          <input
            type="number"
            name="cibilScore"
            value={customer.cibilScore}
            onChange={handleChange}
          />
        </label>

        <label className="customer-form__field">
          PAN Number
          <input
            type="text"
            name="panNumber"
            value={customer.panNumber}
            onChange={handleChange}
          />
        </label>

        <label className="customer-form__field">
          Aadhaar Number
          <input
            type="text"
            name="aadharNumber"
            value={customer.aadharNumber}
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
}

export default CustomerForm;


//# Why every input has both value={customer.fieldName} and onChange={handleChange}? 
// This is called a controlled component — a core React concept. 
// The input's displayed value is driven by React state, not by the browser's own internal input memory. 
// When you type a letter, it doesn't appear because the browser remembers it — it appears because: you type → onChange fires → handleChange updates state → React re-renders the input with the new value. 
// This round-trip is what makes React "the source of truth" for form data, which matters a lot once we need to send this data to your backend or reset the form.