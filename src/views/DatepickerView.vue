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
  data() {
    return {
      dpRad: [20, 0, 0, 20],
    };
  },
};
</script>

<style scoped>
.dp-view {
  display: flex;
  height: 70vh;
}

.dp-comp {
  width: 20%;
}

.cld-comp {
  width: 80%;
}
</style>
