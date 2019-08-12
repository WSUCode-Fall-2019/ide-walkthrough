class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.name = 'rectangle'
  }

  get area() {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length)
    this.name = "square";
  }
}
