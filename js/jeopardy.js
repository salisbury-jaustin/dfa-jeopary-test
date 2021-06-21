var jeopardy = new Vue({
    el: '#jeopardy',
    data: {
        emailInput: "",
        email: null,
        score: 0,
        profile: null,
    },
    mounted() {
        if (localStorage.getItem('DFAJeopary')) {
            this.profile = JSON.parse(localStorage.getItem('DFAJeopary')); 
            this.email = this.profile.email;
        } else {
            this.profile = {
                email: null,
                highScore: null,
                socialMediaCert: false,
                identityTheftCert: false,
                passwordsCert: false,
                phishingCert: false,
                eskimmingCert: false,
                workCert: false,
                intern: false,
                junior: false,
                chief: false
            }
            let profileString = JSON.stringify(this.profile);
            localStorage.setItem('DFAJeopary', profileString);
        }
    },
    methods: {
        set_email: function() {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@dfamilk.com/.test(this.emailInput)){
                this.email = this.emailInput;
            } 
        }
    },
    computed: {
        game_data: function() {
            return this.$game_data;
        }, 
        categories: function() {
            return this.game_data.categories;
        },
    } 
})