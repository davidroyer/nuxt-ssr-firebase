<template>
  <section class="container">
    <div>

      <h1 class="title">
        Page 2
      </h1>
      <h2 class="subtitle">
        Subtitle Here
      </h2>
      <h4 class="render-result vertical-space">Rendered From:  <span>{{renderSource}}</span></h4>
      <ul>
        <li v-for="fact in facts" :key="fact.text">
          {{ fact.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import fetch from 'isomorphic-fetch';

export default {
  async asyncData () {
    let response = await fetch('https://nuxt-ssr.firebaseio.com/facts.json');
    let facts = await response.json();
    return {
      facts,
      renderSource: process.static ? 'static' : (process.server ? 'server' : 'client')
    }
  }
}
</script>

<style>
body {
  font-family: Roboto, Arial, sans-serif;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 40px
}
ul {
  padding: 0;
  margin: 0
}
ul li {
  font-size: 18px;
  list-style-type: none;
  height: 48px;
  width: 100%;
  color: rgba(0, 0, 0, .63);
  border-bottom: 1px dashed rgba(0, 0, 0, .42);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center
}
</style>
