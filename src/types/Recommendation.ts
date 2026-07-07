export type Recommendation = {
  rank: number;
  bankId: string;
  bankName: string;
  loanType: string;
  employmentSegment: string;
  estimatedInterestRate: number | null;
};

//#rank is number because this data comes out of fetch()

export type RecommendationCardProps = {
  recommendation: Recommendation;
};

export type RecommendationListProps = {
  recommendations: Recommendation[] | null;
};

//#recommendations is null before the first submit (so we don't show an
// empty-state message before the customer has asked for anything), and an
// array (possibly empty) after — mirrors the engine's ranked-list output.
