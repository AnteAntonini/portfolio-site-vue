<template>
    <div class="home">
      <h2>Hi! My Name Is</h2>
      <h1 class="home__name">
        Ante <span class="home__name--last">Antonini</span>
      </h1>
      <h2>
        Student, Web Developer & Programmer
      </h2>
    </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '@/mixins/_config.scss';


.home {
  color: white;
  font-family: 'Nunito', sans-serif;
  height: 80vh;
  padding-top: 28vh;
  overflow: hidden;
  align-items: center;
  text-align: center;
  background: 
    linear-gradient(
      to right,
      rgba($primary-color, 0.9),
      rgba($primary-color, 0.3)
    ),
    url('../assets/model-1.jpg') center top;
  background-size: cover;

  &__name {
    font-size: 5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid set-text-color($primary-color);

    &--last {
      color: #ff652f;
      font-weight: 700;
    }
  }
}
</style>
