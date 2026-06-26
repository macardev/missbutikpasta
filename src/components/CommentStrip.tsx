export default function CommentStrip({
  name,
  text,
  bgLight,
}: {
  name: string;
  text: string;
  bgLight?: boolean;
}) {
  return (
    <div className={`py-10 sm:py-14 ${bgLight ? "bg-light-pink/30" : "bg-cream"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4 sm:gap-6 max-w-3xl mx-auto">
          <span className="text-pink/20 text-5xl sm:text-6xl leading-none font-playfair select-none shrink-0">
            &ldquo;
          </span>
          <div>
            <p className="text-dark/80 font-inter text-sm sm:text-base leading-relaxed italic">
              {text}
            </p>
            <p className="mt-3 font-inter font-semibold text-dark text-sm">
              — {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
