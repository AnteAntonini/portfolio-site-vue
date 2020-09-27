<template>
    <section class="about">
        <div class="about-bio">
            <div class="about-bio-text">
                <h2 class="text-secondary">BIO</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt ut sequi fuga iusto est consectetur porro consequuntur delectus.
                Quod, accusantium?</p>
            </div>
        </div>
        <div class="jobs">
            <div class="job-list">
                <div class="job-list-card">
                    <h2>2020 - Current</h2>
                    <h3>Google</h3>
                    <h6>Front End Developer</h6>
                    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div class="job-list-card">
                    <h2>2020 - Current</h2>
                    <h3>Google</h3>
                    <h6>Front End Developer</h6>
                    <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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

.about{
    color: white;
    height: 80vh;
    &-bio{
        display: flex;
        flex-direction: column; 
        justify-content: flex-end;
        height: 35vh;
        width: 100%;
        margin-bottom: 2em;
        line-height: 1;
        &-text{
            width: 60%;
            margin: 0 auto;
        }
    }
}
p{
    font-size: 1.5rem;
}
.jobs{
    height: 53vh;
    width: 100%;
    background: rgb(44, 42, 42);
    display: inline-block;
}
.job-list{
    width: 60%;
    height: 100%;
    margin: 0 auto;
    &-card {
        margin-top: 2em;
        display: flex;
        flex-direction: column; 
        height: 30%;
        width: 100%;
        background: rgb(35, 33, 33);
        align-items: flex-start;
        padding: 0.5rem;
        border-bottom: 2px solid $secondary-color;
    }
    p{
        font-size: 1rem;
    }
    h2 {
        font-size: 1.3rem;
        color: $secondary-color;
    }
    h3 {
        font-size: 0.8rem;
    }
}
.text-secondary{
    color: $secondary-color;
    font-size: 2.2rem;
    font-weight: 300;
    padding-bottom: 2rem;
}
</style>