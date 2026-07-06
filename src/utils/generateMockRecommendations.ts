import type { Customer } from "../types/Customer";
import type { Loan } from "../types/Loan";
import type { Recommendation } from "../types/Recommendation";
import { MOCK_BANK_OFFERS } from "../constants/RecommendationConst";

// Stands in for the bharat-bankers-engine ranking API until Part 2 (API
// Integration / FastAPI) is wired up. Mirrors src/ranking/ranking_engine.py's
// rank_policies: filter to the requested loan type, resolve each offer's rate
// for the customer's employment segment, then sort cheapest-rate-first with
// bank_id as the tie-break. Replace the body of this function with the real
// API call later — callers won't need to change.
export function generateMockRecommendations(
  customer: Customer,
  loan: Loan
): Recommendation[] {
  if (loan.loanType === "") return [];

  const segment = customer.employmentType || "default";

  const scored = MOCK_BANK_OFFERS.filter(
    (offer) => offer.loanType === loan.loanType
  )
    .map((offer) => ({
      offer,
      rate: offer.ratesBySegment[segment] ?? offer.ratesBySegment.default ?? null,
    }))
    .filter((entry): entry is { offer: typeof entry.offer; rate: number } =>
      entry.rate !== null
    );

  scored.sort(
    (a, b) => a.rate - b.rate || a.offer.bankId.localeCompare(b.offer.bankId)
  );

  return scored.map(({ offer, rate }, index) => ({
    rank: index + 1,
    bankId: offer.bankId,
    bankName: offer.bankName,
    loanType: offer.loanType,
    employmentSegment: segment,
    estimatedInterestRate: rate,
  }));
}
