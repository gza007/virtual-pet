const Pet = require('../src/pet');

describe('Constructor', () => {
  const pet = new Pet('Fido');
  it('returns an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
  it('sets the name property', () => {
    expect(pet.name).toEqual('Fido');
  });
  it('has an initial age of 0, hunger of 0 and fitness of 10', () => {
    expect(pet.age).toEqual(0);
    expect(pet.hunger).toEqual(0);
    expect(pet.fitness).toEqual(10);
  });
});

describe('growUp', () => {
  const pet = new Pet('Fido');
  it('increments the age by 1', () => {
    pet.growUp();
    expect(pet.age).toEqual(1);
    expect(pet.hunger).toEqual(5);
    expect(pet.fitness).toEqual(7);
  });
  it('throws an error if the pet is not alive', () => {
    pet.age = 30;
    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
  });
});

describe('walk', () => {
  const pet = new Pet('fido');
  it('increases fitness level by 4, to a maximum of 10', () => {
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
    pet.fitness = 2;
    pet.walk();
    expect(pet.fitness).toEqual(6);
  });
  it('throws an error if the pet is not alive', () => {
    pet.age = 30;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  });
});

describe('feed', () => {
  const pet = new Pet('fido');
  it('decreases hunger level by 3, to a minimum of 0', () => {
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
    pet.hunger = 4;
    pet.feed();
    expect(pet.hunger).toEqual(1);
  });
  it('throws an error if the pet is not alive', () => {
    pet.age = 30;
    expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
  });
});

describe('checkUp', () => {
  const pet = new Pet('fido');
  it('shows how the pet is feeling, based on hunger and fitness levels', () => {
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
  it('throws an error if the pet is not alive', () => {
    pet.age = 30;
    expect(() => pet.checkUp()).toThrow('Your pet is no longer alive :(');
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
    pet.hunger = 10;
    pet.age = 3;
    expect(pet.isAlive).toBe(false);
    pet.fitness = 10;
    pet.hunger = 8;
    pet.age = 31;
    expect(pet.isAlive).toBe(false);
  });
});

describe('adoptChild', () => {
  const parent = new Pet('Fido');
  const child = new Pet('Nino');
  it('creates child which inherits parents properties', () => {
    parent.adoptChild(child);
    expect(parent.children).toEqual([{
      name: 'Nino', age: 0, hunger: 0, fitness: 10, children: [],
    }]);
  });
  it('throws an error if the pet is not alive', () => {
    parent.age = 30;
    expect(() => parent.checkUp()).toThrow('Your pet is no longer alive :(');
  });
});
