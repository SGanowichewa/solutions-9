// BEGIN
class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    getX() {
      return this.x;
    }
  
    getY() {
      return this.y;
    }
  }
  
  class Segment {
    constructor(beginPoint, endPoint) {
      this.beginPoint = beginPoint;
      this.endPoint = endPoint;
    }
  
    getBeginPoint() {
      return this.beginPoint;
    }
  
    getEndPoint() {
      return this.endPoint;
    }
  }
  
  function reverse(segment) {
    const beginPointCopy = new Point(segment.endPoint.getX(), segment.endPoint.getY());
    const endPointCopy = new Point(segment.beginPoint.getX(), segment.beginPoint.getY());
  
    return new Segment(beginPointCopy, endPointCopy);
  }
  
  export { Point, Segment, reverse };
  
// END
