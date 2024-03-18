# toverlay

A custom tournament manager tool for OBS.

## OBS Setup

### OBS Websocket

To let toverlay use OBS controls, we will need to:

1. Rename `.env.sample` to `.env`
2. In OBS Studio, go to `Tools > WebSocket Server Settings`
3. Check `Enable WebSocket Server`
4. Check `Enable Authentication` and click `Generate Password`
5. Click `Show Connect Info`
6. Copy the server IP and Port into your `.env` under `PUBLIC_OBS_WS_IP`
   - Format should follow `PUBLIC_OBS_WS_IP=<ip>:<port>`
7. Copy the server password into your `.env` under `PUBLIC_OBS_WS_PASS`
8. Click `Apply` in the WebSocket Server Settings window.

### Stream Overlay

To setup the stream overlay, simply create a new Browser source with the following settings:

- URL: http://localhost:5173/overlay
- Width: 1920
- Height: 1080

### Dashboard Dock

Additionally, if you want to access the dashboard within OBS:

1. Go to Docks > Custom Browser Docks...
2. Set the dock name to 'toverlay' and the URL to http://localhost:5173/dashboard
3. Click 'Apply'

## Starting toverlay

Once you've installed dependencies with `pnpm install`, you can start your local toverlay server by running:

```bash
pnpm dev
```
