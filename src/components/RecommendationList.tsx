import RecommendationCard from "./RecommendationCard";
import type { RecommendationListProps } from "../types/Recommendation";
import "./RecommendationList.css";

function RecommendationList({ recommendations }: RecommendationListProps) {
  if (recommendations === null) return null;

  if (recommendations.length === 0) {
    return (
      <div className="recommendation-list recommendation-list--empty">
        No eligible banks found for the details provided.
      </div>
    );
  }

  return (
    <div className="recommendation-list">
      <h2 className="recommendation-list__title">Recommended Banks</h2>
      {recommendations.map((recommendation) => (
        <RecommendationCard
          key={recommendation.bankId}
          recommendation={recommendation}
        />
      ))}
    </div>
  );
}

export default RecommendationList;

//# returns the list of recommendation cards

