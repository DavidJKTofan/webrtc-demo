addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const WEBRTC_URL_FROM_YOUR_LIVE_INPUT = WEBRTC_URL_FROM_YOUR_LIVE_INPUT;
  const WEBRTC_PLAYBACK_URL_FROM_YOUR_LIVE_INPUT = WEBRTC_PLAYBACK_URL_FROM_YOUR_LIVE_INPUT;
  
  return new Response("Hello world")
}