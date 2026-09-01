import type { CSSProperties } from "react";
import type { Review } from "@/lib/reviews";

export default function ReviewCard({
  review,
  className = "",
  style,
}: {
  review: Review;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <figure
      className={`bg-white rounded-2xl p-6 sm:p-8 border border-pink/10 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-full ${className}`}
      style={style}
    >
      <span
        aria-hidden="true"
        className="font-playfair text-5xl sm:text-6xl text-pink/25 leading-[0.5] select-none block mb-4"
      >
        &ldquo;
      </span>

      <blockquote className="flex-1">
        <p className="text-dark/80 font-inter text-sm sm:text-base leading-relaxed italic">
          {review.text}
        </p>
      </blockquote>

      <div className="mt-6 h-px bg-gradient-to-r from-pink/30 via-pink/10 to-transparent" />

      <figcaption className="mt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-pink/15 ring-1 ring-pink/20 flex items-center justify-center shrink-0">
          <span className="text-pink-dark font-playfair font-semibold text-sm">
            {review.name.charAt(0)}
          </span>
        </div>
        <div className="min-w-0">
          <p className="font-inter font-semibold text-dark text-sm truncate">
            {review.name}
          </p>
          <p className="font-inter text-xs text-dark/40">Google Yorumu</p>
        </div>
      </figcaption>
    </figure>
  );
}
