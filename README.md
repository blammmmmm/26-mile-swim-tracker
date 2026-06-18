# 26 Mile Swim Tracker — Asset-Based Compact Overlay

This version uses a static designed SVG frame plus live Firebase text/progress layered on top.
It is meant to be a small transparent OBS Browser Source, not a full-screen overlay.

## OBS Browser Source
- URL: `https://blammmmmm.github.io/26-mile-swim-tracker/overlay.html`
- Width: `720`
- Height: `360`
- Background: transparent

## Controller
- URL: `https://blammmmmm.github.io/26-mile-swim-tracker/controller.html`
- Keep private.

## Firebase Rules
For quick testing/live use:
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

## Data path
`swimTracker/current`
