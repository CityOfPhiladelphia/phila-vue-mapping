// http://stackoverflow.com/a/37164538/676001

// helper to verify that an item is an object
export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
};

// merges n objects, deeply, immutably
export default function mergeDeep(target, source) {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target))
          Object.assign(output, { [key]: source[key] });
        else
          output[key] = mergeDeep(target[key], source[key]);
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};
