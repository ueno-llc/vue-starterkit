<template>
  <h1 class="heading">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
@import 'styles/config';

.heading {
  @include responsive-font(26, 52);
}
</style>
