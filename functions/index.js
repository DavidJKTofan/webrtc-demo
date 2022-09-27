export async function onRequest({ env }) {
    return new Response(env.WEBRTC_URL_FROM_YOUR_LIVE_INPUT);
  }