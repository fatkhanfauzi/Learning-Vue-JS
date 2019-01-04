new Vue({
    el: '#app',
    data: {
        playerPoint: 100,
        monsterPoint: 100,
        onGame: false,
        reset: false,
        logs: []
    },
    methods: {
      startGame: function() {
        this.onGame = true;
        this.playerPoint = 100;
        this.monsterPoint = 100;
        this.logs = [];
      },
      attack: function() {
        this.playerPoint -= this.generateNumber(1, 10)
        this.monsterPoint -= this.generateNumber(1, 10)
      },
      specialAttack: function() {
        this.playerPoint -= this.generateNumber(1, 15)
        this.monsterPoint -= this.generateNumber(1, 10)
      },
      heal: function() {
        if (this.playerPoint <= 90) {
          this.playerPoint += 10
        } else if (this.playerPoint < 100) {
          this.playerPoint += (100 - this.playerPoint)
        }
        this.monsterPoint -= this.generateNumber(1, 10)
      },
      giveUp: function() {
        var answer = confirm("do you want to play a new game ?");
        if (answer) {
          this.reset = true;
          this.startGame();
        }
      },
      generateNumber: function(min, max){
        return Math.floor(Math.random() * max + min)
      }
    },
    watch: {
      playerPoint: function (oldValue, newValue) {
        if (this.reset) {
          this.reset = false;
          return;
        }

        if (newValue <= 0) {
          this.giveUp();
        }

        if (oldValue < newValue) {
          this.logs.push({ class: 'player-turn', value: 'PLAYER HITS MONSTER FOR ' + (newValue - oldValue) })
        } else {
          this.logs.push({ class: 'player-turn', value: 'PLAYER HEAL HIMSELF FOR ' + (oldValue - newValue) })
        }
      },
      monsterPoint: function (oldValue, newValue) {
        if (this.reset) {
          this.reset = false;
          return;
        }

        if (newValue <= 0) {
          this.giveUp();
        }

        if (oldValue < newValue) {
          this.logs.push({ class: 'monster-turn', value: 'MONSTER HITS PLAYER FOR ' + (newValue - oldValue) })
        }
      },
    },
});
