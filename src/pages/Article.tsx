import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import { supabase } from "@/integrations/supabase/client";
import { Facebook, Twitter, Linkedin, Link2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { format } from "date-fns";
import DOMPurify from "dompurify";

interface Article {
  id: string;
  title: string;
  subtitle: string | null;
  content: string | null;
  category: string;
  image_url: string | null;
  author_name: string | null;
  author_avatar: string | null;
  author_bio: string | null;
  read_time: string | null;
  tags: string[] | null;
  created_at: string;
  published: boolean | null;
}

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) {
        setNotFound(true);
        setIsLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", id)
        .eq("published", true)
        .maybeSingle();

      if (error) {
        console.error("Error fetching article:", error);
        setNotFound(true);
      } else if (!data) {
        setNotFound(true);
      } else {
        setArticle(data);
      }
      setIsLoading(false);
    };

    fetchArticle();
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  const getCategoryClass = (cat: string) => {
    const normalized = cat.toLowerCase();
    if (normalized.includes("financ")) return "bg-emerald-500/20 text-emerald-400";
    if (normalized.includes("lifestyle")) return "bg-pink-500/20 text-pink-400";
    if (normalized.includes("upsc")) return "bg-blue-500/20 text-blue-400";
    if (normalized.includes("admin")) return "bg-purple-500/20 text-purple-400";
    return "bg-primary/20 text-primary";
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading article...</p>
      </div>
    );
  }

  if (notFound) {
    return <Navigate to="/404" replace />;
  }

  if (!article) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Back Navigation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <a
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to articles
          </a>
        </div>

        {/* Hero Image */}
        {article.image_url && (
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-12">
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        )}

        <article className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${article.image_url ? '-mt-32' : 'mt-4'} relative z-10`}>
          {/* Article Header */}
          <div className="mb-12 animate-slide-up">
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getCategoryClass(article.category)}`}>
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {format(new Date(article.created_at), "MMM d, yyyy")}
              </span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{article.read_time || "5 min"} read</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            
            {article.subtitle && (
              <p className="text-xl text-muted-foreground mb-8">
                {article.subtitle}
              </p>
            )}

            {/* Author Info */}
            <div className="flex items-center justify-between border-t border-b border-border py-6">
              <div className="flex items-center gap-4">
                {article.author_avatar && (
                  <img
                    src={article.author_avatar}
                    alt={article.author_name || "Author"}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold">{article.author_name || "Dr. Anbu"}</p>
                  {article.author_bio && (
                    <p className="text-sm text-muted-foreground">{article.author_bio}</p>
                  )}
                </div>
              </div>

              {/* Share Buttons */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                  aria-label="Copy link"
                >
                  <Link2 className="w-4 h-4" />
                </button>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16 animate-slide-up">
            {article.content && (
              <div 
                className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ 
                  __html: DOMPurify.sanitize(article.content.replace(/\n/g, '<br />')) 
                }}
              />
            )}
          </div>

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="mb-12 pb-12 border-b border-border">
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-sm bg-muted text-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Mobile Share Buttons */}
          <div className="md:hidden mb-12 pb-12 border-b border-border">
            <p className="text-sm font-semibold mb-4">Share this article</p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyLink}
                className="flex-1 py-3 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center gap-2"
              >
                <Link2 className="w-4 h-4" />
                <span className="text-sm">Copy link</span>
              </button>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="mb-16 rounded-2xl bg-card p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Enjoyed this article?</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to receive more insights like this directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ArticlePage;
