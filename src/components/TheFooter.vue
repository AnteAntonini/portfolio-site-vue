<template>
    <footer class="foot">
        <div class="social-icons">
        <a href="#!">
          <i class="fab fa-twitter fa-2x"></i>
        </a>
        <a href="#!">
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a href="#!">
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a href="https://github.com/AnteAntonini" target="_blank">
          <i class="fab fa-github fa-2x"></i>
        </a>
      </div>    
        <span>&copy; Copyright 2020</span>
    </footer>
</template>

<script>
export default {
    
}
</script>

<style lang="scss"  scoped>
@import '@/mixins/_config.scss';

.foot {
    height: 10vh;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.social-icons {
    color: white;
    i {
        padding-right: 1rem;
        color: white;
        
        &:hover {
        color: $secondary-color;
      }
    }
}

span {
    font-size: 1rem;
    color: white;
}
</style>