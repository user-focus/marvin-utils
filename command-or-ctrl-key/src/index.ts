/**
 * Get the appropriate keyboard shortcut key based on the user's platform.
 * Returns '⌘' for macOS and 'Ctrl' for other operating systems.
 */
import { DEFAULT_CONFIG } from "./constants";

export const getCommandOrCtrlKey = (config = DEFAULT_CONFIG): string => {
	const userAgent = navigator.userAgent.toLowerCase();

	if (userAgent.includes("mac")) {
		return config.mac; // macOS
	} else {
		return config.others; // Other operating systems
	}
};
