<template lang="pug">
nav
  ElementHelper nav
  .slots-grid
    .slots-grid__navigation
      slot(name="navigation")
    .slots-grid__icons
      slot(name="icons")
</template>

<script>
import ElementHelper from "@/components/helpers/ElementHelper.vue";

export default {
  name: 'DefaultHeader',
  components: { ElementHelper },
};
</script>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  height: 3rem;
  width: 100vw;
  padding: var(--default-padding);
  margin: var(--default-margin);
  z-index: var(--nav-z-index);

  color: var(--color);
  background-color: var(--nav-color);
  border-bottom: 1px solid #FFFFFF08;

  .slots-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;

    &__navigation { text-align: left; }
  }
}
</style>
