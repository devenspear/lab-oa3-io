"use client";

import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web3 Marketing: AI-Driven Strategies",
    excerpt: "Exploring how artificial intelligence is revolutionizing blockchain-based marketing campaigns and customer engagement.",
    date: "January 24, 2025",
    readTime: "5 min read",
    category: "Web3 Marketing",
    slug: "web3-marketing-ai-strategies"
  },
  {
    id: 2,
    title: "Building Decentralized Apps with Modern AI Integration",
    excerpt: "A comprehensive guide to integrating AI capabilities into your decentralized applications for enhanced user experiences.",
    date: "January 20, 2025",
    readTime: "8 min read",
    category: "Development",
    slug: "decentralized-apps-ai-integration"
  },
  {
    id: 3,
    title: "Smart Contracts Meet Machine Learning: Use Cases & Examples",
    excerpt: "Discover real-world applications where smart contracts and machine learning algorithms work together to solve complex problems.",
    date: "January 18, 2025",
    readTime: "6 min read",
    category: "Blockchain",
    slug: "smart-contracts-machine-learning"
  },
  {
    id: 4,
    title: "Mobile-First Web3: Designing for the Next Generation",
    excerpt: "How to create mobile-first experiences that bridge traditional app development with decentralized technologies.",
    date: "January 15, 2025",
    readTime: "7 min read",
    category: "Mobile",
    slug: "mobile-first-web3-design"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#12e732' }}>
            OA3 Lab Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Expert insights on Web3 blockchain technology, AI development, 
            and the future of decentralized applications
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors border border-gray-700 hover:border-gray-600"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-blue-400 font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-gray-400">
                  {post.readTime}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 text-white hover:text-green-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {post.date}
                </span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-sm text-green-400 hover:text-green-300 font-medium transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gray-800 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#12e732' }}>
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Get the latest insights on Web3 technology, AI development, and blockchain innovation 
            delivered directly to your inbox.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </div>
  );
} 