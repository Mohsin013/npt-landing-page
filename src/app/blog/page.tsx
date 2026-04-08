import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { blogPosts, getFeaturedBlogPosts, getAllCategories, getAllTags } from '@/lib/blog-data';
import OptimizedImage from '@/components/OptimizedImage';
import { generateMetadata } from '@/components/SeoMeta';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = generateMetadata({
  title: 'Blog | MVP Development Insights & Startup Resources',
  description: 'Expert insights on MVP development, startup strategies, and product building. Learn how to build your startup idea without technical skills from NorthPeak Technologies experts.',
  keywords: [
    'MVP development blog',
    'startup blog',
    'how to build MVP',
    'startup resources',
    'product development tips',
    'non-technical founders guide',
    'MVP strategies',
    'startup advice',
  ],
  canonical: 'https://northpeaktechnologies.com/blog',
});

export default function BlogPage() {
  const featuredPosts = getFeaturedBlogPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <>
      {/* Structured Data for SEO */}
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://northpeaktechnologies.com' },
          { name: 'Blog', url: 'https://northpeaktechnologies.com/blog' },
        ]}
      />

      <main className="min-h-screen pt-20">
        {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights for <span className="gradient-text">Startup Founders</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Expert advice, tips, and strategies on building your MVP, launching your startup, and succeeding as a non-technical founder.
            </p>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/blog?category=${encodeURIComponent(category)}`}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-2xl">⭐</span>
              <h2 className="text-2xl font-bold">Featured Posts</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">Popular Topics</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm"
              >
                <Tag className="inline w-4 h-4 mr-1" />
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="gradient-border rounded-3xl p-12 text-center bg-primary/5">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Build Your MVP?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get expert guidance on transforming your startup idea into a market-ready product in just 4 weeks.
            </p>
            <Link href="/contact">
              <button className="gradient-bg text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
      </main>
    </>
  );
}

function BlogCard({ post, featured = false }: { post: any; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className={`group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg ${featured ? 'md:col-span-2 lg:col-span-1' : ''}`}>
        {post.coverImage && (
          <div className="aspect-video relative overflow-hidden">
            <OptimizedImage
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority={featured}
            />
            {featured && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  Featured
                </span>
              </div>
            )}
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishDate}>
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:gradient-text transition-all">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {post.category}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      </article>
    </Link>
  );
}
