const game = {
    score : document.querySelector(".score"),    
    gameArea : document.querySelector(".gameArea"),
    startScreen : document.querySelector(".startScreen"),

    player : {speed : 5, score :0, start:false },
    keys : {
      ArrowUp: false,
      ArrowDown: false,
      ArrowRight: false,
      ArrowLeft: false,
    },

    initalize : function() { 
      document.addEventListener("keydown", this.pressOn);
      document.addEventListener("keyup", this.pressOff);
    },

    pressOn : function(event) {
      event.preventDefault();      
      game.keys[event.key] = true;
      console.log(game.keys);
    },

    pressOff : function(event) {
      event.preventDefault();
      game.keys[event.key] = false;
      console.log(game.keys);
    },

    start : function() {
      
      console.log("Game started");     

      this.startScreen.classList.add('hide');
      this.gameArea.classList.remove('hide');

      this.player.start = true;  

      for (let x = 0; x < 10; x++) {
        let div = document.createElement("div");
        div.classList.add("line");
        div.y = x * 150;
        div.style.top = x * 150 + "px";
        this.gameArea.appendChild(div);
      }

      window.requestAnimationFrame(this.playGame);

      let car = document.createElement("div"); 
      car.innerText = "Raghav";
      car.setAttribute("class", "car");
      this.gameArea.appendChild(car);
      this.player.x = car.offsetLeft;
      this.player.y = car.offsetTop;   

    },

    moveLines : function() {
      console.log("Move lines");
      let lines = document.querySelectorAll(".line");
        lines.forEach(function (item) {
          if (item.y > 750) {
            item.y -= 750;
          }
          item.y += game.player.speed;
          item.style.top = item.y + "px";
        });
    },    

    playGame : function() {
      console.log("Play now" + game.player.start );
      let car = document.querySelector(".car");
      let road = game.gameArea.getBoundingClientRect();
      console.log(road);

      game.moveLines();

      if(game.player.start){
        if (game.keys.ArrowUp && game.player.y > road.top - 542) {
          game.player.y -= game.player.speed;
        }
        if (game.keys.ArrowDown && game.player.y < road.bottom - 237) {
          game.player.y += game.player.speed;
        }
        if (game.keys.ArrowLeft && game.player.x > 0) {
          game.player.x -= game.player.speed;
        }
        if (game.keys.ArrowRight && game.player.x < road.width - 54) {
          game.player.x += game.player.speed;
        }

        car.style.left = game.player.x + "px";
        car.style.top = game.player.y + "px";
        window.requestAnimationFrame(game.playGame);
      }    
    }
    
}

game.initalize();
