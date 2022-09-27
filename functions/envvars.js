const handleRequest = createPagesFunctionHandler({
  build,
  getLoadContext({ env }) {
    return env;
  },
});

export let loader: LoaderFunction = async ({ context }) => {
    // Use context.YOUR_ENVIRONMENT_VARIABLE to access your environment variable.
    const WEBRTC_URL_FROM_YOUR_LIVE_INPUT = context.WEBRTC_URL_FROM_YOUR_LIVE_INPUT;
    const WEBRTC_PLAYBACK_URL_FROM_YOUR_LIVE_INPUT = context.WEBRTC_PLAYBACK_URL_FROM_YOUR_LIVE_INPUT;
  }