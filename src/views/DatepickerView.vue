<template>
  <div class="dp-view">
    <dp-comp :class="currentClass" />
    <cld-comp v-show="isMobile" class="cld-comp" :isRoutingDpView="true" />
  </div>
</template>
<script>
import DpComp from "@/components/DpComp.vue";
import CldComp from "@/components/CldComp.vue";
export default {
  components: { DpComp, CldComp },
  computed: {
    isMobile() {
      const modalContent=document.querySelector('.modal_content');
      return modalContent.offsetWidth>700;
    },
    currentClass() {
      return this.isMobile ? 'web_view' : 'mobile_view'
    }
  }
};
</script>

<style scoped>
.dp-view {
  width: 100%;
  display: flex;
}

.cld-comp {
  width: 100%;
}

.web_view {
  width: 43%;
}

.mobile_view {
  width: 100%;
}
</style>
