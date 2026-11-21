# Native lock-screen support

The web app is a PWA. The lock-screen experience shown in the reference image needs native platform code:

- iOS: an ActivityKit Live Activity rendered by a WidgetKit extension.
- Android: an ongoing notification, with notification permission and lock-screen visibility enabled.

Capacitor is configured to package the existing web app without changing its GitHub Pages/PWA deployment.

## Create the native projects

Install Node.js and npm, then run:

```sh
npm install
npm run build
npm run cap:add:android
npm run cap:add:ios
```

After native projects exist, use `npm run cap:sync` to copy updated web assets into them. Open the projects with `npm run cap:open:android` or `npm run cap:open:ios`.

iOS Live Activities must be added to an iOS Widget Extension target in Xcode and enabled in the app target. Building/signing iOS requires macOS and Xcode. Android notification permission and lock-screen visibility must be configured and tested on a device.

The Capacitor packaging scaffold is in place; the platform-specific Live Activity and ongoing-notification implementations still need to be added before lock-screen updates will appear.
