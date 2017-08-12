<template>
  <div>
    <h1 class="display-1">Getting Started</h1>
    <v-stepper v-model="currentStep" dark class="mt-3">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="currentStep > 1">Setting Up Firebase</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="currentStep > 2">Get Code Setup</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Test & Deploy</v-stepper-step>
      </v-stepper-header>
      <v-stepper-content step="1">
        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px"></v-card>
        <v-btn primary @click.native="currentStep = 2">Continue</v-btn>
        <v-btn flat dark>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px"></v-card>
        <v-btn primary @click.native="currentStep = 3">Continue</v-btn>
        <v-btn flat dark>Cancel</v-btn>
      </v-stepper-content>
      <v-stepper-content step="3">
        <v-card class="grey lighten-1 z-depth-1 mb-5" height="200px"></v-card>
        <v-btn primary @click.native="currentStep = 1">Continue</v-btn>
        <v-btn flat dark>Cancel</v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
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
</style>
