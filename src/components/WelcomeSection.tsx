const WelcomeSection = () => {
  return (
    <section className="py-16 border-t border-border animate-fade-in">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column - About */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            With over a decade of experience in UPSC coaching and career guidance, I have mentored hundreds of aspirants 
            toward achieving their civil service goals. My approach combines strategic preparation with personalized 
            mentorship to help you navigate the complexities of the examination.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As an author and public speaker, I share insights on effective study techniques, current affairs analysis, 
            and interview preparation to ensure comprehensive support throughout your journey.
          </p>
        </div>

        {/* Right Column - Focus Areas */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Focus Areas
          </h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
              <span>UPSC Civil Services Examination preparation and strategy</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
              <span>Career guidance for government and public sector opportunities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
              <span>Interview preparation and personality development</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
              <span>Current affairs analysis and answer writing techniques</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
