const app = {

    data() {
        return {
            userPick: null,
            randPick: null,
            userScore: 0,
            computerScore: 0,
            result: 'Choose one',
            display: false,
            random: ''
        };
    },
    methods: {
        choose: function(pick) {
            this.userPick = pick;
            const picks = ['rock', 'paper', 'scissors'];
            this.randPick = picks[Math.floor(Math.random() * picks.length)];
            this.setScore();
        },
        onClick: function() {
            this.display = true;
        },
        close: function() {
            this.display = false;
            this.userScore = 0;
            this.computerScore = 0;
            this.result = 'Choose one'
        },
        setScore: function() {
            if (this.userPick == 'rock') {
                if (this.randPick == 'paper') {
                    console.log('Computer wins');
                    this.result = 'Computer wins';
                    this.random = this.randPick;
                    this.computerScore++;
                } else if (this.randPick == 'scissors') {
                    console.log('User wins');
                    this.random = this.randPick;
                    this.result = 'You win';
                    this.userScore++;
                } else {
                    console.log('Draw');
                    this.random = this.randPick;
                    this.result = 'Its a Draw ';
                }
            } else if (this.userPick == 'paper') {
                if (this.randPick == 'rock') {
                    console.log('User wins');
                    this.random = this.randPick;
                    this.result = 'You win';
                    this.userScore++;
                } else if (this.randPick == 'scissors') {
                    console.log('Computer wins');
                    this.random = this.randPick;
                    this.result = 'Computer wins';
                    this.computerScore++;
                } else {
                    console.log('Draw');
                    this.random = this.randPick;
                    this.result = 'Its a Draw';
                }
            } else {
                if (this.randPick == 'rock') {
                    console.log('Computer wins');
                    this.random = this.randPick;
                    this.result = 'Computer wins';
                    this.computerScore++;
                } else if (this.randPick == 'paper') {
                    console.log('User wins');
                    this.random = this.randPick;
                    this.result = 'You win';
                    this.userScore++;
                } else {
                    console.log('Draw');
                    this.random = this.randPick;
                    this.result = 'Its a Draw';
                }
            }
        }
    },
    computed: {
        computedUser: function() {
            return {
                "fa-circle-o-notch fa-spin": this.userPick === null,
                "fa-hand-rock-o": this.userPick === "rock",
                "fa-hand-paper-o": this.userPick === "paper",
                "fa-hand-scissors-o": this.userPick === "scissors"
            };
        },
        computedRand: function() {
            return {
                "fa-circle-o-notch fa-spin": this.randPick === null,
                "fa-hand-rock-o": this.randPick === "rock",
                "fa-hand-paper-o": this.randPick === "paper",
                "fa-hand-scissors-o": this.randPick === "scissors"
            };
        }
    }
};

Vue.createApp(app).mount('#app')