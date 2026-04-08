import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-6">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">
          Oops! Page not found
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full gradient-bg px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
