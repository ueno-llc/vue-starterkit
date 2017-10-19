<script>
export default {
  render(h) {
    const children = this.$slots.default.filter(n => n.tag);
    return h('nav', {
      class: 'navigation',
    }, [
      h('ul', { class: 'navigation__list' },
        children.map(c => h('li', { class: 'navigation__item' }, [c]))),
    ]);
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
