import { getCommandOrCtrlKey } from "./index";

describe("getCommandOrCtrlKey", () => {
  it("should return ⌘ for macOS", () => {
    // Mocking the userAgentData.platform for macOS
    Object.defineProperty(window.navigator, "userAgentData", {
      value: { platform: "MacIntel" },
      writable: true,
    });

    expect(getCommandOrCtrlKey()).toBe("⌘");
  });

  it("should return Ctrl for other platforms", () => {
    // Mocking the userAgentData.platform for a non-macOS platform
    Object.defineProperty(window.navigator, "userAgentData", {
      value: { platform: "Windows" },
      writable: true,
    });

    expect(getCommandOrCtrlKey()).toBe("Ctrl");
  });
});
