import Header from "@/components/Header";
import WorldMap from "@/components/WorldMap";
import { GraduationCap, Award, BookOpen, Globe, Users, Building } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            About Dr. Anbu Arumugam
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Assistant Professor & Head of Department, Department of Public Administration
          </p>
          <p className="text-muted-foreground animate-slide-up stagger-2">
            Government Arts College for Men (Autonomous), Nandanam, Chennai-600035
          </p>
        </div>

        {/* Introduction Section */}
        <section className="mb-16 space-y-6 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-6">Professional Profile</h2>
          <p>
            Dr. Anbu Arumugam is a Senior Assistant Professor in the Department of Public Administration, 
            Annamalai University, India & currently posted as Head, Department of Public Administration, 
            Government Arts College, Nandanam, Chennai.
          </p>
          <p>
            With over <strong>18 years of teaching, research, and administrative experience</strong>, 
            her research areas include gender equality, social equity, sustainable development goals, 
            and school feeding programmes.
          </p>
        </section>

        {/* Academic Credentials */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Education
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <div className="border-l-2 border-primary pl-6 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground">University of Madras</h3>
                <p>Doctor of Philosophy (Ph.D.), Public Administration</p>
                <p className="text-sm">2011 - 2016</p>
                <p className="text-sm text-primary">Grade: Highly Commended</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">Annamalai University</h3>
                <p>Master of Philosophy (M.Phil.), Public Administration</p>
                <p className="text-sm">2004 - 2006</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">University Grants Commission (UGC)</h3>
                <p>National Eligibility Test (NET), Public Administration</p>
                <p className="text-sm">2006</p>
                <p className="text-sm text-primary">Grade: Ranked with Junior Research Fellowship</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">Anna Adarsh College For Women</h3>
                <p>Master's Degree, Public Administration</p>
                <p className="text-sm">2001 - 2003</p>
                <p className="text-sm text-primary">University of Madras Gold Medalist</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground">Ethiraj College For Women</h3>
                <p>Bachelor of Commerce (B.Com.), Business Administration and Management</p>
                <p className="text-sm">1998 - 2001</p>
              </div>
            </div>
          </div>
        </section>

        {/* International Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Globe className="h-8 w-8 text-primary" />
            International Experience
          </h2>
          <p className="text-muted-foreground mb-6">
            Dr. Arumugam has been invited to present her research across the globe:
          </p>
          <WorldMap />
        </section>

        {/* ASPA Contributions */}
        <section className="mb-16 rounded-2xl bg-muted p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            ASPA Contributions
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Active member of ASPA since 2014</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>ASPA Founders Fellow</strong> (2014)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Member of the PA Times Editorial Board (2015-2016)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span><strong>Two-time recipient of Chester A. Newland Presidential Citation of Merit</strong> (2017 & 2018)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Signatory for initiating ASPA's South Asian Section on Public Administration (SASPA) in 2015</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Appointed to International Chapter Development Taskforce (ICDT) by Dr. Susan Gooden (2017)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Organised the 6th Young Scholars Workshop (2017) in Chennai, India</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Part of ASPA-SWPA's Mentor-Mentee program since 2021</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-primary" />
            Publications
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-2">Books</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>"Gender Equality and Women in Indian Parliament" (2021)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>"Mid-Day Meal Scheme in Chennai City, Tamil Nadu – A Study" (2020)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>"An Introduction to the Noon Meal Scheme in Tamil Nadu" (2017)</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold mb-2">Book Chapters & Articles</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>"The State of Gender Equality in India and Impact of Mid-Day Meal Scheme" in Dr. Susan Gooden's "Global Equity in Administration: Nervous Areas of Governments" (2020)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>"Impact of COVID-19 on India's Mid-Day Meal Program" - ASPA-SICA Occasional Paper Series on Global Food Insecurity (August 2022)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Current Research */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Building className="h-8 w-8 text-primary" />
            Current Research
          </h2>
          <p className="text-muted-foreground">
            Currently working on a research project <strong>"Aspirational Districts Programme of India"</strong>, 
            funded by MGNCRE, Hyderabad, Ministry of Education, Government of India.
          </p>
        </section>

        {/* Affiliations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Professional Affiliations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">ASPA</h3>
              <p className="text-muted-foreground">
                American Society for Public Administration - Active Member since 2014
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">IIPA</h3>
              <p className="text-muted-foreground">
                Indian Institute of Public Administration, New Delhi - Life Member & Former EC Member, Tamil Nadu Chapter (2011-2015)
              </p>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <h2 className="text-3xl font-bold mb-6">Research Areas</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto px-4">
            {["Gender Equality", "Social Equity", "Sustainable Development Goals", "School Feeding Programmes", "Public Administration"].map((area) => (
              <span key={area} className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                {area}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
