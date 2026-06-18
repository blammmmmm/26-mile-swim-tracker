# 26 Mile Swim Tracker — Apple Glass UI

Compact OBS overlay for a 26 mile swim tracker using Firebase Realtime Database.

## Files
- `overlay.html` — OBS browser source
- `controller.html` — private controller for updating miles/status/opacity
- `firebase-config.js` — Firebase config already included
- `database.rules.json` — quick testing rules

## GitHub Pages URLs
Overlay:
`https://blammmmmm.github.io/26-mile-swim-tracker/overlay.html`

Controller:
`https://blammmmmm.github.io/26-mile-swim-tracker/controller.html`

## OBS Settings
- Width: `720`
- Height: `270`
- Background: transparent

Optional URL params:
- `?opacity=0.55`
- `?scale=0.9`
- combine: `overlay.html?opacity=0.55&scale=0.9`

## Firebase Rules
Paste this into Realtime Database rules for quick setup:

```json
{
  "rules": {
    "swimTracker": {
      ".read": true,
      ".write": true
    }
  }
}
```
