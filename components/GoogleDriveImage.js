'use client';

import Image from 'next/image';
import { convertGoogleDriveUrl, isGoogleDriveUrl } from '@/lib/utils';

/**
 * Custom Image component for Google Drive images
 * Uses regular img tag instead of Next Image for better compatibility with Google Drive
 */
export default function GoogleDriveImage({ src, alt, className, fill, ...props }) {
  const convertedSrc = convertGoogleDriveUrl(src);
  const isDrive = isGoogleDriveUrl(src);

  // If it's a Google Drive image, use regular img tag
  if (isDrive) {
    if (fill) {
      return (
        <img
          src={convertedSrc}
          alt={alt || ''}
          className={className}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: className?.includes('object-contain') ? 'contain' : 'cover',
          }}
          {...props}
        />
      );
    }
    return (
      <img
        src={convertedSrc}
        alt={alt || ''}
        className={className}
        {...props}
      />
    );
  }

  // For non-Google Drive images, use Next Image
  if (fill) {
    return <Image src={src} alt={alt || ''} className={className} fill unoptimized {...props} />;
  }
  return <Image src={src} alt={alt || ''} className={className} unoptimized {...props} />;
}

