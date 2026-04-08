import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-20 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the blog post you're looking for. It might have been
            removed or the URL might be incorrect.
          </p>
          <Link href="/blog">
            <button className="gradient-bg text-primary-foreground px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
