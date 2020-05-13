<template>
  <div class="tdd-notification">
    <div class="tdd-notification__title">
      {{ title }}
    </div>
    <button class="tdd-notification__close-button" v-if="this.showClose">
      x
    </button>
    <div class="tdd-notification__message">
      {{ message }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Notification",
  props: {
    // 自定义头部
    title: {
      type: String,
      default: "提示"
    },
    // 消息正文
    message: {
      type: String,
      default: "描述"
    },
    // 是否显示关闭按钮
    showClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  }
};
</script>
