import Navbar from "./components/Navbar";
import CustomerForm from "./components/CustomerForm";
import LoanForm from "./components/LoanForm";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="app__main">
        <CustomerForm />
        <LoanForm />
      </main>
    </>
  );
}

export default App;