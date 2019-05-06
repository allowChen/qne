<template>
    <div class="qne-Footer">
      <div class="footer-img"></div>
    </div>
</template>

<script>
    export default {
        name: "qneFooter"
    }
</script>

<style scoped lang="less">
  .qne-Footer {
    height: .4rem;
    width: 100%;
    .footer-img {
      width: 100%;
      height: .4rem;
      display: block;
      background: url("../../assets/images/footer.png") no-repeat center center;
      background-size: cover;
    }
  }
</style>
