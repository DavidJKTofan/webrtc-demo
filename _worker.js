export default {
    fetch(req, env) {
      return new Response('Variable 1: ' + env.WEBRTC_PLAYBACK_URL_FROM_YOUR_LIVE_INPUT + 'Variable 2:' + env.WEBRTC_URL_FROM_YOUR_LIVE_INPUT)
    }
}