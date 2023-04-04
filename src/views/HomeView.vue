<script>
import ElementHelper from "@/components/helpers/ElementHelper.vue";
import LoremIpsum from "@/components/mocks/LoremIpsum.vue";

export default {
  components: { LoremIpsum, ElementHelper },
};
</script>

<template lang="pug">
main
  ElementHelper main
  aside
    ElementHelper aside
    | Aside panel
  section
    ElementHelper section
    LoremIpsum
</template>

<style lang="scss" scoped>
aside {
  position: absolute;
  top: 0;
  padding: var(--default-padding);
  overflow: hidden;
  width: 250px;
  left: -245px; /* 5px of 250px to catch mouse */
  height: 100%;
  opacity: 0;
  z-index: 1; /* just to be a bit higher than content */

  &:hover { left: 0; opacity: 1; }

  transition: all var(--default-duration) ease-in-out;
  transition-property: opacity, left;
  color: black;
  background-color: #F8F8F8;
}

section {
  padding: var(--default-padding);
  &:nth-of-type(even) { background-color: var(--section-color-even); }
  &:nth-of-type(odd) { background-color: var(--section-color-odd); }
}
</style>
