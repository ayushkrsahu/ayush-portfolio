const FALLBACK_LINK = '#';
const SAFE_EXTERNAL_PROTOCOLS = new Set(['http:', 'https:']);

export const toSafeExternalUrl = (value: string): string => {
  try {
    const parsed = new URL(value);
    return SAFE_EXTERNAL_PROTOCOLS.has(parsed.protocol) ? parsed.toString() : FALLBACK_LINK;
  } catch {
    return FALLBACK_LINK;
  }
};

export const toSafeMailtoUrl = (value: string): string => {
  const email = value.trim();
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return isValidEmail ? `mailto:${email}` : FALLBACK_LINK;
};
