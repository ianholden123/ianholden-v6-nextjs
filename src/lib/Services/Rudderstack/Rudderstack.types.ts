export type TIsRudderStackAvailable = () => boolean;

type TTrackPageProperties = {
  name?: string;
  path?: string;
  url?: string;
  title?: string;
  referrer?: string;
  search?: string;
  keywords?: string[];
};

export type TTrackPage = (
  name?: string,
  properties?: TTrackPageProperties
) => void;

type TTrackEventProperties = Record<string, unknown>;

export type TTrackEvent = (
  name: string,
  properties?: TTrackEventProperties
) => void;
