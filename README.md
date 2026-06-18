# Cliffy 26 Mile Swim Tracker

Adventure-style Firebase overlay for OBS.

## Files

- `overlay.html` - OBS Browser Source overlay
- `controller.html` - private control panel to update the tracker
- `firebase-config.js` - paste Firebase config here
- `database.rules.json` - quick-start Realtime Database rules

## Firebase setup

1. Create a Firebase project.
2. Add a Web App.
3. Create a Realtime Database.
4. Paste your Firebase web config into `firebase-config.js`.
5. In Firebase Realtime Database Rules, paste `database.rules.json`.
6. Deploy this folder on GitHub Pages, Vercel, or Netlify.

## OBS

Add `overlay.html` as a Browser Source.
Recommended size: `1920 x 1080`.

## Controller

Open `controller.html` privately to update:

- miles swam
- status
- day label
- water temp
- waves / conditions
- HR average
- elapsed time
- hype note
- quote

## Important

The included rules are open so the tracker works fast. Do not publicly share `controller.html` unless you lock Firebase writes with auth or a secret admin path.
