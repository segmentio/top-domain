# domain

[![CircleCI](https://circleci.com/gh/segmentio/top-domain.svg?style=shield&circle-token=a8809ce04276a1cb738c1818284155be3021a7dc)](https://circleci.com/gh/segmentio/top-domain)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/top-domain/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/top-domain)

Constructs possible levels from a url and attempts to set a cookie `"." + domain` for each, when it succeeds it returns the top level domain.

This only works on the domain itself, since it attempts to set a cookie.

## Installation

```sh
$ npm install @segment/top-domain
```

## API

```js
var domain = require('top-domain');

assert('google.com' == domain('http://www.google.com'));
assert('google.co.uk' == domain('http://www.google.co.uk'));
assert('google.co.uk' == domain('http://google.co.uk'));
assert('github.com' == domain('http://gist.github.com/calvinfo/some_file'));
assert('' == domain('http://localhost:3000'));
assert('google.com' == domain('https://google.com:443/stuff'));
assert('' == domain('http://dev:3000'));
assert('' == domain('0.0.0.0'));
assert('' == domain('127.0.0.1'));
```
