# Nuxt.js + SSR + API via Firebase
Host a Nuxt Universal app or site by combining Nuxt.js with Firebase Cloud Functions, Hosting, and Database

[Live Preview](https://nuxtssrfire.firebaseapp.com)

## Setup
1. Clone or download this repo run yarn inside the directory to install the cross-env dependency
```bash
cd the-project-directory
yarn
```

1. Create a Firebase Project using the [Firebase Console](https://console.firebase.google.com).

1. Obtain the Firebase Project ID  

1. Replace the text `your-project-id` with your Firebase Project ID for the following 2 files inside the root directory:
  - `conig.js`
  - `.setup-firebaserc`

1.This command installs dependencies, runs a build for Nuxt, and creates the .firebaserc file from .setup-firebaserc
```bash
yarn setup
```

## Our Dev Setup
1. Inside the root directory, run
```bash
yarn dev
```
1. If everything is successful, open http://localhost:3000 to view the site.

1. Go to the Admin page to see there are no posts displayed

1. Click on the Add Post Button to create and save a new post

  **Note:** _Currently you need to reload the page to see the the new post but this will be updated soon once Vuex is added_

1. ## Deploying
We're ready to go live. It can a a little longer than expected to deploy sometimes and its usually a little longer the first deploy.  **It's worth it though!**
```bash
yarn deploy
```
<hr>

### Features
- Server-side rendering with Firebase Hosting combined with Firebase Functions
- API via Firebase Functions and Firebase database
  - *EX:* https://your-project-id.firebaseapp.com/api
- Admin Page with ability to Add, Edit, and Remove posts
- Firebase Hosting as our CDN for our publicPath (See nuxt.config.js)

### Things to know...
- You must have the Firebase CLI installed. If you don't have it install it with `npm install -g firebase-tools` and then configure it with `firebase login`.

- The root directory has a package.json file with several scripts that will be used to optimize and ease getting started and the workflow

- ALL commands are ran from the root directory
