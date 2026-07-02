import { useState } from "react";
import Navbar from "./components/Navbar";
import CustomerForm from "./components/CustomerForm";
import LoanForm from "./components/LoanForm";
import type { Customer } from "./types/Customer";
import type { Loan } from "./types/Loan";
import "./App.css";

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

const initialLoan: Loan = {
  loanType: "",
  amount: "",
  propertyValue: "",
};

function App() {
  const [customer, setCustomer] = useState<Customer>(initialCustomer);
  const [loan, setLoan] = useState<Loan>(initialLoan);

  function handleCustomerChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  }

  function handleLoanChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setLoan((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit() {
    console.log("Customer:", customer);
    console.log("Loan:", loan);
  }

  return (
    <>
      <Navbar />
      <main className="app__main">
        <CustomerForm
          customer={customer}
          onChange={handleCustomerChange}
        />
        <LoanForm
          loan={loan}
          onChange={handleLoanChange}
        />
        <button
          className="app__submit"
          onClick={handleSubmit}
        >
          Get Recommendations
        </button>
      </main>
    </>
  );
}

export default App;

//#initialCustomer and initialLoan moved here from the form components. 
// Since App.tsx now owns the state, it also owns the initial values. The form components no longer need them.
//The Submit button lives in App.tsx, not inside either form. This is important. 
// The button's job is to submit both forms' data together — so it belongs to the component that owns both, which is App.tsx.
//  If it lived inside CustomerForm, it would have no access to loan data. 
// If it lived inside LoanForm, it would have no access to customer data.