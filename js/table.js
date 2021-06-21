Vue.component('column', {
    props: ['category'],
    data: function() {
        return {
            complete: 0
        }
    },
    watch: {
        complete: function() {
            if (complete == 6) {
                jeopardy.profile[this.category] = true;
            }
        }
    },
    template: `
        <div class="col">
            <input type="hidden"/>
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
    props: ['id', 'points', 'question', 'answers', 'correct'],
    data: function() {
        return {
            userAnswer: "",
            result: null, 
            show: false,
            completed: false,
            initialStyle: {},
            expanded: false
        }           
    },
    mounted: function() {
        this.initialStyle['left'] = this.$refs[this.id].getBoundingClientRect().left + 'px';
        this.initialStyle['top'] = this.$refs[this.id].getBoundingClientRect().top + 'px';
        this.initialStyle['width'] = this.$refs[this.id].offsetWidth + 'px';
        this.initialStyle['height'] = this.$refs[this.id].offsetHeight + 'px';
    },
    watch: {
        userAnswer: function() {
            this.completed = true;
            if (this.userAnswer==this.correct) {
                this.result = true;
                jeopardy.score = jeopardy.score + this.points;
                this.$emit('answercorrect');
            } else {
                this.result = false;
                jeopardy.score = jeopardy.score - this.points;
            }
        }, 
        show: function() {
            if (this.show) {
                this.$refs[this.id].style.setProperty('--cell-position-top', this.initialStyle['top']);
                this.$refs[this.id].style.setProperty('--cell-position-left', this.initialStyle['left']); 
                this.$refs[this.id].style.setProperty('--cell-width', this.initialStyle['width']);
                this.$refs[this.id].style.setProperty('--cell-height', this.initialStyle['height']);
            }
        }, 
        expanded: function() {
            if (this.expanded) {
                this.$refs[this.id].style.setProperty('--cell-position-top', '0px');
                this.$refs[this.id].style.setProperty('--cell-position-left', '0px'); 
                this.$refs[this.id].style.setProperty('--cell-width', '100vw');
                this.$refs[this.id].style.setProperty('--cell-height', '100vh');
            } else {
                this.$refs[this.id].style.setProperty('--cell-position-top', this.initialStyle['top']);
                this.$refs[this.id].style.setProperty('--cell-position-left', this.initialStyle['left']); 
                this.$refs[this.id].style.setProperty('--cell-width', this.initialStyle['width']);
                this.$refs[this.id].style.setProperty('--cell-height', this.initialStyle['height']);
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
        <div class="cell" :ref="id">
            <div class="points" @click="show=!show" v-bind:class="classObject">
                <h2 v-html="points"></h2>
            </div>
            <transition name="expand"
                @after-enter="expanded=true">
                <div class="question" v-if="show" v-bind:class="classObject">
                    <h3 v-html="question"></h3>
                    <h4 v-for="(answer, letter) in answers" 
                    @click="set_answer(letter)">
                        {{letter}}. {{answer}}
                    </h4>
                    <h3 v-if="result==false">The correct answer is {{correct}}</h3>
                    <h3 v-if="result==true">Correct!</h3>
                    <div class="container-button" v-if="completed">
                        <button @click="show=!show; expanded=!expanded">Return</button>
                    </div>
                </div>
            </transition>
        </div> 
    `
})
