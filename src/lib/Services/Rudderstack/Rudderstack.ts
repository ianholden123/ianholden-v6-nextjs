import {
  TTrackEvent,
  TTrackPage,
  TIsRudderStackAvailable,
} from "./Rudderstack.types";

export const isRudderStackAvailable: TIsRudderStackAvailable = () =>
  typeof window !== "undefined" &&
  typeof window.rudderanalytics !== "undefined";

export const trackPageView: TTrackPage = (name, properties) => {
  if (!isRudderStackAvailable()) return;
  window.rudderanalytics?.page(name, { ...properties });
};

export const trackEvent: TTrackEvent = (name, properties) => {
  if (!isRudderStackAvailable()) return;
  window.rudderanalytics?.track(name, { ...properties });
};
