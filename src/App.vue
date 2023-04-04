<script>
import { RouterLink, RouterView } from 'vue-router';

import DefaultHeader from '@/components/template/DefaultHeader.vue';
import DefaultNav from '@/components/template/DefaultNav.vue';
import DefaultFooter from "@/components/template/DefaultFooter.vue";

export default {
  components: {
    DefaultFooter,
    DefaultHeader,
    DefaultNav,
    RouterLink,
    RouterView,
  },
};
</script>

<template lang="pug">
RouterView(v-slot="{ Component, route }")
  DefaultHeader.header
    | Just look at this beautiful picture...
  DefaultNav.nav
    template(v-slot:navigation)
      RouterLink(to="/" class="link" class-active="link__active") Home
      .divider •
      RouterLink(to="/about" class="link" class-active="link__active") About
  transition(name="fade")
    component(:is="Component")
  DefaultFooter.flex
    div
      | Now you are here: <i>{{ route.meta.description }}</i>
    .text-align-right
      | anonymous &copy; 2023
</template>

<style lang="scss" scoped>
/* This part is copied from the Vue3 Transitions documentation */
.fade-enter-active, .fade-leave-active { transition: opacity var(--default-duration) ease; }
.fade-enter-from,  .fade-leave-to { opacity: 0; }
/*
  we should wait for the mounted item to appear, as it will shift up
  after the previous item have unmounted
 */
.fade-enter-to { transition-delay: var(--default-duration); }

i { color: indianred; }

.header {
    /* imported Google-font */
    font-family: 'Satisfy', cursive;
    font-size: 4rem;
    line-height: 20vh;
    padding-left: 3rem;
}

nav {
    text-align: center;
    user-select: none!important;

    .link {
        color: var(--secondary-color);
        margin: 2rem 0;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        transition: opacity .3s ease-in-out;
        opacity: 0.6;
        &:hover {
          cursor: pointer; opacity: 1;
        }
    }

    .divider {
        display: inline-block;
        width: 3rem;
        color: var(--secondary-color);
        opacity: 0.6;
        text-align: center;
    }
}
</style>


