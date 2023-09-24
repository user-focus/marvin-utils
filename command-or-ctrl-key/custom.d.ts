declare global {
  interface Navigator {
    userAgentData?: { platform: string };
  }
}
