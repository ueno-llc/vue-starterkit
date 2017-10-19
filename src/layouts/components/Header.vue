<template>
  <header class="header">
    <div class="header__container">
      <div class="header__content">
        <router-link to="/" class="header__logo">
          <logo />
        </router-link>
        <div class="header__navigation">
          <slot />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '@/assets/ueno-logo.svg';

export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/config';

.header {
  display: block;
  margin: 0 0 $gutter;
  background-color: #fff;

  &__container {
    @include container;
  }

  &__content {
    display: flex;
    align-items: center;
    padding: $gutter 0;
    border-bottom: 1px solid #ccc;
  }

  &__logo {
    @include reset-anchor;

    &Svg {
      display: block;
    }
  }

  &__navigation {
    display: flex;
    margin-left: auto;
  }
}
</style>
