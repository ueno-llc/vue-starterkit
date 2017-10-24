<template>
    <div v-show="display" ref="grid" class="grid" :class="{ isHorizontalVisible, isVerticalVisible }">
      <div class="grid__container">
        <div class="grid__row" :data-columns="columns">
            <div class="grid__column" v-for="key in columns" :key="key">
              <div class="grid__visualize" />
            </div>
        </div>
      </div>
      <div>
        <button key="v" class="grid__button" :class="{ isVerticalVisible }" @click="onToggleVertical">
          <svg class="grid__button__svg" width="14px" height="14px" view-box="0 0 14 14">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <rect x="0" y="0" width="2" height="14" />
              <rect x="4" y="0" width="2" height="14" />
              <rect x="8" y="0" width="2" height="14" />
              <rect x="12" y="0" width="2" height="14" />
            </g>
          </svg>
        </button>
        <button key="h" class="grid__button" :class="{ isHorizontalVisible }" @click="onToggleHorizontal">
          <svg class="grid__button__svg" width="14px" height="14px" view-box="0 0 14 14">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(7.000000, 7.000000) rotate(-270.000000) translate(-7.000000, -7.000000)">
              <rect x="0" y="0" width="2" height="14" />
              <rect x="4" y="0" width="2" height="14" />
              <rect x="8" y="0" width="2" height="14" />
              <rect x="12" y="0" width="2" height="14" />
            </g>
          </svg>
        </button>
      </div>
    </div>
</template>
<style lang="scss" scoped>
    @import 'styles/config';

    :root {
      --grid-column-count: $grid-column-count;
      --grid-baseline: $grid-baseline;
      --grid-baseline-calc: unitless($grid-baseline);
    }

    .grid {
      z-index: 9001; // over 9000 !!!
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      pointer-events: none;
      overflow: hidden;

      transform-origin: 50% 0%;

      &__container {
        @include container;

        opacity: 0;
        height: 100%;

        transition: opacity 0.2s;
      }

      &.isVerticalVisible &__container {
        opacity: 1;
      }

      &.isHorizontalVisible {
        background:
          linear-gradient(to bottom, rgba(0, 0, 0, 0) calc(100% - (1 / var(--grid-baseline-calc) * 100%)), rgba(0, 0, 0, 0.05) calc(100% - (1 / var(--grid-baseline-calc) * 100%))),
          linear-gradient(to bottom, rgba(0, 0, 0, 0) calc(100% - (1 / var(--grid-baseline-calc) * 100%)), rgba(255, 255, 255, 0.15) calc(100% - (1 / var(--grid-baseline-calc) * 100%)));
        background-size: var(--grid-baseline) var(--grid-baseline);
      }

      &__row {
        @include grid-row;

        height: 100%;
      }

      &__column {
        @include grid-col(calc(100% / var(--grid-column-count, #{$grid-column-count})));

        position: relative;
        height: 100%;
      }

      &__visualize {
        position: relative;
        width: 100%;
        height: 100%;

        &::before,
        &::after {
          content: '';
          display: block;

          width: 100%;
          height: 100%;

          background: rgba(255, 255, 255, 0.1);
        }

        &::after {
          position: absolute;
          top: 0;
          left: 0;

          background: rgba(0, 0, 0, 0.05);
        }
      }

      &__button {
        @include reset-button;

        position: fixed;
        right: 20px;
        top: 0;
        z-index: 9001; // over 9000 !!!
        opacity: 1;

        padding: 0 15px;
        height: 26px;

        font-size: 12px;
        color: #999;
        text-transform: uppercase;

        cursor: pointer;
        pointer-events: all;

        background-color: #fff;

        border-style: solid;
        border-width: 0 1px 1px;
        border-color: rgba(0, 0, 0, 0.1);
        border-radius: 0 0 2px 2px;

        transition: opacity 0.25s, transform 0.1s;

        &:hover {
          color: #000;

          g { // stylelint-disable-line
            fill: #000;
          }
        }

        &:first-of-type {
          right: 76px;
        }

        &__svg {
          margin-top: 4px;

          g { // stylelint-disable-line
            fill: #8d8d8d;
          }
        }

        // stylelint-disable
        &.isHorizontalVisible,
        &.isVerticalVisible {
          g,
          &:hover g {
            fill: #328bf3;
          }
        }
        // stylelint-enable
      }
    }

</style>
<script>
  /* eslint-disable max-len */
  // Key to store visibility state of the grid overlay
  const LOCAL_STORAGE_KEY_HORIZONTAL = '_devtoolsHorizontalGridVisible';
  const LOCAL_STORAGE_KEY_VERTICAL = '_devtoolsVerticalGridVisible';
  const LOCAL_STORAGE_KEY_VISIBLE = '_devtoolsGridVisible';

  /**
   * Grid Overlay component
   */
  export default {
    name: 'GridOverlay',
    props: {
      columns: {
        type: Number,
        default: 12,
      },
      baseline: {
        type: Number,
        default: 16,
      },
    },
    data() {
      return {
        isVerticalVisible: false,
        isHorizontalVisible: false,
        display: true,
      };
    },
    created() {
      document.addEventListener('keydown', this.onKeyDown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.onKeyDown);
    },
    mounted() {
      this.setUp();
    },
    methods: {
      setUp() {
        const { columns, baseline } = this;

        this.isHorizontalVisible = (localStorage.getItem(LOCAL_STORAGE_KEY_HORIZONTAL) === 'true');
        this.isVerticalVisible = (localStorage.getItem(LOCAL_STORAGE_KEY_VERTICAL) === 'true');
        this.display = (localStorage.getItem(LOCAL_STORAGE_KEY_VISIBLE) === 'true');

        this.$refs.grid.style.setProperty('--grid-column-count', columns);
        this.$refs.grid.style.setProperty('--grid-baseline', `${baseline}px`);
        this.$refs.grid.style.setProperty('--grid-baseline-calc', baseline);
      },
      onToggleVertical() {
        this.isVerticalVisible = !this.isVerticalVisible;
        localStorage.setItem(LOCAL_STORAGE_KEY_VERTICAL, this.isVerticalVisible);
      },
      onToggleHorizontal() {
        this.isHorizontalVisible = !this.isHorizontalVisible;
        localStorage.setItem(LOCAL_STORAGE_KEY_HORIZONTAL, this.isHorizontalVisible);
      },
      onToggleDisplay() {
        this.display = !this.display;
        localStorage.setItem(LOCAL_STORAGE_KEY_VISIBLE, this.display);
      },
      onKeyDown(e) {
        if (e.ctrlKey && e.keyCode === 76) {
          this.onToggleVertical();
        }

        if (e.ctrlKey && e.keyCode === 75) {
          this.onToggleDisplay();
        }
      },
    },
  };
</script>
