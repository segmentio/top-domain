# top-domain

  Makes a reasonable guess at the 'top' domain for a url, useful for cookie-ing.

## Installation

    $ component install segmentio/top-domain

## API

```
var topDomain = require('top-domain');

topDomain('http://www.google.co.uk/some_other_path#good') // 'google.co.uk'
```
   

## License

  MIT
