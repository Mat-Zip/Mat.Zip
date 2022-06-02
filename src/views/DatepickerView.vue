<template>
  <div class="dp-view">
    <dp-comp class="dp-comp" />
    <cld-comp class="cld-comp" />
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
  height: 70vh;
}

.dp-comp {
  float: left;
  width: 20%;
  height: 100%;
}

.cld-comp {
  float: right;
  width: 80%;
  height: 100%;
}
</style>
