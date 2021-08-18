<template>
  <v-btn
    class="ui-button"
    :class="classes"
    :disabled="disabled"
    :rounded="rounded"
    :color="color"
    :height="height"
    :fab="fab"
    :outlined="outlined"
    @click="handleClick"
  >
    <slot v-if="$slots.default">
      <span />
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: "Button",
  props: {
    fab: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    height: {
      type: [Number, String],
      default: "46",
    },
    color: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes() {
      return {
        outlined: this.outlined,
        "is-disabled": this.disabled,
      };
    },
  },
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 35px;
  border: none;
  outline: none;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  background: #1e1a3e;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.5s;
  &.is-disabled {
  }
}
</style>
