export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || !window.dataLayer?.push) {
    return
  }

  window.dataLayer.push({
    event: eventName,
    ...params,
  })
}