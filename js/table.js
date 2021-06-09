Vue.component('column', {
    template: `
        <div class="col">
            <slot></slot>
        </div>
    `
})
Vue.component('heading', {
    props: ['category'],
    template: `
        <div class="heading">
            <h1 v-html="category"></h1>
        </div> 
    `
})
Vue.component('cell', {
    props: ['points', 'question', 'answers', 'correct'],
    data: function() {
        return {
            userAnswer: "",
            result: null, 
            show: false,
            completed: false
        }
    },
    watch: {
        userAnswer: function() {
            this.completed = true;
            if (this.userAnswer==this.correct) {
                this.result = true;
                jeopardy.score = jeopardy.score + this.points;
            } else {
                this.result = false;
                jeopardy.score = jeopardy.score - this.points;
            }
        }
    },
    methods: {
        set_answer: function(letter) {
            if (this.completed==false){
                this.userAnswer=letter;
            }
        }
    },
    computed: {
        classObject: function() {
            return {
                correct: this.completed && this.correct==this.userAnswer,
                incorrect: this.completed && this.correct!=this.userAnswer
            }
        }
    },
    template: `
        <div class="cell">
            <div class="points" @click="show=!show" v-bind:class="classObject">
                <h2 v-html="points"></h2>
            </div>
            <div class="question" v-if="show" v-bind:class="classObject">
                <h3 v-html="question"></h3>
                <h4 v-for="(answer, letter) in answers" 
                @click="set_answer(letter)">
                    {{letter}}. {{answer}}
                </h4>
                <h3 v-if="result==false">The correct answer is {{correct}}</h3>
                <h3 v-if="result==true">Correct!</h3>
                <div class="container-button" v-if="completed">
                    <button @click="show=!show">Return</button>
                </div>
            </div>
        </div> 
    `
})
