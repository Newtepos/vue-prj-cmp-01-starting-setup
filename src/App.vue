<template>
  <ul>
    <learning-resource
      v-for="resource in storedResource"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/learn-resource/LearningResource.vue';

export default {
  components: {
    LearningResource,
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
