class Question {
   constructor() {
      //title
      this.title = createElement('h1')
      //inputs
      this.input1 = createInput("Enter your NAME")
      this.input2 = createInput("Enter the seriel.no. ONLY")

      //button
      this.button = createButton("SUBMIT")
      //options
      this.option1 = createElement('h2')
      this.option2 = createElement('h2')
      this.option3 = createElement('h2')
      this.option4 = createElement('h2')
      //question
      this.question = createElement('h2')
this.note=createElement('h4')

   }
   hide() {
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.question.hide();
      this.note.hide()
   }

   display() {
      //title
      this.title.html("MY QUIZ GAME")
      this.title.position(130, -10)

      //question

      this.question.html("It's A Riddle : I'm TALL when I'm young, I'm SHORT when I'm old. WHO AM I??")
      this.question.position(20, 76)

      this.option1.html("1)   FIRE")
      this.option1.position(37, 145)

      this.option2.html("2)  AGE")
      this.option2.position(37, 195)

      this.option3.html("3)  CANDLE")
      this.option3.position(37, 245)

      this.option4.html("4)  NONE OF THE ABOVE")
      this.option4.position(37, 295)
      //input 1
      this.input1.position(37, 370)
      //input 2
      this.input2.position(37 + 200, 370)
      // button
      //NOTE
      this.note.html(" Note*CAN BE ONLY PLAYED WITH 4 PLAYERS")
      this.note.position(500,13)
      this.button.position(500, 370)
      this.button.mousePressed(() => {
         this.input1.hide()
         this.input2.hide()
         this.button.hide()

         contestant.name = this.input1.value();
         contestant.answer = this.input2.value();
         contestantCount += 1;
         contestant.index = contestantCount;
         contestant.update();
         contestant.updateCount(contestantCount);


      })


   }
}
