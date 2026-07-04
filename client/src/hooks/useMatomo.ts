/* ─── Matomo Event Tracking Hook ─── */

declare global {
  interface Window {
    _paq: Array<unknown>;
  }
}

type CtaLocation =
  | 'navbar'
  | 'hero'
  | 'pain-section'
  | 'modules'
  | 'author'
  | 'testimonials'
  | 'scarcity'
  | 'faq'
  | 'final-cta'
  | 'sticky-mobile';

type EventCategory =
  | 'cta_click'
  | 'outbound_link'
  | 'scroll_depth'
  | 'section_view'
  | 'faq_interaction'
  | 'engagement';

/**
 * Push an event to Matomo's _paq queue.
 * Safe to call before Matomo loads — it queues up.
 */
function pushEvent(args: unknown[]) {
  if (typeof window !== 'undefined' && window._paq) {
    window._paq.push(args);
  }
}

/**
 * Track a custom event with category, action, name, and optional value.
 */
export function trackEvent(category: EventCategory, action: string, name?: string, value?: number) {
  pushEvent(['trackEvent', category, action, name || '', value || 0]);
}

/**
 * Track a CTA button click with its location on the page.
 */
export function trackCtaClick(location: CtaLocation, ctaText: string) {
  pushEvent([
    'trackEvent',
    'cta_click',
    location,
    ctaText,
    0,
  ]);
}

/**
 * Track an outbound link click (Kiwify checkout, etc.)
 */
export function trackOutboundLink(url: string, label: string) {
  pushEvent([
    'trackEvent',
    'outbound_link',
    url,
    label,
    0,
  ]);
}

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%).
 * Returns the scroll listener cleanup function — call on unmount.
 */
export function trackScrollDepth(): () => void {
  const milestones = new Set<number>();
  const maxScroll = () =>
    document.documentElement.scrollHeight - document.documentElement.clientHeight;

  const handler = () => {
    const scrolled = window.scrollY;
    const total = maxScroll();
    if (total <= 0) return;

    const pct = Math.round((scrolled / total) * 100);
    [25, 50, 75, 100].forEach((m) => {
      if (pct >= m && !milestones.has(m)) {
        milestones.add(m);
        pushEvent(['trackEvent', 'scroll_depth', `${m}%`, `scroll_${m}pct`, m]);
      }
    });
  };

  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}

/**
 * Track time-on-page milestones (30s, 60s, 120s, 180s).
 * Returns a cleanup function.
 */
export function trackTimeOnPage(): () => void {
  const intervals = [
    { ms: 30_000, label: '30s' },
    { ms: 60_000, label: '60s' },
    { ms: 120_000, label: '120s' },
    { ms: 180_000, label: '180s' },
  ];

  const timers = intervals.map(({ ms, label }) =>
    setTimeout(() => {
      pushEvent(['trackEvent', 'engagement', `time_on_page`, label, ms / 1000]);
    }, ms)
  );

  return () => timers.forEach(clearTimeout);
}

/**
 * Observe a section entering the viewport and track it once.
 * Returns a ref to attach to the section element.
 */
import { useEffect, useRef } from 'react';

export function useTrackSection(sectionName: string) {
  const ref = useRef<HTMLDivElement>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true;
          pushEvent(['trackEvent', 'section_view', sectionName, `section_${sectionName}`, 0]);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [sectionName]);

  return ref;
}
