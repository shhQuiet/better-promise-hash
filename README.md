# better-promise-hash [![npm](https://img.shields.io/npm/dm/better-promise-hash.svg)](https://www.npmjs.com/package/better-promise-hash) [![travis status](https://travis-ci.org/shhQuiet/better-promise-hash.svg?branch=master)](https://travis-ci.org/shhQuiet/better-promise-hash#)

A better implementation of a hash function for Promise.  Returns a promise that is fulfilled when all the given promises have been fulfilled.  Any rejection rejects the whole hash.

The object passed to `hash` will be returned with promises replaced with the promise result.  Any non-promise objects will simply remain in the result.

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
