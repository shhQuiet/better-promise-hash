'use strict';

Promise.hash = function(iter) {
  return new Promise((resolve, reject) => {
    const promises = Object.keys(iter).map((key) => {
      return {
        key: key,
        value: iter[key]
      }
    }).filter((item) => item.value.then);

    Promise.all(promises.map((promiseItem) => {
      return promiseItem.value;
    })).then((promiseResults) => {
      promiseResults.forEach((resultItem, index) => {
        iter[promises[index].key] = resultItem;
      });
      resolve(iter);
    }).catch(reject);
  });
}