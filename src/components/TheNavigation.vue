<template>
    <nav class="nav">
      <ul class="menu-nav">
        <li class="menu-nav__item">
          <router-link tag="a" :to="{name: 'HomePage'}" class="menu-nav__link">
            Home
          </router-link>
        </li>
        <li class="menu-nav__item">
          <router-link :to="{name: 'AboutPage'}" class="menu-nav__link">
            About Me
          </router-link>
        </li>
        <li class="menu-nav__item">
          <router-link :to="{name: 'ProjectsPage'}" class="menu-nav__link">
            My Projects
          </router-link>
        </li>
        <li class="menu-nav__item">
          <router-link :to="{name: 'ContactPage'}" class="menu-nav__link">
            Contact Me
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>


<style lang="scss" scoped>
@import '@/mixins/_config.scss';

.nav {
    height: 10vh;
    width: 90%;
    top:0;
    margin: 0 auto;
}
.menu-nav {
    height: 100%;
    width: 100%;
    display: flex;
    list-style-type: none;
    justify-content: flex-end;
    align-items: center;
    
}
.menu-nav__item {
    list-style: none;
    margin-left: 2rem;
    
    a {
        text-transform: uppercase;
        font-size: 1.5rem;
        text-decoration: none;
        color: white;

        &:hover {
        color: $secondary-color;
      }
    }
}

li .exact-active  {
  color: $secondary-color;
}

</style>