class Quiz {
  constructor() {

  }
  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })
  }
  update(state) {
    database.ref('/').update({
      gameState: state
    })
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val()
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }


  play() {
    question.hide();
    background(result)
    textSize(30);
    fill("black");
    text(" YOUR RESULTS :", 520, 100);
    textSize(20)
    text("NOTE* Contestants Who Answerd Correctly Are Highlighted In Green.",220,350)
    contestant.getContestantInfo();

    if (allContestants !== undefined) {
      var display_position = 130;
      var correctOption = "3"
      for (var con in allContestants) {

        if (correctOption === allContestants[con].Answer) {
          fill("Green")
        
        } else {
          fill("red");
          
        }
        display_position += 30;
        textSize(25);

        text(allContestants[con].Name + ": " + allContestants[con].Answer, 620, display_position)

      }


    }

  }
}

