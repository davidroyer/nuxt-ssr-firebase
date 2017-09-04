# Nuxt.js SSR app on Cloud Functions for Firebase with Firebase Hosting
Host a Nuxt.js SSR app on Cloud Functions for Firebase with Firebase Hosting.

- Firebase Hosting as our CDN for our publicPath (See nuxt.config.js)
- The Nuxt.js files are inside the **src** directory and we have **prod** to deploy to firebase

## Things to know before starting...
 - You must have the Firebase CLI installed. If you don't have it install it with `npm install -g firebase-tools` and then configure it with `firebase login`.

 - The root directory has a package.json file with several scripts that will be used to optimize and ease getting started and the workflow

## Getting Started

 1. Create a Firebase Project using the [Firebase Console](https://console.firebase.google.com).
 1. Clone or download this repo and `cd nuxt-ssr-fire`
 2. Setup Project by using
 `yarn setup`. It installs dependencies, runs a build for Nuxt, and creates the .firebaserc file from .setup-firebaserc

# Getting Started
_* Assuming you have firebase-tools installed globally_
1. git clone repo

2. Setup Project by using
`yarn setup`. It installs dependencies, runs a build for Nuxt, and creates the .firebaserc file from .setup-firebaserc

3. Create a new Firebase project & get the Project ID

4. Update .firebaserc with your Project ID

5. Via command line:
```
 yarn ssr
```
You should see a link printed out in the console<br>
_(Such as: http://localhost:5000/nuxtssrfire/us-central1/render)_

6. Use the URL to update **target** for the proxy module inside src/nuxt.config.js

7. Via command line:
```
 yarn dev-ssr
```
If everyting is successful then you should open http://localhost:3000 and see the site.

<br>
<hr>
Firebase [Medium Post](https://medium.com/@jthegedus/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2)


Firebase Hosting can [rewrite routes to a Cloud Function](https://firebase.google.com/docs/hosting/url-redirects-rewrites#section-rewrites) that serves our Server-side Rendered Nuxt.js app. Using a rewrite rule that catches **ALL** routes we can then host our SSR app on our Firebase Hosting URL instead of the Firebase Cloud Function URL.

instead of:

`https://us-central1-<project-name>.cloudfunctions.net/<function-name>`

we can use:

`<project-name>.firebaseapp.com/`

[Nuxt.js](https://github.com/zeit/next.js/) can then be used to achieve SSR React with Hot-Module Reloading, server and client-side routing, route level code-splitting, route prefetching and more!

A number of issues with Hosting SSR on Firebase were overcome with this method. Please refer to the [Medium Post](https://medium.com/@jthegedus/next-js-on-cloud-functions-for-firebase-with-firebase-hosting-7911465298f2) before creating issues here.

## Installation
```bash
git clone https://github.com/jthegedus/firebase-functions-next-example
cd firebase-functions-next-example
yarn install
```

The following commands all install dependencies as a precaution. Due to Node package managers all offering caching in their `stable` builds now I've default to this method. If using an older version of a package manager without caching, remove the `pre` scripts and ensure to run `yarn install` beforehand

## Nuxt.js Development
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
