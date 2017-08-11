# Next.js SSR app on Cloud Functions for Firebase with Firebase Hosting
Host a Next.js SSR React app on Cloud Functions for Firebase with Firebase Hosting.

Here is the accompanying [Medium Post](https://medium.com/@jthegedus/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2)

## TLDR;
Host your SSR Next.js app on Cloud Functions enabling a low-cost, auto-scaling SSR app experience leveraging Firebase's sweet developer experience.

Firebase Hosting can [rewrite routes to a Cloud Function](https://firebase.google.com/docs/hosting/url-redirects-rewrites#section-rewrites) that serves our Server-side Rendered Next.js app. Using a rewrite rule that catches **ALL** routes we can then host our SSR app on our Firebase Hosting URL instead of the Firebase Cloud Function URL.

instead of:

`https://us-central1-<project-name>.cloudfunctions.net/<function-name>`

we can use:

`<project-name>.firebaseapp.com/`

[Next.js](https://github.com/zeit/next.js/) can then be used to achieve SSR React with Hot-Module Reloading, server and client-side routing, route level code-splitting, route prefetching and more!

A number of issues with Hosting SSR on Firebase were overcome with this method. Please refer to the [Medium Post](https://medium.com/@jthegedus/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2) before creating issues here.

## Installation
```bash
git clone https://github.com/jthegedus/firebase-functions-next-example
cd firebase-functions-next-example
yarn install
```

The following commands all install dependencies as a precaution. Due to Node package managers all offering caching in their `stable` builds now I've default to this method. If using an older version of a package manager without caching, remove the `pre` scripts and ensure to run `yarn install` beforehand

## Next.js Development
```bash
yarn next
```

## Local Firebase Hosting
```bash
yarn serve
```

## Deploy to Firebase
```bash
yarn deploy
```
N.B.: You will need to connect the project to your Firebase project. Edit the name in .firebaserc or run `firebase init` and choose not to override any files.

## A note on Code Compatibility
Everything was tested on Ubuntu 16.04 & Windows 10 with [Bash on Ubuntu on Windows](https://msdn.microsoft.com/en-au/commandline/wsl/about). If you wish for Windows native support please [submit an issue](https://github.com/jthegedus/firebase-functions-next-example/issues/new) so we can work on a Windows branch. Please report any macOS errors as I do not have access to a device to test. [My development environment can be found here](https://github.com/jthegedus/dotfiles).
