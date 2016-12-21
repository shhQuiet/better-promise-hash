# better-promise-hash
A better implementation of a hash function for Promise

**Sometimes you feel like a nut, sometimes you don't**

This modules adds a `hash` function to `Promise`.  This allows you to do things like this:

    let object= {
      one: new Promise((resolve,reject) => {
          resolve('somePromiseValue');
        }),
      two: 'someOtherValue'
    };

    Promise.hash(object).then((result) => {
      console.log(result.one); // echos "somePromiseValue"
      console.log(result.two); // echos "someOtherValue"
    });

Hope that helps!
