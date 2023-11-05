interface Window {
  rudderanalytics?: {
    alias: (to: string, from?: string) => void;
    getAnonymousId: () => string;
    identify: (
      userId: string,
      details: any,
      apiOptions?: {
        anonymousId?: string;
        integrations?: any;
        originalTimestamp?: Date;
      }
    ) => void;
    page: (name?: string, properties: Record<string, unknown>) => void;
    track: (eventName: string, eventObject: any, cb?: any) => void;
  };
}
