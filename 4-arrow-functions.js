// BEGIN
export default function each(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback.call(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback.call(collection[key]);
        }
      }
    }
  }
// END
