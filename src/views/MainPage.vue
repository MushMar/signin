<template>
  <div class="main__page">
    <div class="main">
      <h2 class="main__title">Hello, John Doe!</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  padding: 40px;
  background: #faf3f3 url("../assets/images/main-image.png") no-repeat bottom;
  background-size: contain;
  &__page {
    margin: 0 auto;
    width: 302px;
    min-height: 100%;
  }
  &__title {
    margin-top: 110px;
    font-weight: 800;
    font-size: 22px;
    line-height: 30px;
    color: #181c43;
    animation: 1s anim;
  }
}
@keyframes anim {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
}
</style>
