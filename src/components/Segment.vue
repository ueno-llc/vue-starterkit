<template>
  <section class="segment">
    <container v-if="container">
      <slot />
    </container>
    <slot v-else />
  </section>
</template>

<script>
import Container from './Container';

export default {
  components: {
    Container,
  },
  props: {
    container: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/config';

.segment {
  @include segment;
}
</style>
