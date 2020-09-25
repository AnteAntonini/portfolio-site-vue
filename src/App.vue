<template>
  <div id="app">
    <TheNavigation @clicked="onClickChild"/>
    <router-view v-show="!active"/>
    <TheFooter v-show="!active"/>
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
import TheFooter from '@/components/TheFooter'

export default {
  data() {
    return {
      active: null
    }
  },
  components: {
    TheNavigation,
    TheFooter
  },
  name: 'App',
  computed: {
    headerFooter() {
      return {
        header: TheNavigation,
        footer: TheFooter
      }
    }
  },
  methods: {
    onClickChild(value) {
      this.active = value
    }
  }
}
</script>

<style lang="scss">
@import '@/mixins/_config.scss';
@import '@/mixins/_responsive.scss';
@import url('https://fonts.googleapis.com/css2?family=Nunito&family=Yantramanav:wght@200;400&display=swap');

#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  align-items: center;
  text-align: center;
  font-family: Nunito;
  background: 
    linear-gradient(
      to right,
      rgba($primary-color, 0.9),
      rgba($primary-color, 0.3)
    ),
    url('./assets/model-1.jpg') center top;
  background-size: cover;

  &__name {
    font-size: 5rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid set-text-color($primary-color);

    &--last {
      color: #ff652f;
      font-weight: 700;
    }
  }
}

</style>
