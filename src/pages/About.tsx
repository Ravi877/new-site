import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-content mx-auto">
          <header className="mb-12 text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-content-primary mb-6">
              About Modern Blog
            </h1>
            <p className="font-body text-lg text-content-secondary leading-relaxed">
              A space for thoughtful writing about design, technology, and the modern digital experience.
            </p>
          </header>

          <div className="prose prose-lg mx-auto">
            <section className="mb-12">
              <h2 className="font-heading font-semibold text-2xl text-content-primary mb-4">
                Our Mission
              </h2>
              <p className="font-body text-content-secondary leading-relaxed mb-6">
                Modern Blog exists to explore the intersection of design, technology, and human experience. 
                We believe that thoughtful writing and beautiful design can make complex topics accessible 
                and inspire meaningful conversations.
              </p>
              <p className="font-body text-content-secondary leading-relaxed">
                In a world of endless content, we focus on quality over quantity, crafting articles that 
                provide genuine value and insight rather than chasing trends or clicks.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-semibold text-2xl text-content-primary mb-4">
                What We Write About
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-accent-primary rounded-lg border border-card-border">
                  <h3 className="font-heading font-medium text-lg text-content-primary mb-3">
                    Design & UX
                  </h3>
                  <p className="font-body text-content-secondary">
                    Exploring principles of good design, user experience insights, and the psychology 
                    behind effective interfaces.
                  </p>
                </div>
                <div className="p-6 bg-accent-primary rounded-lg border border-card-border">
                  <h3 className="font-heading font-medium text-lg text-content-primary mb-3">
                    Technology Trends
                  </h3>
                  <p className="font-body text-content-secondary">
                    Analyzing emerging technologies, development practices, and the future of 
                    digital experiences.
                  </p>
                </div>
                <div className="p-6 bg-accent-primary rounded-lg border border-card-border">
                  <h3 className="font-heading font-medium text-lg text-content-primary mb-3">
                    Productivity & Work
                  </h3>
                  <p className="font-body text-content-secondary">
                    Practical advice for remote work, time management, and building sustainable 
                    work practices.
                  </p>
                </div>
                <div className="p-6 bg-accent-primary rounded-lg border border-card-border">
                  <h3 className="font-heading font-medium text-lg text-content-primary mb-3">
                    Digital Culture
                  </h3>
                  <p className="font-body text-content-secondary">
                    Reflecting on how technology shapes our lives, relationships, and society 
                    in the digital age.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="font-heading font-semibold text-2xl text-content-primary mb-4">
                Our Approach
              </h2>
              <p className="font-body text-content-secondary leading-relaxed mb-6">
                Every article is crafted with intention. We take time to research thoroughly, 
                think deeply, and present ideas in a clear, accessible way. Our writing style 
                balances professional insights with approachable language.
              </p>
              <p className="font-body text-content-secondary leading-relaxed">
                We believe in the power of good design to enhance readability and comprehension. 
                That's why this blog itself serves as an example of the design principles we write about.
              </p>
            </section>

            <section className="text-center">
              <h2 className="font-heading font-semibold text-2xl text-content-primary mb-4">
                Stay Connected
              </h2>
              <p className="font-body text-content-secondary leading-relaxed">
                Thank you for reading. We hope our articles provide value and inspiration for your 
                own work and projects. Feel free to reach out with feedback, questions, or suggestions 
                for future topics.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;