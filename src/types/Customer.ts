export type EmploymentType = "salaried" | "self_employed" | "business";

export type Customer = {
  name: string;
  contactNumber: string;
  email: string;
  age: string;
  dob: string;
  employmentType: EmploymentType | "";
  employer: string;
  netMonthlyIncome: string;
  annualGrossIncome: string;
  cibilScore: string;
  panNumber: string;
  aadharNumber: string;
};

//#some types are string for now because they will be converted to number during API integration to avoid any bugs
