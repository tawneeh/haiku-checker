import Haiku from './../src/js/haiku.js';

describe( 'Haiku', () => {

  let haiku;

  beforeEach(() => {
    haiku = new Haiku("A world of dew", "And within every dewdrop", "A world of struggle");
  });

  test('should correctly create a Haiku object', () => { 
    expect(haiku.line1).toEqual("A world of dew");
    expect(haiku.line2).toEqual("And within every dewdrop");
    expect(haiku.line3).toEqual("A world of struggle");
  });

  test('should return true if an instance of Haiku has three lines', () => {
    expect(haiku.checkLines()).toBeTruthy();
    expect(haiku.checkLines()).toBeTruthy();
    expect(haiku.checkLines()).toBeTruthy();
  });

  test('should return false if an instance of Haiku does not have three lines', () => {
    const falseHaiku = new Haiku(10,11,12);
    expect(falseHaiku.checkLines()).toBeFalsy();
    expect(falseHaiku.checkLines()).toBeFalsy();
    expect(falseHaiku.checkLines()).toBeFalsy();
  });
});