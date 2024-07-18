# abstract-reasoning-lab

A suite of tests to get you prepared for tests that use abstract reasoning, it's often seen on IQ tests.

## Development
To get started, clone the repo and use ```npm install``` to get the dependancies.

To run a test server, use ```npm run dev```.
For style, we use ESLint with Airbnb.
For testing, we use vitest. Run all tests with ```npm run test```

## Compiling for the web
```npm run build```

## Compiling for android
first, change the keystore location on ./android/twa-manifest.json, then use
```bubblewrap build```