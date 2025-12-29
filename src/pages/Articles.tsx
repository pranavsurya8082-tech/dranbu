import Header from "@/components/Header";
import ArticlesSection from "@/components/ArticlesSection";

const Articles = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ArticlesSection />
      </main>
    </div>
  );
};

export default Articles;
