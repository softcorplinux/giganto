export default function cache(func: any, hash: (args: any) => string) {
  const cache = new Map();
  return function () {
    const key = hash(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }

    // console.log('key', key, arguments);

    // let result = func.call(this, ...arguments); // (**)

    // cache.set(key, result);
    // return result;
    const result = func.apply(null, arguments);
    cache.set(key, result);
    return result;
  };
}

function hash(args: any) {
  return args[0] + ',' + args[1];
}

// export default class Cache {
//   map = new Map();

//   get(method: any) {
//     this[method] = this.decorator(this[method], method);
//     return this[method](...arguments);
//   }
// }
