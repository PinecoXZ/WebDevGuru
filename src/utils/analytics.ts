import posthog from 'posthog-js';

export type WMEvent =
  | 'page_view'
  | 'hero_cta_clicked'
  | 'hero_primary_cta_clicked'
  | 'contact_modal_opened'
  | 'contact_form_submitted'
  | 'discovery_form_submitted'
  | 'service_page_viewed'
  | 'work_filter_used'
  | 'final_cta_clicked'
  | 'section_scrolled'
  | (string & {});

export function track(event: WMEvent, props?: Record<string, unknown>) {
  try {
    // Only capture if PostHog has been initialized and user hasn't opted out
    if (posthog.__loaded && !posthog.has_opted_out_capturing()) {
      posthog.capture(event, props);
    }
  } catch {
    // Graceful silent fallback if adblocker or privacy extension blocks PostHog
  }
}
