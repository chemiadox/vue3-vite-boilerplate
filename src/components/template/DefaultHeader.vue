<template lang="pug">
header
  ElementHelper header
  slot
</template>

<script>
import ElementHelper from "@/components/helpers/ElementHelper.vue";

export default {
  name: 'DefaultHeader',
  components: { ElementHelper },
};
</script>

<style lang="postcss" scoped>
header {
  position: relative;
  width: 100%;
  height: 20vh;
  padding: var(--default-padding);
  margin: var(--default-margin);

  color: var(--color);
  background-color: var(--header-color);
  background-image: url('@/assets/images/dark-woods.webp');

  user-select: none;
}
</style>
