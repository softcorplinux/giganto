export default function cachingDecorator(func: any, hash: (args: any) => string) {
  let cache = new Map();
  return function () {
    let key = hash(arguments); // (*)
    if (cache.has(key)) {
      return cache.get(key);
    }

    // let result = func.call(this, ...arguments); // (**)

    // cache.set(key, result);
    // return result;
  };
}

function hash(args: any) {
  return args[0] + ',' + args[1];
}
