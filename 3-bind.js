// BEGIN
export default function bind(obj, fn) {
    return function() {
      return fn.apply(obj, arguments);
    };
  }
// END