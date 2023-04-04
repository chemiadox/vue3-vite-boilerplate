<template lang="pug">
.helper-wrapper
  slot
</template>

<style scoped>
.helper-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - 2px);
    text-align: right;
    padding: .3rem;
    margin: 1px;
    font: .5rem Verdana;
    font-weight: bold;
    color: var(--dark-color);
    pointer-events: none;
}
</style>