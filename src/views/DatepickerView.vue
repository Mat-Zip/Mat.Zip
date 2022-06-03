<template>
  <div class="dp-view">
    <dp-comp class="dp-comp" :isRoutingDpView="true" />
    <cld-comp class="cld-comp" :isRoutingDpView="true" />
  </div>
</template>
<script>
import DpComp from "@/components/DpComp.vue";
import CldComp from "@/components/CldComp.vue";
export default {
  components: { DpComp, CldComp },
};
</script>

<style scoped>
.dp-view {
  display: flex;
}

.cld-comp {
  width: 80%;
}
</style>
