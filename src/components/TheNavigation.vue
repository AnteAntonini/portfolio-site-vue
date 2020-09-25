<template>
  <div class="navbar-container">
    <div class="menu-btn" @click="open" :class="{active: isActive}">
      <span class="menu-btn__burger"></span>
    </div>
    <nav class="nav" :class="{active: isActive}">
      <ul class="menu-nav" :class="{active: isActive}">
        <li class="menu-nav__item" @click="open">
          <router-link tag="a" :to="{name: 'HomePage'}" class="menu-nav__link">
            Home
          </router-link>
        </li>
        <li class="menu-nav__item" @click="open">
          <router-link :to="{name: 'AboutPage'}" class="menu-nav__link">
            About Me
          </router-link>
        </li>
        <li class="menu-nav__item" @click="open">
          <router-link :to="{name: 'ProjectsPage'}" class="menu-nav__link">
            My Projects
          </router-link>
        </li>
        <li class="menu-nav__item" @click="open">
          <router-link :to="{name: 'ContactPage'}" class="menu-nav__link">
            Contact Me
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    open() {
      this.isActive = !this.isActive
      this.$emit('clicked',this.isActive)
    }
  }
}
</script>


<style lang="scss" scoped>
@import '@/mixins/_config.scss';

//NAVBAR 
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
  padding: 0;
  
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

//MENU BUTTON
.menu-btn {
  position: absolute;
  z-index: 1;
  right: 1rem;
  top: 1.5rem;
  height: 20px;
  width: 28px;
  cursor: pointer;
  @include transition-ease;

  &__burger {
    position: absolute;
    right: 0;
    top: 0.5rem;
    width: 28px;
    height: 3px;
    color: white;
    background: set-text-color($primary-color);
    @include transition-ease;

    &::before {
    content: '';
    position: absolute;
    right: 0;
    top: -8px;
    width: 28px;
    height: 3px;
    background: set-text-color($primary-color);
    @include transition-ease;
  }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 8px;
      width: 24px;
      height: 3px;
      background: set-text-color($primary-color);
      @include transition-ease;
    }
  }
}

.nav {

  &.active {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
    background: $primary-color;
    list-style-type: none;
    padding-right: 1rem;
    @include transition-ease;
  }


  .menu-nav.active {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    transform: translateY(100%);
    @include transition-ease;

    &__item {
      transform: translateX(100vw);
      @include transition-ease;
    }

    &.active {
      transform: translateY(0);
    }
  }
}


@for $i from 1 through 4 {
  .menu-nav__item:nth-child(#{$i}) {
    transform-origin: top center;
    animation: translateX 200ms ($i * 100ms) ease-in-out forwards;
  }
}

@keyframes translateX {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  
  80% {
    transform: translateX(-5px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

</style>