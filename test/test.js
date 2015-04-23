

describe('topDomain', function () {
  var domain = require('top-domain');
  var assert = require('assert');

  beforeEach(function(){
    var cookies = {};
    domain.cookie = function(name, val, opts){
      switch (arguments.length) {
        case 3:
          var parts = opts.domain.split('.');
          if ('co' == parts[1]) return;
          cookies[name] = val;
        case 2:
          cookies[name] = val;
        case 1:
          return cookies[name];
      }
    };
  });

  it('should match the following urls', function () {
    assert.equal('google.com', domain('http://www.google.com'));
    assert.equal('google.co.uk', domain('http://www.google.co.uk'));
    assert.equal('google.co.uk', domain('http://google.co.uk'));
    assert.equal('google.co.il', domain('http://google.co.il'));
    assert.equal('github.com', domain('http://gist.github.com/calvinfo/some_file'));
    assert.equal('', domain('http://localhost:3000'));
    assert.equal('google.com', domain('https://google.com:443/stuff'));
    assert.equal('', domain('http://dev:3000'));
    assert.equal('', domain('0.0.0.0'));
    assert.equal('', domain('127.0.0.1'));
    assert.equal('', domain('86.77.65.90'));
    assert.equal('jut.io', domain('http://app.jut.io'));
    assert.equal('segment.io', domain('http://app.segment.io'));
  });
});
