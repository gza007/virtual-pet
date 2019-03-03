function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
  this.children = [];
}

Pet.prototype = {
  get isAlive() {
    return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
};

Pet.prototype.growUp = function () {
  if (!this.isAlive) {throw new Error('Your pet is no longer alive :(')};
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

const MAXIMUM_FITNESS = 10;
const POINTS_FOR_WALK = 4;

Pet.prototype.walk = function () {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  } else if ((this.fitness + POINTS_FOR_WALK) <= MAXIMUM_FITNESS) { 
    this.fitness += POINTS_FOR_WALK;
  } else {
    this.fitness = MAXIMUM_FITNESS;
  };
};

const MINIMUM_HUNGER = 0;
const POINTS_FOR_FEED = 3;

Pet.prototype.feed = function () {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  } else if ((this.hunger - POINTS_FOR_FEED) >= MINIMUM_HUNGER) {
    this.hunger -= POINTS_FOR_FEED;
  } else {
    this.hunger = MINIMUM_HUNGER;
  };
};

const NEED_WALK = 3;
const NEED_FEED = 5;

Pet.prototype.checkUp = function () {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  } else if ((this.fitness <= NEED_WALK) && (this.hunger < NEED_FEED)) {
    return 'I need a walk';
  } else if ((this.fitness > NEED_WALK) && (this.hunger >= NEED_FEED)) {
    return 'I am hungry';
  } else if ((this.fitness <= NEED_WALK) && (this.hunger >= NEED_FEED)) {
    return 'I am hungry AND I need a walk'
  } else {
    return 'I feel great!';
  };
};

Pet.prototype.adoptChild = function (child) {
  if (!this.isAlive) {
    throw new Error('Your pet is no longer alive :(');
  }
  this.children.push(child);
};

module.exports = Pet;
