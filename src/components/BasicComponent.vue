<template>
    <div>
        <ul>
            <li v-for="(movie, index) in marvelMovies" :key="index" data-test="movies">
                <span>{{movie.name}}</span><span>{{movie.year}}</span>
            </li>
        </ul>
        <div data-test="testPropGetter" v-if="testProp">{{testProp}}</div>
    </div>
</template>
    
<script>
export default {
    props: ['testProp'],
    data() {
        return {
            marvelMovies: [
                { name: "Iron man", year: 2013 },
                { name: "Avengers", year: 2016 },
                { name: "guardians of the galaxy", year: 2017 },
                { name: "infinity War", year: 2019 }
            ]
        }
    }
}
</script>