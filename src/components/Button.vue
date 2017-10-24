<template>
  <a
    v-if="isExternal"
    class="button"
    :class="{disabled}"
    :href="to"
    @click="onClick"
  >
    <slot />
  </a>
  <router-link
    v-else-if="isLink"
    class="button"
    :class="{disabled}"
    :to="to"
    @click="onClick"
  >
    <slot />
  </router-link>
  <button
    v-else
    class="button"
    :class="{disabled}"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    to: String,
    disabled: Boolean,
  },
  computed: {
    isLink() {
      return (typeof this.to !== 'undefined');
    },
    isExternal() {
      return this.isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(this.to);
    },
  },
  methods: {
    onClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'styles/config';

$btn-height: 40px;
$btn-border-width: 2px;

.button {
  @include reset-button;

  display: inline-flex;
  position: relative;

  padding: 0 $gutter;

  height: $btn-height;

  font-size: $font-size;
  line-height: ($btn-height - 2 * $btn-border-width);
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  color: #fff;

  cursor: pointer;

  border: $btn-border-width solid transparent;
  border-radius: $btn-border-width;

  background: $color-primary;

  transition: 180ms;
  transition-property: border-color, background-color, color, opacity;

  & + & {
    margin-left: $gutter / 2;
  }

  &:hover,
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: darken($color-primary, 10%);
  }

  &.disabled {
    cursor: default;

    background-color: #bbb;
  }
}
</style>
