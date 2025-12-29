'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface LazyImageProps {
  alt: string;
  src: string;
  className?: string;
  AspectRatioClassName?: string;
  fallback?: string;
  ratio: number;
  inView?: boolean;
}

export function LazyImage({
  alt,
  src,
  ratio,
  fallback,
  inView = false,
  className,
  AspectRatioClassName,
}: LazyImageProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, { once: true });

  const [imgSrc, setImgSrc] = React.useState<string | undefined>(
    inView ? undefined : src
  );
  const [isLoading, setIsLoading] = React.useState(true);

  const handleError = () => {
    if (fallback) {
      setImgSrc(fallback);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  React.useEffect(() => {
    if (inView && isInView && !imgSrc) {
      setImgSrc(src);
    }
  }, [inView, isInView, src, imgSrc]);

  React.useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      handleLoad();
    }
  }, [imgSrc]);

  return (
    <AspectRatio ref={ref} ratio={ratio} className={cn('overflow-hidden', AspectRatioClassName)}>
      <div
        className={cn(
          'absolute inset-0 bg-muted animate-pulse transition-opacity duration-300',
          isLoading ? 'opacity-100' : 'opacity-0'
        )}
      />
      {imgSrc && (
        <img
          ref={imgRef}
          src={imgSrc}
          alt={alt}
          onError={handleError}
          onLoad={handleLoad}
          className={cn(
            'h-full w-full object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
        />
      )}
    </AspectRatio>
  );
}
