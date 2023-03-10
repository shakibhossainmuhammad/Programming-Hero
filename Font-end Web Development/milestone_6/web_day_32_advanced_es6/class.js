// syntactic sugar

class Instructor {
  name;
  designation = 'Web Course Instaructor';
  team = 'Web Team';
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quize for module ${module}`);
  }
}
const ammir = new Instructor('ammir', 'Dhaka');
console.log(ammir);
ammir.startSupportSession('9.00');
ammir.createQuiz(60);

const solaiman = new Instructor('Shakib Khan', 'Rangpur');
console.log(solaiman);
