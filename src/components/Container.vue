<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import 'styles/config';

.container {
  @include container;

  .full {
    max-width: none;

    @media (min-width: $min-tablet) {
      max-width: none;
    }

    @media (min-width: $min-desktop) {
      max-width: none;
    }
  }
}
</style>
