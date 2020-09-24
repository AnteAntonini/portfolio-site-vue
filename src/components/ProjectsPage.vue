<template>
  <section class="projects">
    <div class="projects__bio-image">
      <h1 class="text-secondary">My Projects</h1>
    </div>
    <div class="background-items">
        <div class="projects__items">
        <div class="projects__item">
            <img src="../assets/project-1.jpg" alt="My Project" />
            <div class="projects__btns">
            <a href="#!" class="projects__btn">
                <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
                <i class="fab fa-github"></i> Github
            </a>
            </div>
        </div>
        <div class="projects__item">
            <img src="../assets/project-2.jpg" alt="My Project" />
            <div class="projects__btns">
            <a href="#!" class="projects__btn">
                <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
                <i class="fab fa-github"></i> Github
            </a>
            </div>
        </div>
        <div class="projects__item">
            <img src="../assets/project-3.jpg" alt="My Project" />
            <div class="projects__btns">
            <a href="#!" class="projects__btn">
                <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
                <i class="fab fa-github"></i> Github
            </a>
            </div>
        </div>
        <div class="projects__item">
            <img src="../assets/project-4.jpg" alt="My Project" />
            <div class="projects__btns">
            <a href="#!" class="projects__btn">
                <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
                <i class="fab fa-github"></i> Github
            </a>
            </div>
        </div>
        <div class="projects__item">
            <img src="../assets/project-5.jpg" alt="My Project" />
            <div class="projects__btns">
            <a href="#!" class="projects__btn">
                <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
                <i class="fab fa-github"></i> Github
            </a>
            </div>
        </div>
        <div class="projects__item">
            <img src="../assets/project-6.jpg" alt="My Project" />
            <div class="projects__btns">
            <a href="#!" class="projects__btn">
                <i class="fas fa-eye"></i> Preview
            </a>
            <a href="#!" class="projects__btn">
                <i class="fab fa-github"></i> Github
            </a>
            </div>
        </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/mixins/_config.scss';

.projects {
    height: 80vh;

  &__bio-image {
    height: 25vh;
    width: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    .text-secondary {
      font-size: 3rem;
      font-weight: 200;
      color: $secondary-color;
    }
  }
  .background-items {
    height: 70vh;
    width: 100%;
    background: rgb(44, 42, 42);
  }

  &__items {
    width: 50vw;
    margin: 2rem auto 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    padding-top: 2rem;
  }

  &__item {
    position: relative;
    border-bottom: 5px solid $secondary-color;
    overflow: hidden;
    cursor: pointer;

    img {
      width: 100%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 0;
      height: 100%;
      width: 100%;
      background: $secondary-color;
      opacity: 0;
      @include transition-ease;
    }

    &:hover {
      &::after {
        top: 0;
        opacity: 0.9;
      }
      .projects__btn {
        opacity: 1;
      }
    }
  }

  &__btns {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: center;
  }

  &__btn {
    opacity: 0;
    color: set-text-color($secondary-color);
    @include transition-ease;

    &:hover {
      color: set-text-color(set-text-color($secondary-color));
    }
  }
}
</style>