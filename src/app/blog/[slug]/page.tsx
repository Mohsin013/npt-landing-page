import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, Share2, Bookmark } from 'lucide-react';
import { getBlogPostBySlug, blogPosts } from '@/lib/blog-data';
import OptimizedImage from '@/components/OptimizedImage';
import { ArticleSchema, BreadcrumbSchema } from '@/components/StructuredData';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const seoTitle = post.seo?.title || post.title;
  const seoDescription = post.seo?.description || post.excerpt;
  const seoKeywords = post.seo?.keywords || post.tags;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author.name],
      url: `https://northpeaktechnologies.com/blog/${post.slug}`,
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    alternates: {
      canonical: `https://northpeaktechnologies.com/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Get table of contents from headings
  const headings = post.content
    .split('\n')
    .filter((line) => line.startsWith('##'))
    .map((line) => {
      const text = line.replace('##', '').trim();
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return { text, id, level: 2 };
    });

  return (
    <>
      {/* Structured Data for SEO */}
      <ArticleSchema
        title={post.title}
        description={post.seo?.description || post.excerpt}
        author={post.author}
        publishDate={post.publishDate}
        image={post.coverImage}
        url={`https://northpeaktechnologies.com/blog/${post.slug}`}
        category={post.category}
        readTime={post.readTime}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://northpeaktechnologies.com' },
          { name: 'Blog', url: 'https://northpeaktechnologies.com/blog' },
          { name: post.title, url: `https://northpeaktechnologies.com/blog/${post.slug}` },
        ]}
      />

      <main className="min-h-screen pt-20">
        {/* Article Header */}
        <article>
        <header className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="max-w-4xl mx-auto">
              {/* Category & Date */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishDate}>
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="max-w-6xl mx-auto px-2 mb-12">
            <div className="aspect-[2/1] relative rounded-2xl overflow-hidden">
              <OptimizedImage
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Table of Contents - Desktop */}
              {headings.length > 0 && (
                <aside className="hidden lg:block sticky top-24 h-fit">
                  <nav className="space-y-2">
                    <h3 className="font-semibold text-foreground mb-4">Table of Contents</h3>
                    <ul className="space-y-2 text-sm">
                      {headings.map((heading) => (
                        <li key={heading.id}>
                          <a
                            href={`#${heading.id}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {heading.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </aside>
              )}

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <BlogContent content={post.content} />
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors text-sm"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Share & Save */}
                <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors text-sm">
                    <Bookmark className="w-4 h-4" />
                    Save
                  </button>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-6 rounded-2xl bg-muted/30">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary">
                        {post.author.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg mb-1">
                        {post.author.name}
                      </h3>
                      <p className="text-muted-foreground mb-3">{post.author.role}</p>
                      <p className="text-sm text-muted-foreground">
                        NorthPeak Technologies helps non-technical founders build their MVPs
                        in just 4 weeks. We're your technical co-founder, guiding you from
                        idea to launch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <article className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg">
                    {relatedPost.coverImage && (
                      <div className="aspect-video relative">
                        <OptimizedImage
                          src={relatedPost.coverImage}
                          alt={relatedPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:gradient-text transition-all">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{relatedPost.readTime}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

// Custom component to render Markdown content with proper heading IDs
function BlogContent({ content }: { content: string }) {
  const lines = content.split('\n');
  let html = '';
  let inCodeBlock = false;
  let codeBlockContent = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        html += `<pre class="bg-muted p-4 rounded-lg overflow-x-auto my-4"><code>${codeBlockContent}</code></pre>`;
        codeBlockContent = '';
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent += line + '\n';
      continue;
    }

    // Headings
    if (line.startsWith('### ')) {
      const text = line.replace('### ', '').trim();
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      html += `<h3 id="${id}" class="text-2xl font-bold mt-8 mb-4 text-foreground">${text}</h3>`;
    } else if (line.startsWith('## ')) {
      const text = line.replace('## ', '').trim();
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      html += `<h2 id="${id}" class="text-3xl font-bold mt-10 mb-6 text-foreground">${text}</h2>`;
    } else if (line.startsWith('# ')) {
      const text = line.replace('# ', '').trim();
      html += `<h1 class="text-4xl font-bold mt-8 mb-6 text-foreground">${text}</h1>`;
    }
    // Bold
    else if (line.includes('**')) {
      html += `<p class="my-4">${line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`;
    }
    // Italic
    else if (line.includes('*')) {
      html += `<p class="my-4">${line.replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>`;
    }
    // Lists
    else if (line.startsWith('- ')) {
      html += `<li class="my-2 ml-6 list-disc">${line.replace('- ', '')}</li>`;
    } else if (line.match(/^\d+\. /)) {
      html += `<li class="my-2 ml-6 list-decimal">${line.replace(/^\d+\. /, '')}</li>`;
    }
    // Blockquotes
    else if (line.startsWith('> ')) {
      html += `<blockquote class="border-l-4 border-primary pl-4 my-4 italic text-muted-foreground">${line.replace('> ', '')}</blockquote>`;
    }
    // Horizontal rule
    else if (line === '---') {
      html += `<hr class="my-8 border-border" />`;
    }
    // Regular paragraph
    else if (line.trim()) {
      // Check for inline code
      const processedLine = line.replace(/`([^`]+)`/g, '<code class="bg-muted px-2 py-1 rounded text-sm">$1</code>');
      html += `<p class="my-4 leading-relaxed">${processedLine}</p>`;
    }
  }

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
