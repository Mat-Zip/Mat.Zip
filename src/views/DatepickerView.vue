<template>
  <div class="dp-view">
    <dp-comp />
    <cld-comp />
  </div>
</template>
<script>
import DpComp from "@/components/DpComp.vue";
import CldComp from "@/components/CldComp.vue";
export default {
  components: { DpComp, CldComp },
};
</script>
