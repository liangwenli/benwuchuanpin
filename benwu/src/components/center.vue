// 个人中心
<template>
  <div class="user-center">
    <header class="center-header">

    </header>
    <main class="center-main">
      <div class="order-part">
        <div class="order-title">
          <h2>我的订单</h2>
          <span class="el-icon-arrow-right"></span>
        </div>
        <div class="order-list">
          <a
            class="order-btn"
            href="javascript:void(0)"
          >
            <span class="el-icon-bank-card"></span>
            <h2>待付款</h2>
          </a>

          <a
            class="order-btn"
            href="javascript:void(0)"
          >
            <span class="el-icon-s-order"></span>
            <h2>待接单</h2>
          </a>

          <a
            class="order-btn"
            href="javascript:void(0)"
          >
            <span class="el-icon-takeaway-box"></span>
            <h2>待发货</h2>
          </a>

          <a
            class="order-btn"
            href="javascript:void(0)"
          >
            <span class="el-icon-truck"></span>
            <h2>已发货</h2>
          </a>

          <a
            class="order-btn"
            href="javascript:void(0)"
          >
            <span class="el-icon-s-claim"></span>
            <h2>已完成</h2>
          </a>
        </div>
      </div>

      <div class="center-list"></div>
    </main>
  </div>
</template>

<script>
export default {
  components: {

  }
};
</script>

<style src="../../public/css/center.css"></style>