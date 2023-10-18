/**
 * Get the appropriate keyboard shortcut key based on the user's platform.
 * Returns '⌘' for macOS and 'Ctrl' for other operating systems.
 */
export const getCommandOrCtrlKey = ({
	mac = "⌘",
	others = "Ctrl",
}: { mac?: string; others?: string } = {}): string => {
	const userAgent = navigator.userAgent.toLowerCase();

	if (userAgent.includes("mac")) {
		return mac; // macOS
	} else {
		return others; // Other operating systems
	}
};
//call the function with default values
const defaultKey = getCommandOrCtrlKey();
console.log(defaultKey); // '⌘' or 'Ctrl'

//call the function with custom values
const customKey = getCommandOrCtrlKey({ mac: "cmd", others: "control" });
console.log(customKey); // 'cmd' or 'control'
