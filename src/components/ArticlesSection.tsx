import { BlogSection } from "@/components/ui/blog-section";

const upscArticles = [
  {
    title: "Mastering UPSC with AI: A Modern Approach to Civil Services",
    slug: "/articles/upsc-ai-modern-approach",
    description:
      "Discover how artificial intelligence tools can enhance your UPSC preparation, from smart note-taking to personalized study plans.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=640&h=360&fit=crop",
    createdAt: "Dec 15, 2024",
    author: "Dr. Anbu Arumugam",
    readTime: "8 min read",
  },
  {
    title: "Public Administration Optional: Complete Strategy Guide",
    slug: "/articles/public-administration-strategy",
    description:
      "A comprehensive roadmap to score 300+ in Public Administration optional with proven techniques and resources.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&h=360&fit=crop",
    createdAt: "Dec 10, 2024",
    author: "Dr. Anbu Arumugam",
    readTime: "12 min read",
  },
  {
    title: "Gender Equality in Indian Governance: UPSC Perspective",
    slug: "/articles/gender-equality-governance",
    description:
      "Understanding the evolution of gender policies in India and how to approach related questions in UPSC mains.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=640&h=360&fit=crop",
    createdAt: "Dec 5, 2024",
    author: "Dr. Anbu Arumugam",
    readTime: "10 min read",
  },
  {
    title: "Current Affairs Strategy: Daily, Weekly, and Monthly Revision",
    slug: "/articles/current-affairs-strategy",
    description:
      "Build an effective current affairs routine that covers all aspects of UPSC prelims and mains without overwhelming yourself.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=640&h=360&fit=crop",
    createdAt: "Nov 28, 2024",
    author: "Dr. Anbu Arumugam",
    readTime: "7 min read",
  },
  {
    title: "Sustainable Development Goals: A UPSC Essential",
    slug: "/articles/sdgs-upsc-guide",
    description:
      "Complete guide to understanding and answering questions on SDGs, climate change, and environmental governance.",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=640&h=360&fit=crop",
    createdAt: "Nov 20, 2024",
    author: "Dr. Anbu Arumugam",
    readTime: "9 min read",
  },
  {
    title: "Interview Preparation: From DAF to Final Day",
    slug: "/articles/upsc-interview-guide",
    description:
      "Master the UPSC personality test with strategic DAF preparation, mock interviews, and confidence-building techniques.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=640&h=360&fit=crop",
    createdAt: "Nov 15, 2024",
    author: "Dr. Anbu Arumugam",
    readTime: "11 min read",
  },
];

const ArticlesSection = () => {
  return (
    <div className="relative">
      <BlogSection
        blogs={upscArticles}
        title="Latest Articles"
        subtitle="Expert insights on UPSC preparation, public administration, and civil services success strategies."
      />
    </div>
  );
};

export default ArticlesSection;
