import { clsx } from 'clsx';

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatPrice(price, currency = 'SAR') {
  return new Intl.NumberFormat('ar-SA', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatNumber(num) {
  return new Intl.NumberFormat('ar-SA').format(num);
}

/**
 * Convert Google Drive sharing link to direct image URL
 * @param {string} url - Google Drive sharing URL
 * @returns {string} - Direct image URL
 */
export function convertGoogleDriveUrl(url) {
  if (!url || typeof url !== 'string') return url;
  
  // Check if it's a Google Drive URL
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveMatch) {
    const fileId = driveMatch[1];
    // Try multiple methods for better compatibility
    // Method 1: Direct download (most reliable)
    return `https://drive.google.com/uc?id=${fileId}`;
  }
  
  // If already converted, return as is
  if (url.includes('drive.google.com/uc')) {
    return url;
  }
  
  return url;
}

/**
 * Check if URL is from Google Drive
 * @param {string} url - URL to check
 * @returns {boolean}
 */
export function isGoogleDriveUrl(url) {
  if (!url || typeof url !== 'string') return false;
  return url.includes('drive.google.com');
}

