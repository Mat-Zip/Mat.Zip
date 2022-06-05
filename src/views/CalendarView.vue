<template>
  <div class="cld_view">
    <cld-comp :isRoutingDpView="false" />
  </div>
</template>
<script>
import CldComp from "@/components/CldComp.vue";

export default {
  components: { CldComp },
};
</script>

<style scoped>
.cld_view {
  width: 70vw;
  margin: auto;
  height: calc(100vh-82px);
}
</style>
