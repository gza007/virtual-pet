const Pet = require('../src/pet');

describe('Object', () => {
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
});

describe('Name', () => {
  it('sets the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });
});

describe('Initial Age', () => {
  it('has an initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });
});

describe('growUp', () => {
  it('increments the age by 1', () => {
    const pet = new Pet('Fido');
    pet.growUp();
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
});

describe('Initial hunger', () => {
  it('has an initial hunger of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.hunger).toEqual(0);
  });
});

describe('Initial fitness', () => {
  it('has an initial fitness of 10', () => {
    const pet = new Pet('Fido');
    expect(pet.fitness).toEqual(10);
  });
});

describe('walk', () => {
  it('increases fitness level by 4, to a maximum of 10', () => {
    const pet = new Pet('fido');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
    pet.fitness = 2;
    pet.walk();
    expect(pet.fitness).toEqual(6);
  });
});

describe('feed', () => {
  it('decreases hunger level by 3, to a minimum of 0', () => {
    const pet = new Pet('fido');
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
    pet.hunger = 4;
    pet.feed();
    expect(pet.hunger).toEqual(1);
  });
});

describe('checkUp', () => {
  it('describes how the pet is feeling, based on hunger and fitness levels', () => {
    const pet = new Pet('fido');
    pet.fitness = 2;
    pet.hunger = 1;
    pet.checkUp();
    expect('I need a walk');
    pet.fitness = 5;
    pet.hunger = 9;
    pet.checkUp();
    expect('I am hungry');
    pet.fitness = 2;
    pet.hunger = 6;
    pet.checkUp();
    expect('I am hungry AND I need a walk');
    pet.fitness = 5;
    pet.hunger = 1;
    pet.checkUp();
    expect('I feel great!');
  });
});


describe('isAlive', () => {
  it('shows if pet is alive', () => {
    const pet = new Pet('Fido');
    pet.fitness = 1;
    pet.hunger = 9;
    pet.age = 29;
    expect(pet.isAlive).toBe(true);    
    pet.fitness = -2;
    pet.hunger = 7;
    pet.age = 15;
    expect(pet.isAlive).toBe(false);
    pet.fitness = 1;
    pet.hunger = 15;
    pet.age = 3;
    expect(pet.isAlive).toBe(false);
    pet.fitness = 10;
    pet.hunger = 8;
    pet.age = 31;
    expect(pet.isAlive).toBe(false);
  });
});