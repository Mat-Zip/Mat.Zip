<template>
  <div class="dp-view">
    <dp-comp class="dp-comp" />
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
  width: 100%;
  display: flex;
}

.cld-comp {
  width: 100%;
}

.dp-comp {
  width: 43%;
}

@media screen and (max-width: 1200px) {
  .cld-comp {
    display: none;
  }
  .dp-comp {
    width: 100%;
  }
}
</style>
