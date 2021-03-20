'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer: function() {
    const promptNumber = Number(prompt(`${this.question} \n ${this.options.join('\n')}`));

    if ((promptNumber < this.answers.length) && (promptNumber >= 0) && (typeof promptNumber === 'number')) {
        this.answers[promptNumber]++;
        // console.log(this.answers);
        this.displayResults(this.answers);
    } else console.log("Choose a correct answer number!");
  },

  displayResults(type) {
    if(typeof type === 'object') {
      console.log(this.answers);
    } else if (typeof type === 'string') {
      console.log(`Poll results are ${type}`);
    }
  },
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
console.log(typeof poll.answers);