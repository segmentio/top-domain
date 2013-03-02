

var lastDomain = require('last-domain')
  , assert     = require('component-assert');

describe('lastDomain', function () {

  it('should match the following urls', function () {

    assert(lastDomain('http://www.google.com') === 'google.com');
  });
});