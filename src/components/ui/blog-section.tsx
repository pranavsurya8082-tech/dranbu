import React from 'react';
import { LazyImage } from './lazy-image';

interface Blog {
  title: string;
  slug: string;
  description: string;
  image: string;
  createdAt: string;
  author: string;
  readTime: string;
}

interface BlogSectionProps {
  blogs: Blog[];
  title?: string;
  subtitle?: string;
}

export function BlogSection({ 
  blogs, 
  title = "Latest Articles",
  subtitle = "Discover the latest trends and insights in the world of civil services preparation."
}: BlogSectionProps) {
  return (
    <section className="pt-4 pb-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl" />
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
          Articles
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {blogs.map((blog) => (
          <a
            key={blog.slug}
            href={blog.slug}
            className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <LazyImage
              src={blog.image}
              alt={blog.title}
              ratio={16 / 9}
              inView={true}
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <span className="font-medium">by {blog.author}</span>
                <span>•</span>
                <span>{blog.createdAt}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">
                {blog.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
