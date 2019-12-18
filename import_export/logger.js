var url = 'http://mylogger.io/log';

function log(message) {
  // send HTTP
  console.log(`Logging ${message} to ${url}`);
}

module.exports.log = log;
module.exports.endpoint = url;

