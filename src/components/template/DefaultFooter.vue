<template lang="pug">
footer
  ElementHelper footer
  slot
</template>

<script>
import ElementHelper from "@/components/helpers/ElementHelper.vue";

export default {
  name: 'DefaultFooter',
  components: { ElementHelper },
};
</script>

<style lang="postcss" scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5vh;
  padding: var(--default-padding);
  margin: var(--default-margin);
  z-index: var(--footer-z-index);

  color: var(--color);
  background-color: var(--footer-color);
  border-top: 1px solid #FFFFFF08;
}
</style>
