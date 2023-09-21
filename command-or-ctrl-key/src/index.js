/**
 * Get the appropriate keyboard shortcut key based on the user's platform.
 * Returns '⌘' for macOS and 'Ctrl' for other operating systems.
 */
export const getCommandOrCtrlKey = () => {
  const platform = navigator?.userAgentData?.platform || navigator?.platform || "unknown";
  const isMacPlatform = platform.toLowerCase().includes("mac");
  return isMacPlatform ? "⌘" : "Ctrl";
};
