export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(value) {
    if (value instanceof Array) {
      if (value.every((el) => typeof el === 'string')) {
        this._students = value;
      } else {
        throw TypeError('All elements of the student array must be strings');
      }
    } else {
      throw TypeError('Students must be an array');
    }
  }

  get students() {
    return this._students;
  }
}
