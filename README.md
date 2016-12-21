# better-promise-hash ![travis status](https://travis-ci.org/shhQuiet/better-promise-hash.svg?branch=master)

A better implementation of a hash function for Promise

*Sometimes you feel like a nut, sometimes you don't*

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

This is similar to RSVP.hash, which supports a mix of promises and non-promise objects.

Hope that helps!
