class Vector3 {
  constructor(x = 0,y = 0,z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  get absoluteMagnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
  }
  static add(v1, v2) {
    if (!(v1 instanceof Vector3 && v2 instanceof Vector3)) {
      throw new TypeError("Vector3.add() requires two arguments which must be instance of Vector3!");
    } else {
      return new Vector3(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }
  }
  static scale(v1, s) {
    if (!(v1 instanceof Vector3) || isNaN(s)) {
      throw new TypeError("Vector3.scale() requires two arguments. \n First must be Vector3 and the second a Number.");
    } else {
      return new Vector3(v1.x * s, v1.y * s, v1.z * s);
    }
  }
}
