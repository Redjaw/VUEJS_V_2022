const test = {
    data(){
        return {
            testString: 'ciao Mondo'
        }
    },
    methods: {
        logToConsole(something) {
            console.log('dal mixin', something)
        }
    },
}

export default test