import type { Customer } from "../types/Customer";
import type { Loan } from "../types/Loan";
import type { Recommendation } from "../types/Recommendation";

const API_BASE_URL = "http://localhost:8000";

// Shape returned by src/api/mainapi.py's RecommendationOut model (snake_case,
// matching Python convention). Converted to our camelCase Recommendation
// type below so the rest of the frontend never has to think about it.
type RecommendationApiResponse = {
  rank: number;
  bank_id: string;
  bank_name: string;
  loan_type: string;
  employment_segment: string;
  estimated_interest_rate: number | null;
};

export async function fetchRecommendations(
  customer: Customer,
  loan: Loan
): Promise<Recommendation[]> {
  const response = await fetch(`${API_BASE_URL}/recommendations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      customer: {
        name: customer.name,
        contact_number: customer.contactNumber,
        email: customer.email,
        age: Number(customer.age),
        dob: customer.dob,
        employment_type: customer.employmentType,
        employer: customer.employer,
        net_monthly_income: Number(customer.netMonthlyIncome),
        annual_gross_income: Number(customer.annualGrossIncome),
        cibil_score: Number(customer.cibilScore),
        pan_number: customer.panNumber,
        aadhar_number: customer.aadharNumber,
      },
      loan: {
        loan_type: loan.loanType,
        amount: Number(loan.amount),
        tenure_requested_months: Number(loan.tenureMonths),
        property_value:
          loan.propertyValue !== "" ? Number(loan.propertyValue) : null,
      },
    }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    const message = Array.isArray(body?.detail)
      ? body.detail.join(" ")
      : (body?.detail ?? `Request failed with status ${response.status}`);
    throw new Error(message);
  }

  const data: RecommendationApiResponse[] = await response.json();

  return data.map((item) => ({
    rank: item.rank,
    bankId: item.bank_id,
    bankName: item.bank_name,
    loanType: item.loan_type,
    employmentSegment: item.employment_segment,
    estimatedInterestRate: item.estimated_interest_rate,
  }));
}

//#contains fetchRecommendations function which is used in App.tsx

