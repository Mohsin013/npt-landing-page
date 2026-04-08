"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  /**
   * Optional blur placeholder while image loads
   */
  blur?: boolean;
  /**
   * Show loading skeleton
   */
  showSkeleton?: boolean;
  /**
   * Priority loading for above-the-fold images
   */
  priority?: boolean;
  /**
   * Aspect ratio for layout stability (width/height)
   */
  aspectRatio?: number;
}

/**
 * Optimized Image Component
 *
 * Features:
 * - Automatic WebP/AVIF format conversion
 * - Responsive images with srcset
 * - Lazy loading by default
 * - Loading skeleton support
 * - Aspect ratio for CLS prevention
 * - Blur placeholder support
 * - Error handling
 *
 * Usage:
 * ```tsx
 * <OptimizedImage
 *   src="/image.jpg"
 *   alt="Description"
 *   width={800}
 *   height={600}
 *   aspectRatio={4/3}
 *   priority={true} // For above-the-fold images
 * />
 * ```
 */
export default function OptimizedImage({
  blur = false,
  showSkeleton = true,
  priority = false,
  aspectRatio,
  className = '',
  style,
  fill,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Calculate height if aspect ratio is provided
  const calculatedStyle = aspectRatio
    ? {
        ...style,
        aspectRatio: `${aspectRatio}`,
      }
    : style;

  // If fill is used, the wrapper should take full size of its parent
  const wrapperClassName = fill
    ? `absolute inset-0 w-full h-full ${className}`
    : `relative overflow-hidden ${className}`;

  const handleLoad: ImageProps['onLoad'] = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-muted text-muted-foreground ${className}`}
        style={calculatedStyle}
      >
        <span>Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={wrapperClassName} style={calculatedStyle}>
      {isLoading && showSkeleton && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      <Image
        {...props}
        fill={fill}
        priority={priority}
        quality={blur ? 10 : 85}
        placeholder={blur ? 'blur' : 'empty'}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={handleLoad}
        onError={handleError}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

/**
 * Avatar Component with optimized image
 */
export function OptimizedAvatar({
  src,
  alt,
  size = 48,
  className = '',
}: {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
      style={{ width: size, height: size }}
      priority={true}
      aspectRatio={1}
      blur={true}
    />
  );
}

/**
 * Logo Component with optimized image
 */
export function OptimizedLogo({
  src,
  alt,
  width = 200,
  height = 60,
  className = '',
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={true}
      showSkeleton={false}
    />
  );
}

/**
 * Background Image Component
 */
export function OptimizedBackground({
  src,
  alt,
  className = '',
  children,
  overlayOpacity = 0.5,
}: {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
  overlayOpacity?: number;
}) {
  return (
    <div className={`relative ${className}`}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={true}
        quality={80}
      />
      <div
        className="absolute inset-0 bg-background"
        style={{ opacity: overlayOpacity }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
