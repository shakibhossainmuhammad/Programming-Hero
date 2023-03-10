class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class Instructor extends TeamMember {
  designation = 'Web Course Instaructor';
  team = 'Web Team';
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(time) {
    console.log(`start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quize for module ${module}`);
  }
}

class Developer extends TeamMember {
  designation = 'Web Course Instaructor';
  team = 'Web Team';
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  developFeature(feature) {
    console.log(`Please develop the  ${feature}`);
  }
  release(version) {
    console.log(`please release the version ${version}`);
  }
}

class JobPlacement extends TeamMember {
  designation = 'Job Placement Commando';
  team = 'Job Placement Team';

  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  provideResume(feature) {
    console.log(`Please develop the  ${feature}`);
  }
  propareStudent(version) {
    console.log(`please release the version ${version}`);
  }
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
// console.log(alia);
alia.provideFeedback();

const bipasha = new JobPlacement('bipasha', 'Kolkata', 'Front End');
console.log(bipasha);
bipasha.provideFeedback();
