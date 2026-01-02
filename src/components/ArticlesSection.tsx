import { useState, useEffect } from "react";
import { BlogSection } from "@/components/ui/blog-section";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface Article {
  id: string;
  title: string;
  subtitle: string | null;
  content: string | null;
  category: string;
  image_url: string | null;
  author_name: string | null;
  read_time: string | null;
  created_at: string;
  published: boolean | null;
}

const ArticlesSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (error) {
        if (import.meta.env.DEV) {
          console.error("Error fetching articles:", error);
        }
      } else {
        setArticles(data || []);
      }
      setIsLoading(false);
    };

    fetchArticles();
  }, []);

  const blogs = articles.map((article) => ({
    title: article.title,
    slug: `/article/${article.id}`,
    description: article.subtitle || "",
    image: article.image_url || "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=640&h=360&fit=crop",
    createdAt: format(new Date(article.created_at), "MMM d, yyyy"),
    author: article.author_name || "Dr. Anbu",
    readTime: article.read_time || "5 min read",
  }));

  if (isLoading) {
    return (
      <div className="pt-4 pb-16 text-center">
        <p className="text-muted-foreground">Loading articles...</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="pt-4 pb-16 text-center">
        <p className="text-muted-foreground">No articles available yet.</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <BlogSection
        blogs={blogs}
        title="Latest Articles"
        subtitle="Expert insights on UPSC preparation, public administration, and civil services success strategies."
      />
    </div>
  );
};

export default ArticlesSection;
