'use strict';

var assert = require('proclaim');
var domain = require('../lib');

describe('topDomain', function() {
  beforeEach(function() {
    var cookies = {};
    domain.cookie = function(name, val, opts) {
      switch (arguments.length) {
      case 3:
        var parts = opts.domain.split('.');
        if (parts[1] === 'co') return;
        cookies[name] = val;
      // eslint-disable-next-line no-fallthrough
      case 1:
        return cookies[name];
      default:
        // No default case
      }
    };
  });

  it('should match the following urls', function() {
    assert.strictEqual(domain('http://www.google.com'), 'google.com');
    assert.strictEqual(domain('http://www.google.co.uk'), 'google.co.uk');
    assert.strictEqual(domain('http://google.co.uk'), 'google.co.uk');
    assert.strictEqual(domain('http://google.co.il'), 'google.co.il');
    assert.strictEqual(domain('http://gist.github.com/calvinfo/some_file'), 'github.com');
    assert.strictEqual(domain('http://localhost:3000'), '');
    assert.strictEqual(domain('https://google.com:443/stuff'), 'google.com');
    assert.strictEqual(domain('http://dev:3000'), '');
    assert.strictEqual(domain('0.0.0.0'), '');
    assert.strictEqual(domain('127.0.0.1'), '');
    assert.strictEqual(domain('86.77.65.90'), '');
    assert.strictEqual(domain('http://app.jut.io'), 'jut.io');
    assert.strictEqual(domain('http://app.segment.io'), 'segment.io');
  });
});
