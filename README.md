# 26 Mile Swim Tracker — Compact OBS Overlay

This is a small transparent OBS overlay, not a full-screen background scene.

## Links after GitHub Pages deploy

Overlay:
`https://blammmmmm.github.io/26-mile-swim-tracker/overlay.html`

Controller:
`https://blammmmmm.github.io/26-mile-swim-tracker/controller.html`

## OBS Setup

Add a Browser Source:
- URL: overlay.html link
- Width: 560
- Height: 250
- Background: transparent

Resize/move it in OBS like any small overlay.

## Editable opacity

Use controller.html, or add URL params:

`overlay.html?opacity=0.55`

You can also scale:

`overlay.html?opacity=0.55&scale=0.85`

## Firebase rules for testing

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
