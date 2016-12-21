'use strict';

Promise.hash = function(iter) {
  return new Promise((resolve, reject) => {
    const result = iter;
    const items = [];
    var item;

    for (item in iter) {
      items.push({
        key: item,
        value: iter[item]
      });
    }

    const promises = items.filter((item) => {
      if (item.value.then) {
        delete result[item];
        return true;
      }
      return false;
    });
    Promise.all(promises.map((promiseItem) => {
      return promiseItem.value;
    })).then((promiseResults) => {
      promiseResults.forEach((resultItem, index) => {
        result[promises[index].key] = resultItem;
      });
      resolve(result);
    }).catch(reject);
  });
}