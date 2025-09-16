import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <article className="max-w-content mx-auto">
          <header className="mb-12">
            <div className="flex items-center text-content-muted font-ui text-sm mb-6 space-x-2">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-content-primary mb-6 leading-tight">
              {post.title}
            </h1>
            
            {post.tags && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-accent-primary text-content-secondary font-ui text-sm rounded-full border border-card-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <div 
              className="font-body text-content-primary leading-relaxed"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .split('\n')
                  .map(line => {
                    // Handle headers
                    if (line.startsWith('# ')) {
                      return `<h1 class="font-heading font-bold text-3xl text-content-primary mt-12 mb-6 first:mt-0">${line.slice(2)}</h1>`;
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 class="font-heading font-semibold text-2xl text-content-primary mt-10 mb-4">${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="font-heading font-medium text-xl text-content-primary mt-8 mb-3">${line.slice(4)}</h3>`;
                    }
                    
                    // Handle lists
                    if (line.startsWith('- ')) {
                      return `<li class="mb-2">${line.slice(2)}</li>`;
                    }
                    if (/^\d+\.\s/.test(line)) {
                      return `<li class="mb-2">${line.replace(/^\d+\.\s/, '')}</li>`;
                    }
                    
                    // Handle bold text
                    line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-content-primary">$1</strong>');
                    
                    // Handle empty lines
                    if (line.trim() === '') {
                      return '<br>';
                    }
                    
                    // Regular paragraphs
                    if (line.trim() && !line.startsWith('<')) {
                      return `<p class="mb-6 leading-relaxed">${line}</p>`;
                    }
                    
                    return line;
                  })
                  .join('')
                  // Wrap consecutive list items in ul/ol
                  .replace(/(<li[^>]*>.*?<\/li>(?:\s*<li[^>]*>.*?<\/li>)*)/gs, '<ul class="list-disc pl-6 mb-6 space-y-1">$1</ul>')
              }} 
            />
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;