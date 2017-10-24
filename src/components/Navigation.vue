<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li
        class="navigation__item"
        v-for="(route, i) in routes"
        v-bind:key="i"
      >
        <slot v-bind="route"></slot>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    routes: Array,
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/config';

.navigation {
  display: flex;

  &__list {
    @include reset-list;

    display: flex;
    align-items: stretch;

    margin: 0 -($gutter / 2);
  }

  &__item {
    display: flex;
    align-items: center;

    padding: 0 ($gutter / 2);
  }
}
</style>
