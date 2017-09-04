<template lang="html">
  <v-stepper v-model="currentStep" class="mt-3">
    <v-stepper-header>
      <v-stepper-step step="1" :complete="currentStep > 1">Firebase</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2" :complete="currentStep > 2">Run some Commands</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Test & Deploy</v-stepper-step>
    </v-stepper-header>
    <v-stepper-content step="1">
      <v-card class="cardStepper grey lighten-5 z-depth-1 mb-5" height="280px">
        <v-card-title>There are 2 Main Firebase Neccessities.</v-card-title>
          <v-card-text>
          <ul>
            <li>A Project ID for a Firebase project</li>
            <li>The Firebase tools installed globally</li>
          </ul>
        </v-card-text>
      </v-card>
      <v-btn primary @click.native="currentStep = 2">Next</v-btn>
      <v-btn flat dark>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-content step="2">
      <v-card class="cardStepper grey lighten-5 z-depth-1 mb-5" height="280px">
        <v-card-title>While There are Several Scripts in the package.json, Only 5 Matter:</v-card-title>

        <v-card-text>
          <div class="flexSnippet">
            <code>yarn setup</code>
            <span>Gets everything installed and ready to run</span>
          </div>
          <div class="flexSnippet">
            <code>yarn dev</code>
            <span>Gets everything installed and ready to run</span>
          </div>
          <div class="flexSnippet">
            <code>yarn build</code>
            <span>Builds for production</span>
          </div>
          <div class="flexSnippet">
            <code>yarn serve</code>
            <span>This is a command that calls firebase's command for local environment.</span>
              <!-- <code>firebase serve --only functions,hosting</code> -->
          </div>
          <div class="flexSnippet">
            <code>yarn deploy</code>
            <span>Deploys to firebase functions and hosting</span>
          </div>
        </v-card-text>
      </v-card>
      <v-btn accent @click.native="currentStep = 1">Prev</v-btn>
      <v-btn primary @click.native="currentStep = 3">Next</v-btn>
    </v-stepper-content>
    <v-stepper-content step="3">
      <v-card class="cardStepper grey lighten-5 z-depth-1 mb-5" height="280px"></v-card>
      <v-btn accent @click.native="currentStep = 2">Prev</v-btn>
      <v-btn primary @click.native="currentStep = 1">Back to Step1</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
  export default {
    data() {
      return {
        currentStep: 1
      }
    }
  }
</script>

<style lang="css">
.flexSnippet {
  display: flex;
  padding: .5em 0;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  height: 60px;
}

.flexSnippet code {
  flex: none;
  display: block;
}

.flexSnippet span {
  position: absolute;
  left: 130px;
  width: 68%;
  height: auto;
  display: block;
  flex-basis: 80%;
  font-size: .95em;
}
.cardStepper .card__title {
  font-weight: 500;
text-transform: capitalize;
padding-bottom: 0;
font-size: 1.05em;
}

.cardStepper {
  height: 280px;
  overflow: scroll;
}

</style>
