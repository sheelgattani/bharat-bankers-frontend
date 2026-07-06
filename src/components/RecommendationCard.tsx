import type { RecommendationCardProps } from "../types/Recommendation";
import "./RecommendationCard.css";

function RecommendationCard({ recommendation }: RecommendationCardProps) {
  const rateLabel =
    recommendation.estimatedInterestRate !== null
      ? `${recommendation.estimatedInterestRate.toFixed(2)}%`
      : "Rate unavailable";

  return (
    <div className="recommendation-card">
      <div className="recommendation-card__rank">#{recommendation.rank}</div>
      <div className="recommendation-card__body">
        <h3 className="recommendation-card__bank">{recommendation.bankName}</h3>
        <p className="recommendation-card__rate">{rateLabel}</p>
        <p className="recommendation-card__meta">
          {recommendation.loanType} · {recommendation.employmentSegment}
        </p>
      </div>
    </div>
  );
}

export default RecommendationCard;
