

describe('topDomain', function () {
  var domain = require('top-domain');
  var assert = require('assert');

  it('should match the following urls', function () {
    assert('google.com' == domain('http://www.google.com'));
    assert('google.co.uk' == domain('http://www.google.co.uk'));
    assert('google.co.uk' == domain('http://google.co.uk'));
    assert('github.com' == domain('http://gist.github.com/calvinfo/some_file'));
    assert('' == domain('http://localhost:3000'));
    assert('google.com' == domain('https://google.com:443/stuff'));
    assert('' == domain('http://dev:3000'));
    assert('' == domain('0.0.0.0'));
    assert('' == domain('127.0.0.1'));
  });
});
