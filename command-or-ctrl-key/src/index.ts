/**
 * Get the appropriate keyboard shortcut key based on the user's platform.
 * Returns '⌘' for macOS and 'Ctrl' for other operating systems.
 */
export const getCommandOrCtrlKey = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("mac")) {
    return "⌘"; // macOS
  } else {
    return "Ctrl"; // Other operating systems
  }
};
