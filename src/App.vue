<template>
  <the-header title="Remember Me"></the-header>
  <stored-resource :resource="storedResource"></stored-resource>
</template>

<script>
import StoredResource from './components/learn-resource/StoredResource.vue';
import TheHeader from './components/Layouts/TheHeader.vue';

export default {
  components: {
    StoredResource,
    TheHeader,
  },
  data() {
    return {
      storedResource: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The offical Vue.js documentation',
          link: 'https://vue.js.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google ...',
          link: 'https://google.org',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
