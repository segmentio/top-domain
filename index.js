
/**
 * Module dependencies.
 */

var parse = require('url').parse;
var cookie = require('cookie');

/**
 * Expose `domain`
 */

exports = module.exports = domain;

/**
 * Expose `cookie` for testing.
 */

exports.cookie = cookie;

/**
 * Get the top domain.
 *
 * The function constructs the levels of domain
 * and attempts to set a global cookie on each one
 * when it succeeds it returns the top level domain.
 *
 * The method returns an empty string when the hostname
 * is an ip or `localhost`.
 *
 * Example levels:
 *
 *      domain.levels('http://www.google.co.uk');
 *      // => ["co.uk", "google.co.uk", "www.google.co.uk"]
 * 
 * Example:
 * 
 *      domain('http://localhost:3000/baz');
 *      // => ''
 *      domain('http://dev:3000/baz');
 *      // => ''
 *      domain('http://127.0.0.1:3000/baz');
 *      // => ''
 *      domain('http://segment.io/baz');
 *      // => 'segment.io'
 * 
 * @param {String} url
 * @return {String}
 * @api public
 */

function domain(url){
  var cookie = exports.cookie;
  var levels = exports.levels(url);

  // Lookup the real top level one.
  for (var i = 0; i < levels.length; ++i) {
    var cname = '__tld__';
    var domain = levels[i];
    var opts = { domain: '.' + domain };

    cookie(cname, 1, opts);
    if (cookie(cname)) {
      cookie(cname, null);
      return domain
    }
  }

  return '';
};

/**
 * Levels returns all levels of the given url.
 *
 * @param {String} url
 * @return {Array}
 * @api public
 */

domain.levels = function(url){
  var host = parse(url).hostname;
  var parts = host.split('.');
  var last = parts[parts.length-1];
  var levels = [];

  // Ip address.
  if (4 == parts.length && parseInt(last, 10) == last) {
    return levels;
  }

  // Localhost.
  if (1 >= parts.length) {
    return levels;
  }

  // Create levels.
  for (var i = parts.length-2; 0 <= i; --i) {
    levels.push(parts.slice(i).join('.'));
  }

  return levels;
};
