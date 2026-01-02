import { ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  id: string;
  title: string;
  category: string;
  date: string;
  image?: string;
  size?: "small" | "large";
}

const ArticleCard = ({ id, title, category, date, image, size = "small" }: ArticleCardProps) => {
  const getCategoryClass = (cat: string) => {
    const normalized = cat.toLowerCase();
    if (normalized.includes("financ")) return "tag-financing";
    if (normalized.includes("lifestyle")) return "tag-lifestyle";
    if (normalized.includes("community")) return "tag-community";
    if (normalized.includes("wellness")) return "tag-wellness";
    if (normalized.includes("travel")) return "tag-travel";
    if (normalized.includes("creativ")) return "tag-creativity";
    if (normalized.includes("growth")) return "tag-growth";
    return "tag-lifestyle";
  };

  const hasImage = image && image.trim() !== '';

  return (
    <a
      href={`/article/${id}`}
      className={`group relative block rounded-[2.5rem] overflow-hidden card-hover ${
        size === "large" ? "col-span-1 md:col-span-2 row-span-2" : ""
      }`}
    >
      <div className={`relative aspect-[4/3] overflow-hidden rounded-[2.5rem] ${hasImage ? 'bg-muted' : 'bg-gradient-to-br from-primary/20 via-accent/20 to-secondary'}`}>
        {/* Image - only show if provided */}
        {hasImage && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        
        {/* Overlay gradient */}
        <div className={`absolute inset-0 ${hasImage ? 'bg-gradient-to-t from-black/70 via-black/30 to-transparent' : 'bg-gradient-to-t from-black/50 via-transparent to-transparent'}`} />
        
        {/* Content overlay */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          {/* Top section - Category and Date */}
          <div className="flex items-start justify-between">
            <span className={`px-4 py-1.5 rounded-full text-xs font-medium backdrop-blur-md ${getCategoryClass(category)} bg-opacity-80`}>
              {category}
            </span>
            <span className={`px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-medium border ${hasImage ? 'bg-white/20 text-white border-white/30' : 'bg-background/50 text-foreground border-border/50'}`}>
              {date}
            </span>
          </div>

          {/* Bottom section - Title and Arrow */}
          <div className="flex items-end justify-between gap-4">
            <div className="flex-1">
              <span className={`text-xs font-medium tracking-wider block mb-3 ${hasImage ? 'text-white/50' : 'text-muted-foreground'}`}>{id}</span>
              <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight ${hasImage ? 'text-white' : 'text-foreground'}`}>
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Floating circular arrow button */}
        <div className="absolute bottom-6 right-6 floating-button">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
