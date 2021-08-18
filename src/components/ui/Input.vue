<template>
  <div class="input">
    <div class="input__header">
      <div v-if="label" class="input__label">
        {{ label }}
      </div>
      <v-tooltip
        content-class="input__tooltip"
        top
        max-width="182"
        nudge-left="50"
        v-if="question"
      >
        <template v-slot:activator="{ on, attrs }">
          <img
            v-bind="attrs"
            v-on="on"
            src="../../assets/images/question.png"
            alt=""
          />
        </template>
        <span
          >Password must contain 8+ symbols, 1 special and 2 capital
          letters</span
        >
      </v-tooltip>
    </div>
    <v-text-field
      style="align-self: center"
      :placeholder="placeholder"
      :append-icon="appendIcon"
      hide-details
      :value="value"
      :type="type"
      :height="height"
      dense
      :background-color="backgroundColor"
      :rounded="rounded"
      @change="handleChange"
      @input="handleInput"
      @click:append="$emit('click:append')"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {};
  },
  props: {
    value: [String, Number],
    appendIcon: {
      type: String,
      default: "",
    },
    backgroundColor: {
      type: String,
      default: "#F3F3FA",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    height: {
      type: [Number, String],
      default: "46",
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    question: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  methods: {
    handleInput(evt) {
      this.$emit("input", evt);
    },
    handleChange(evt) {
      this.$emit("change", evt);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-input__slot {
  padding: 16px !important;
}
.input {
  width: 100%;
  height: 100%;
  position: relative;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 18px;
  }
  &__question {
    cursor: pointer;
  }
  &__label {
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.8);
  }
  &__icon {
    position: absolute;
    bottom: 10px;
    right: 15px;
    cursor: pointer;
    width: 18px;
  }
  &__inner {
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.8);
    padding: 8px 43px 8px 18px;
    background: #f3f3fa;
    border-radius: 50px;
    box-sizing: border-box;
    outline: none;
    &::placeholder {
      color: #788aa4;
    }
    &:disabled {
      background: #f6f5f5;
    }
  }
  &__tooltip {
    background: #1e1a3e !important;
    box-shadow: 0 10px 36px rgba(0, 0, 0, 0.1) !important;
    border-radius: 8px !important;
    font-size: 10px !important;
    line-height: 14px !important;
  }
  ::v-deep .v-input__append-inner {
    align-self: center;
  }
}
</style>
