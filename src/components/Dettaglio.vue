<template>
    <div class="card">
        <div><img :src="getPizzaImage" class="card-img-top"/></div>
        
        <div class="card-body">
            <h5 class="card-title">{{currentPizza.name}} - {{currentPizza.price}} €</h5>
            <p class="card-text">
                <div v-for="(ingrediente,index) in currentPizza.ingredients" :key="index">
                    {{ingrediente}}
                </div>
            </p>
            <a @click="showComments" class="btn btn-primary">Comments</a>
        </div>
    </div>
    <div class="card" v-if="comments">
        <div class="card-header">
            Commenti
        </div>
        <div class="card-body">
            <blockquote class="blockquote mb-0" v-for="(commento,index) in currentPizza.comments" :key="index">
                <span class="fa fa-star" v-for="index in commento.rating" :key="index"></span><p>{{commento.comment}}</p>
                <footer class="blockquote-footer">{{commento.author}}</footer>
            </blockquote>
        </div>
    </div>
</template>

<script>
export default ({
    name: "dettaglio",
    props: ['currentPizza'],
    data() {
        return {
            comments: false
        }
    },
    mounted() {
        this.comments = false
    },
    computed: {
        getPizzaImage() {
            return `src/assets/pizze/${this.currentPizza.label}.png`
        }
    },
    methods: {
        showComments() {
            this.comments = !this.comments
        }
    }
});
</script>

<style>
.card-img-top {
    width: 200px !important;
    height: 200px;
    text-align: center;
}
</style>