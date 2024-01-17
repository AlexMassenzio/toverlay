# toverlay

A custom tournament manager tool for OBS.

## Developing

Once you've installed dependencies with `pnpm install`, start a development server:

```bash
pnpm dev

# unit testing:
pnpm test
```

## Building

To create a production version of toverlay:

```bash
pnpm build
```

To run the production build:

```bash
pnpm start
```

## OBS Setup

To setup the stream overlay, simply create a new Browser source with the following settings:

- URL: http://localhost:3000/overlay (if running a development build, use port 5173)
- Width: 1920
- Height: 1080

Additionally, if you want to access the dashboard within OBS:

1. Go to Docks > Custom Browser Docks...
2. Set the dock name to 'toverlay' and the URL to http://localhost:3000/dashboard (if running a development build, use port 5173)
3. Click 'Apply'
