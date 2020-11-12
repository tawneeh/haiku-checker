describe( 'Haiku', () => {

  test('should correctly create a Haiku object', () => { 
    const haiku = new Haiku("A world of dew", "And within every dewdrop", "A world of struggle");
    expect(haiku.line1).toEqual("A world of dew");
    expect(haiku.line2).toEqual("And within every dewdrop");
    expect(haiku.line3).toEqual("A world of struggle");
  });
});