import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="font-heading font-bold text-5xl md:text-6xl text-content-primary mb-6 leading-tight">
            Modern Blog
          </h1>
          <p className="font-body text-xl md:text-2xl text-content-secondary max-w-2xl mx-auto leading-relaxed">
            Thoughtful writing about design, technology, and the intersection of digital experiences with human creativity.
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section>
          <h2 className="font-heading font-semibold text-3xl text-content-primary mb-8">
            Latest Articles
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                readTime={post.readTime}
                image={post.image}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
