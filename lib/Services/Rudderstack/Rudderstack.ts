import Cookies from "js-cookie";
import constants from "@/lib/Constants";
import {
  TTrackEvent,
  TTrackPage,
  TIsRudderStackAvailable,
} from "./Rudderstack.types";

// Middleware will automatically set a cookie for the user if they visit a page
const sessionUUID = Cookies.get(constants.uuid_cookie);

const commonProperties = {
  statsigCustomIDs: ["sessionUUID", sessionUUID],
  statsigEnvironment: { tier: process.env.NODE_ENV },
};

export const isRudderStackAvailable: TIsRudderStackAvailable = () =>
  typeof window !== "undefined" &&
  typeof window.rudderanalytics !== "undefined";

export const trackPageView: TTrackPage = (name, properties) => {
  if (!isRudderStackAvailable()) return;
  window.rudderanalytics?.page(name, { ...commonProperties, ...properties });
};

export const trackEvent: TTrackEvent = (name, properties) => {
  if (!isRudderStackAvailable()) return;
  window.rudderanalytics?.track(name, { ...commonProperties, ...properties });
};
