import { Link } from "react-router-dom";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
}

const BlogCard = ({ slug, title, excerpt, date, readTime, image }: BlogCardProps) => {
  return (
    <article className="group bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center text-content-muted font-ui text-sm mb-3 space-x-2">
          <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</time>
          <span>·</span>
          <span>{readTime}</span>
        </div>
        
        <h2 className="font-heading font-semibold text-xl text-content-primary mb-3 group-hover:text-content-secondary transition-colors duration-200">
          <Link to={`/post/${slug}`} className="before:absolute before:inset-0">
            {title}
          </Link>
        </h2>
        
        <p className="font-body text-content-secondary leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>
    </article>
  );
};

export default BlogCard;