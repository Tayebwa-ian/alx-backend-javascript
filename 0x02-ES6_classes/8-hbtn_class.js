export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw TypeError('size must to be a number');
    }
    this._size = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (typeof value !== 'string') {
      throw TypeError('location must to be a string');
    }
    this._location = value;
  }

  toString() {
    return `${this.location}`;
  }

  valueOf() {
    return `${this.size}`;
  }
}
