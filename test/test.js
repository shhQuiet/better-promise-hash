'use strict';

const expect = require('chai').expect;
const assert = require('chai').assert;

require('../lib/better-promise-hash');

function makeGood(value) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1, value);
  });
}

function makeBad(value) {
  return new Promise((resolve, reject) => {
    setTimeout(reject, 1, value);
  });
}

function makeValue(value) {
  return {
    value: value
  };
}

describe('better-promise-hash', () => {
  it('Promise#hash() returns a promise', () => {
    const result = Promise.hash({
      one: makeGood(1)
    });
    expect(result).to.be.instanceof(Promise);
  });

  it("Promise#hash() works with an empty object", (done) => {
    const emptyHash = {};
    Promise.hash(emptyHash).then((results) => {
      assert.isOk(results);
      done();
    }, (rejection) => {
      assert.fail("promise rejected!", rejection);
    }).catch((exc) => {
      assert.fail("Exception thrown!", exc);
    });
  });

  it('Promise#hash() works with promises', (done) => {
    const promises = {
      one: makeGood('one'),
      two: makeGood('two')
    };
    Promise.hash(promises).then((results) => {
      expect(Object.keys(results).length).to.equal(2);
      expect(results.one).to.equal('one');
      done();
    }, (rejection) => {
      assert.fail("promise rejected!", rejection);
    }).catch((exc) => {
      assert.fail("Exception thrown!", exc);
    });
  });

  it("Promise#hash() works with nonPromises", (done) => {
    const nonPromises = {
      one: makeValue('one'),
      two: makeValue('two')
    };
    Promise.hash(nonPromises).then((results) => {
      expect(Object.keys(results).length).to.equal(2);
      expect(results.one.value).to.equal('one');
      done();
    }, (rejection) => {
      assert.fail("promise rejected!", rejection);
    }).catch((exc) => {
      assert.fail("Exception thrown!", exc);
    });
  });

  it("Promise#hash() works with a mix", (done) => {
    const nonPromises = {
      one: makeGood('one'),
      two: makeValue('two')
    };
    Promise.hash(nonPromises).then((results) => {
      expect(Object.keys(results).length).to.equal(2);
      expect(results.one).to.equal('one');
      expect(results.two.value).to.equal('two');
      done();
    }, (rejection) => {
      assert.fail("promise rejected!", rejection);
    }).catch((exc) => {
      assert.fail("Exception thrown!", exc);
    });
  });
});