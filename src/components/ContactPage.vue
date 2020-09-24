<template>
  <div class="contact">
    <h2>Contact Me..</h2>
    <div class="contact__list">
      <div class="contact__email">
        <i class="fas fa-envelope"></i> Email
        <div class="text-secondary">email@email.com</div>
      </div>
      <div class="contact__phone">
        <i class="fas fa-mobile-alt"></i> Phone
        <div class="text-secondary">+1 (555) 555-5555</div>
      </div>
      <div class="contact__address">
        <i class="fas fa-marker-alt"></i> Address
        <div class="text-secondary">123 First St. Houston, TX</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/mixins/_config.scss';

.contact {
  height: 80vh;
  padding-top: 25vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  h2 {
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: 200;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    font-size: 1.5rem;
  }
}
.text-secondary{
    color: $secondary-color;
}
</style>