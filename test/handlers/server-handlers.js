import { rest } from "msw";
import { lastFmHandlers } from "./LastFM/handlers-last-fm";

const handlers = [...lastFmHandlers];

export { handlers };
