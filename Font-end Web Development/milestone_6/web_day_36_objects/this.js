const KodomAli = {
  name: 'Kodom Ali',
  money: 5000,
  study: 'Math',
  subjects: ['calculus', 'algebra', 'geometry'],
  exam: function () {
    console.log(this);
    return this.name + 'is participating in an exam';
  },
  examArrow: () => {
    console.log(this);
  },
  examNested: () => {
    const arrow = () => {
      console.log(this);
    };
    arrow();
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is takeing improvement exam on ${subject}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};

KodomAli.exam();

const badamAli = {
  name: 'kacha badam Ali',
  money: 8000,
};

badamAli.exam = KodomAli.exam;
badamAli.exam();

function clickHander() {
  console.log('inside click handler', this);
}

document.getElementById('btn-click2').addEventListener('click', function () {
  console.log(this);
});
