export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  checkLines() {
    if (typeof(this.line1) === 'string' && typeof(this.line2) === 'string' && typeof(this.line3) === 'string') {
      return true;
    } else {
      return false;
    }
  }

}