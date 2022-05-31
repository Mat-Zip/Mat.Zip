<template>
  <div class="cld-view">
    <cld-comp />
  </div>
</template>
<script>
import CldComp from "@/components/CldComp.vue";

export default {
  components: { CldComp },
};
</script>

<style scoped>
.cld-view {
  width: 70vw;
  margin: auto;
}
</style>
