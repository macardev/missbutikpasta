import ReviewCard from "@/components/ReviewCard";
import type { Review } from "@/lib/reviews";

export default function CommentStrip({
  review,
  bgLight,
}: {
  review: Review;
  bgLight?: boolean;
}) {
  return (
    <div className={`py-10 sm:py-14 ${bgLight ? "bg-light-pink/30" : "bg-cream"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReviewCard review={review} className="max-w-2xl mx-auto animate-fade-in-up" />
      </div>
    </div>
  );
}
