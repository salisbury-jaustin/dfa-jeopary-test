var jeopardy = new Vue({
    el: '#jeopardy',
    data: {
        rawEmail: "",
        email: null,
        score: 0
    },
    methods: {
        set_email: function() {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@dfamilk.com/.test(this.rawEmail)){
                this.email = this.rawEmail;
            } 
        }
    },
    computed: {
        game_data: function() {
            return this.$game_data;
        }, 
        categories: function() {
            return this.game_data.categories;
        } 
    } 
})