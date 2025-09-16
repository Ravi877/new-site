const Footer = () => {
  const footerButtons = [
    { label: "Docs", href: "https://docs.mydomain.com" },
    { label: "Shop", href: "https://shop.mydomain.com" },
    { label: "Tools", href: "https://tools.mydomain.com" },
  ];

  return (
    <footer className="mt-20 py-12 bg-accent-primary">
      <div className="container mx-auto px-6">
        <div className="flex justify-center space-x-6">
          {footerButtons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-background text-content-primary font-ui font-medium rounded-xl shadow-button hover:shadow-md hover:bg-accent-hover transition-all duration-200 border border-card-border"
            >
              {button.label}
            </a>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-content-muted font-ui text-sm">
            © 2024 Modern Blog. Crafted with care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;