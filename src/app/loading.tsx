/**
 * Page Loading Component
 *
 * Shows a loading skeleton while the page is being generated on the server.
 * This improves perceived performance and prevents layout shifts.
 */

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        {/* Logo placeholder */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          <div className="absolute inset-2 rounded-full bg-primary/30" />
        </div>

        {/* Loading text */}
        <div className="space-y-2 text-center">
          <div className="h-4 w-32 bg-muted rounded animate-pulse mx-auto" />
          <div className="h-3 w-24 bg-muted/50 rounded animate-pulse mx-auto" />
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
