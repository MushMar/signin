<template>
  <div class="sign-up__page">
    <div class="sign-up">
      <h2 class="sign-up__title">Sign Up</h2>
      <div class="sign-up__menu menu">
        <div class="menu__item">
          <UiInput
            label="Full name"
            type="text"
            v-model="fullName"
            :background-color="$v.fullName.$error ? '#FF668340' : '#F3F3FA'"
          />
          <transition name="error">
            <span class="menu__item-error" v-if="$v.fullName.$error">
              Enter Full Name
            </span>
          </transition>
        </div>
        <div class="menu__item">
          <UiInput
            label="Email"
            type="text"
            v-model="email"
            :background-color="$v.email.$error ? '#FF668340' : '#F3F3FA'"
          />
          <transition name="error">
            <span class="menu__item-error" v-if="$v.email.$error">
              Enter valid email
            </span>
          </transition>
        </div>
        <div class="menu__item">
          <UiInput
            label="Password"
            :append-icon="passwordType ? 'mdi-eye' : 'mdi-eye-off'"
            :type="!passwordType ? 'text' : 'password'"
            :icon="true"
            @input="passwordValue"
            :value="password"
            :question="true"
            @click:append="passwordType = !passwordType"
            :background-color="
              $v.password.$error || rightPasswordBool ? '#FF668340' : '#F3F3FA'
            "
          />
          <transition name="error">
            <span
              class="menu__item-error"
              v-if="$v.password.$error || rightPasswordBool"
            >
              Enter valid password
            </span>
          </transition>
        </div>
        <div class="menu__item">
          <UiInput
            :append-icon="repeatType ? 'mdi-eye' : 'mdi-eye-off'"
            label="Repeat password"
            :type="!repeatType ? 'text' : 'password'"
            v-model="repeatPassword"
            :error="signUpDisabled"
            :background-color="
              $v.repeatPassword.$error ? '#FF668340' : '#F3F3FA'
            "
            :icon="true"
            @click:append="repeatType = !repeatType"
          />
          <transition name="error">
            <span class="menu__item-error" v-if="$v.repeatPassword.$error">
              Enter repeat password
            </span>
          </transition>
        </div>
        <UiButton
          class="white--text"
          rounded
          color="#1E1A3E"
          height="46"
          :disabled="signUpDisabled"
          @click="checkForm"
          >Sign Up</UiButton
        >
      </div>
      <span class="sign-up__question"
        >Already have an account?
        <router-link to="/sign-in">Sign In </router-link></span
      >
    </div>
  </div>
</template>

<script>
import { email, required, sameAs, minLength } from "vuelidate/lib/validators";

export default {
  name: "SignUpPage",
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      passwordType: "password",
      repeatPassword: "",
      repeatType: "password",
      rightPasswordBool: false,
      sendingStatus: false,
    };
  },
  computed: {
    signUpDisabled() {
      return this.$v.$anyError || this.rightPasswordBool;
    },
  },
  methods: {
    checkForm() {
      this.sendingStatus = true;
      this.$v.$touch();
      this.checkPassword(this.password);
      if (!this.$v.$anyError && !this.rightPasswordBool) {
        this.$router.push("/main");
      }
    },
    checkPassword(passwordVal) {
      this.rightPasswordBool = /(?=.*[!@#$%^&*])^(.*?[A-Z]){2,}.*$/.test(
        passwordVal
      );
      this.rightPasswordBool = !this.rightPasswordBool;
    },
    passwordValue(val) {
      if (this.sendingStatus) {
        this.checkPassword(val);
      }
      this.password = val;
    },
  },
  validations: {
    fullName: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  background: #faf3f3;
  padding: 40px 14px;
  width: 100%;
  height: 100%;
  &__page {
    margin: 0 auto;
    width: 302px;
    height: 100%;
  }
  &__title {
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #181c43;
    margin-bottom: 20px;
  }
  &__question {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #1e1a3e;
    a {
      color: #1e1a3e;
      border-bottom: 1px solid #1e1a3e;
    }
  }
}
.menu {
  background: #ffffff;
  border-radius: 40px;
  padding: 23px 22px 16px;
  margin-bottom: 20px;
  &__item {
    padding-bottom: 24px;
    position: relative;
    &-error {
      position: absolute;
      font-size: 10px;
      line-height: 20px;
      color: #ff6683;
      bottom: 6px;
      left: 18px;
    }
  }
  .ui-button {
    margin-top: 19px;
  }
}

.error-enter-active,
.error-leave-active {
  transition: all 0.3s ease;
}
.error-enter,
.error-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>
