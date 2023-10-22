import { getCommandOrCtrlKey } from "../src/index";
import { DEFAULT_CONFIG } from "../src/constants";

describe("getCommandOrCtrlKey", () => {
  const originalUserAgent = navigator.userAgent;

  // Mock the navigator.userAgent property for testing
  beforeAll(() => {
    Object.defineProperty(navigator, "userAgent", {
      value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36",
      configurable: true,
    });
  });

  // Restore the original navigator.userAgent property after testing
  afterAll(() => {
    Object.defineProperty(navigator, "userAgent", {
      value: originalUserAgent,
      configurable: true,
    });
  });

  it('should return "⌘" on a Mac platform', () => {
    const result = getCommandOrCtrlKey();
    expect(result).toBe(DEFAULT_CONFIG.mac);
  });

  it('should return "Ctrl" on a non-Mac platform', () => {
    // Mock the userAgent to simulate a non-Mac platform
    Object.defineProperty(navigator, "userAgent", {
      value: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36",
      configurable: true,
    });

    const result = getCommandOrCtrlKey();
    expect(result).toBe(DEFAULT_CONFIG.others);
  });

  it('should return "Ctrl" when userAgent is not recognizable', () => {
    // Mock the userAgent to simulate an unrecognizable user-agent string
    Object.defineProperty(navigator, "userAgent", {
      value: "Unknown User Agent",
      configurable: true,
    });

    const result = getCommandOrCtrlKey();
    expect(result).toBe(DEFAULT_CONFIG.others);
  });
});
