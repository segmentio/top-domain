
var lastDomain = require('last-domain');

describe('lastDomain', function () {

  it('should match the following urls', function () {

    expect(lastDomain('http://www.google.com')).to.be('google.com');
    expect(lastDomain('http://www.google.co.uk')).to.be('google.co.uk');
    expect(lastDomain('http://google.co.uk')).to.be('google.co.uk');
    expect(lastDomain('http://google.com')).to.be('google.com');
    expect(lastDomain('http://gist.github.com/calvinfo/some_file')).to.be('github.com');
    expect(lastDomain('http://localhost:7000')).to.be('localhost');
    expect(lastDomain('https://google.com:443/stuff')).to.be('google.com');
  });
});