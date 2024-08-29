<template>
  <div id="app">
    <hello-world-component title="Hello from Vue!"></hello-world-component>
  </div>
</template>

<script>
export default {
  mounted() {
    require('path-to-bundle/bundle.js');
  }
};
</script>
