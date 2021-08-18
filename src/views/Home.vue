<template>
  <div class="home">
    <div class="home__page">
      <div class="home__page-header">
        <h2 class="home__page-title">Ready for a great User experience?</h2>
        <span class="home__page-subtitle">
          Bring your media to the next level!
        </span>
      </div>
      <div class="home__page-content">
        <UiButton rounded color="#FFFFFF">Sign Up</UiButton>
        <UiButton fab color="#1E1A3E" @click="signUp">
          <img src="../assets/images/arrow.png" alt="" />
        </UiButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    signUp() {
      this.$router.push("/sign-up");
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  width: 302px;
  min-height: 100%;
  margin: 0 auto;
  &__page {
    width: 100%;
    height: 100%;
    padding: 40px;
    background: #faf3f3;
    background: #faf3f3 url("../assets/images/woman.png") no-repeat bottom;
    background-size: contain;
    &-header {
      text-align: center;
      margin-bottom: 27px;
      animation: 1s left;
    }
    &-title {
      font-weight: 800;
      font-size: 22px;
      line-height: 30px;
      color: #181c43;
      margin-bottom: 17px;
    }
    &-subtitle {
      font-size: 14px;
      line-height: 20px;
      color: #3e4462;
    }
    &-content {
      display: flex;
      align-items: center;
      animation: 1s right;
      justify-content: center;
      .ui-button {
        width: max-content;
      }
      .ui-button:last-child {
        width: 48px;
        height: 48px;
        padding: 0;
        margin-left: 16px;
      }
    }
  }
}
@keyframes left {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
}
@keyframes right {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
}
</style>
