// Reference: https://developers.cloudflare.com/workers/examples/return-html/ 

const html = `<!DOCTYPE html>
    <html>
    <head>
        <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <h4>Broadcasting video using WHIP</h4>
        <h5>(local mirror)</h5>
        <video id="input-video" autoplay muted></video>

        <script type="module">
            import WHIPClient from './WHIPClient.js';

            const url = ${WEBRTC_URL_FROM_YOUR_LIVE_INPUT};
            console.log("Variable:", ${WEBRTC_URL_FROM_YOUR_LIVE_INPUT});
            const videoElement = document.getElementById('input-video');

            const client = new WHIPClient(url, videoElement);
        </script>

        <h4>Playing video using WHEP</h4>
        <h5>(remote content)</h5>
        <video id="remote-video" controls autoplay muted></video>

        <script type="module">
            import WHEPClient from './WHEPClient.js';

            const url = ${WEBRTC_PLAYBACK_URL_FROM_YOUR_LIVE_INPUT};
            const videoElement = document.getElementById('remote-video');

            const client = new WHEPClient(url, videoElement);
        </script>
    </body>
    </html>`;

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  });
}

addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request));
});