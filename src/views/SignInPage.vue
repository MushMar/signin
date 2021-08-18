<template>
  <div class="sign-in__page">
    <div class="sign-in">
      <div class="sign-in__wrap">
        <h2 class="sign-in__title">Sign In</h2>
        <div class="sign-in__menu menu">
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
            <transition name="error">
              <span class="menu__item-error" v-if="isValidData">
                Email or password are wrong
              </span>
            </transition>
          </div>
          <div class="menu__item">
            <UiInput
              label="Password"
              :append-icon="passwordType ? 'mdi-eye' : 'mdi-eye-off'"
              :type="!passwordType ? 'text' : 'password'"
              :icon="true"
              v-model="password"
              @click:append="passwordType = !passwordType"
              :background-color="$v.password.$error ? '#FF668340' : '#F3F3FA'"
            />
            <transition name="error">
              <span class="menu__item-error" v-if="$v.password.$error">
                Enter valid password
              </span>
            </transition>
            <transition name="error">
              <span class="menu__item-error" v-if="isValidData">
                Email or password are wrong
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
          >
            Sign In
          </UiButton>
        </div>
        <span class="sign-in__question">
          Don’t have an account yet?
          <router-link to="/sign-up">Sign Up</router-link>
        </span>
      </div>
      <div class="sign-in__alert">
        <v-alert
          class="white--text"
          v-if="$v.$error"
          color="#FF6683"
          rounded="pill"
          dismissible
        >
          Wrong email or password
        </v-alert>
      </div>
    </div>
  </div>
</template>

<script>
import { email, minLength, required } from "vuelidate/lib/validators";

export default {
  name: "SignInPage",
  data() {
    return {
      email: "",
      password: "",
      passwordType: "password",
      isValidData: false
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },
  methods: {
    checkForm() {
      this.$v.$touch();
      this.isValidData = false;
      if (!this.$v.$anyError) {
        if(this.email == "mushmaruqyan@gmail.com" && this.password == "MUsh555!") {
          this.$router.push("/main");
        } else {
          this.isValidData = true;
        }
      }
    },
  },
  computed: {
    signUpDisabled() {
      return this.$v.$anyError;
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in {
  background: #faf3f3;
  width: 100%;
  height: 100%;
  position: relative;
  &__page {
    margin: 0 auto;
    width: 302px;
    min-height: 100%;
  }
  &__wrap {
    padding: 40px 14px;
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
    color: #1e1a3e;
    a {
      color: #1e1a3e;
      border-bottom: 1px solid #1e1a3e;
    }
  }
  &__alert {
    width: 100%;
    position: absolute;
    bottom: 10px;
    padding: 0 14px;
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
