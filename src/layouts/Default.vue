<template>
  <div class="layout">
    <nav-header>
      <navigation :routes="routes">
        <template slot-scope="route">
          <router-link
            class="link"
            :to="route.to"
            >
            {{ route.name }}
          </router-link>
        </template>
      </navigation>
    </nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import NavHeader from './components/Header';
import config from '../utils/config';

export default {
  components: {
    NavHeader,
    Navigation,
  },
  metaInfo: {
    ...config.meta,
  },
  data() {
    return {
      routes: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'About',
          to: '/about',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/config';

.layout {
  display: block;
}

.link {
  @include reset-anchor;

  padding: 5px 0;

  font-size: 14px;
  font-weight: 700;
  color: $color-primary;
  text-transform: uppercase;

  border-bottom: 1px solid transparent;

  transition: border $transition-leave;

  &:hover {
    border-color: fade($color-primary, 30%);

    transition-duration: $transition-enter;
  }

  &.active {
    border-color: $color-primary;
  }
}
</style>
