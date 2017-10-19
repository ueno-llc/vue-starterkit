<template>
  <div id="app">
    <router-view></router-view>
    <div v-show="showGridOverlay">
      <grid-overlay :columns="12" :baseline="16" />
    </div>
  </div>
</template>

<script>
import GridOverlay from '@/components/GridOverlay';

export default {
  name: 'app',
  components: {
    GridOverlay,
  },
  data() {
    return {
      showGridOverlay: process.env.NODE_ENV === 'development',
    };
  },
};
</script>

<style lang="scss">
@import './styles/fonts';
@import './styles/config';
@import './styles/base';
</style>
