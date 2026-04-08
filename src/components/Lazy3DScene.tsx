"use client";

import { Suspense, lazy, ComponentType, useEffect, useState } from 'react';

/**
 * Lazy 3D Scene Component with Performance Optimizations
 *
 * Features:
 * - Code splitting - 3D libraries only loaded when needed
 * - Device detection - Skip 3D on low-end devices
 * - Network awareness - Skip 3D on slow connections
 * - Fallback UI - Graceful degradation
 * - Loading skeleton
 */

interface Lazy3DSceneProps {
  /**
   * The 3D scene component to lazy load
   */
  component: () => Promise<{ default: ComponentType<any> }>;
  /**
   * Fallback component to show while loading or on error
   */
  fallback?: React.ReactNode;
  /**
   * Props to pass to the 3D scene component
   */
  sceneProps?: Record<string, unknown>;
  /**
   * Force load 3D scene (for testing or specific pages)
   */
  forceLoad?: boolean;
}

/**
 * Check if device can handle 3D graphics
 */
function canHandle3D(): boolean {
  if (typeof window === 'undefined') return false;

  // Check for reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false;
  }

  // Check for slow connection
  if ('connection' in navigator && (navigator as any).connection) {
    const connection = (navigator as any).connection as {
      effectiveType?: string;
      saveData?: boolean;
    };

    if (connection.saveData) {
      return false;
    }

    if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
      return false;
    }
  }

  // Check device memory (if available)
  if ('deviceMemory' in navigator && (navigator as any).deviceMemory) {
    const memory = (navigator as any).deviceMemory;
    if (memory < 2) {
      return false; // Less than 2GB RAM
    }
  }

  return true;
}

/**
 * Loading skeleton for 3D scene
 */
function LoadingSkeleton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-transparent" />
  );
}

/**
 * Fallback for when 3D can't be loaded
 */
function FallbackUI() {
  return null; // Graceful degradation - show nothing if 3D fails
}

/**
 * Lazy 3D Scene Component
 */
export default function Lazy3DScene({
  component,
  fallback = <FallbackUI />,
  sceneProps = {},
  forceLoad = false,
}: Lazy3DSceneProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setShouldLoad3D(forceLoad || canHandle3D());
  }, [forceLoad]);

  // Don't render anything until mounted (client-side) to avoid hydration mismatch
  if (!isMounted) {
    return <>{fallback}</>;
  }

  // Don't load 3D on unsupported devices unless forced
  if (!shouldLoad3D) {
    return <>{fallback}</>;
  }

  const LazyComponent = lazy(component);

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <LazyComponent {...sceneProps} />
    </Suspense>
  );
}

/**
 * Hook to check if 3D should be loaded
 */
export function useShouldLoad3D(forceLoad = false): boolean {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    setShouldLoad(forceLoad || canHandle3D());
  }, [forceLoad]);

  return shouldLoad;
}
