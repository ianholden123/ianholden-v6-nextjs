const METICULOUS_PROJECT_ID = process.env.NEXT_PUBLIC_METICULOUS_PROJECT_ID;

export function MeticulousScript() {
  const shouldRenderScript =
    process.env.NODE_ENV !== "development" ||
    process.env.VERCEL_ENV !== "preview";
  if (!shouldRenderScript) return null;

  // Note: The Meticulous script must be the first script to load
  // (1) Use the native script tag instead of the NextJS Script component,
  // (2) Do not add defer or async tags to the script tag
  // This ensures Meticulous can instrument fetch and similar browser APIs before any other scripts execute and capture a reference to such methods.
  return (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script
      data-project-id={METICULOUS_PROJECT_ID}
      src="https://snippet.meticulous.ai/v1/stagingMeticulousSnippet.js"
    />
  );
}
