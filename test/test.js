
var topDomain = require('top-domain');

describe('topDomain', function () {

  it('should match the following urls', function () {

    expect(topDomain('http://www.google.com')).to.be('google.com');
    expect(topDomain('http://www.google.co.uk')).to.be('google.co.uk');
    expect(topDomain('http://google.co.uk')).to.be('google.co.uk');
    expect(topDomain('http://google.com')).to.be('google.com');
    expect(topDomain('http://gist.github.com/calvinfo/some_file')).to.be('github.com');
    expect(topDomain('http://localhost:7000')).to.be('localhost');
    expect(topDomain('https://google.com:443/stuff')).to.be('google.com');
  });
});