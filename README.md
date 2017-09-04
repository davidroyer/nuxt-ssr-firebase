# Nuxt.js SSR app on Cloud Functions for Firebase with Firebase Hosting
Host a Nuxt.js SSR app on Cloud Functions for Firebase with Firebase Hosting.

- Firebase Hosting as our CDN for our publicPath (See nuxt.config.js)
- The Nuxt.js files are inside the **src** directory and we have **prod** to deploy to firebase

## Things to know before starting...
- You must have the Firebase CLI installed. If you don't have it install it with `npm install -g firebase-tools` and then configure it with `firebase login`.

- The root directory has a package.json file with several scripts that will be used to optimize and ease getting started and the workflow

- ALL commands are ran from the root directory

## Setup
1. Clone or download this repo and
```bash
cd nuxt-ssr-fire
```

1. Create a Firebase Project using the [Firebase Console](https://console.firebase.google.com).

1. Obtain the Firebase Project ID  

1. Replace the text `your-project-id` with your Firebase Project ID for the following 2 files:
  - `conig.js`
  - `.setup-firebaserc`

1. Setup Project:
```bash
yarn setup
```
It installs dependencies, runs a build for Nuxt, and creates the .firebaserc file from .setup-firebaserc


## Getting Started
1. Inside the nuxt-ssr-fire directory, run
```bash
yarn dev
```
1. If everything is successful, open http://localhost:3000 to view the site.

1. Go to the Admin page to see there are no Posts in the database to display

1. Click on the pink Add Post Button and click save after adding the post

## Deploying
```bash
yarn deploy
```
<br>
<hr>


### Features
- Server-side rendering with Firebase Hosting combined with Firebase Functions
- API via Firebase Functions and Firebase database
  - *EX:* https://your-project-id.firebaseapp.com/api
- Admin Page with ability to Add, Edit, and Remove posts


<hr>
## Installation
```bash
git clone https://github.com/jthegedus/firebase-functions-next-example
cd firebase-functions-next-example
yarn install
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
