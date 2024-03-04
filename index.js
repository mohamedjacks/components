class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  
    calculatePerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Square {
    constructor(side) {
      this.side = side;
    }
  
    calculateArea() {
      return this.side * this.side;
    }
  
    calculatePerimeter() {
      return 4 * this.side;
    }
  }
  
  class Rectangle {
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
  
    calculateArea() {
      return this.length * this.width;
    }
  
    calculatePerimeter() {
      return 2 * (this.length + this.width);
    }
  }
  
  class Triangle {
    constructor(base, height, side1, side2, side3) {
      this.base = base;
      this.height = height;
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  
    calculatePerimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  }
  
  class Pentagon {
    constructor(side) {
      this.side = side;
    }
  
    calculateArea() {
      return (0.25 * Math.sqrt(5 * (5 + 2 * Math.sqrt(5)))) * this.side * this.side;
    }
  
    calculatePerimeter() {
      return 5 * this.side;
    }
  }
  
  class Hexagon {
    constructor(side) {
      this.side = side;
    }
  
    calculateArea() {
      return (3 * Math.sqrt(3) / 2) * this.side * this.side;
    }
  
    calculatePerimeter() {
      return 6 * this.side;
    }
  }
  
  // Example usage:
  const circle = new Circle(5);
  console.log('Circle Area:', circle.calculateArea());
  console.log('Circle Perimeter:', circle.calculatePerimeter());
  
  const square = new Square(4);
  console.log('Square Area:', square.calculateArea());
  console.log('Square Perimeter:', square.calculatePerimeter());
  
  const rectangle = new Rectangle(3, 6);
  console.log('Rectangle Area:', rectangle.calculateArea());
  console.log('Rectangle Perimeter:', rectangle.calculatePerimeter());
  
  const triangle = new Triangle(4, 5, 3, 4, 5);
  console.log('Triangle Area:', triangle.calculateArea());
  console.log('Triangle Perimeter:', triangle.calculatePerimeter());
  
  const pentagon = new Pentagon(5);
  console.log('Pentagon Area:', pentagon.calculateArea());
  console.log('Pentagon Perimeter:', pentagon.calculatePerimeter());
  
  const hexagon = new Hexagon(6);
  console.log('Hexagon Area:', hexagon.calculateArea());
  console.log('Hexagon Perimeter:', hexagon.calculatePerimeter());
  