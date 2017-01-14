const Entities = require('html-entities').AllHtmlEntities;
const querystring = require('querystring');

module.exports = pluginContext => (query, env = {}) => new Promise((resolve, reject) => {
  const entities = new Entities();

  const base64 = new Buffer(query, 'base64').toString('ascii');
  const url = querystring.unescape(query);
  const html = entities.decode(query);

  resolve([
    {
      icon: 'fa-file-code-o',
      title: url,
      subtitle: 'URL decoded',
      value: url
    },
    {
      icon: 'fa-file-code-o',
      title: html,
      subtitle: 'HTML decoded',
      value: html
    },
    {
      icon: 'fa-file-code-o',
      title: base64,
      subtitle: 'Base64 decoded',
      value: base64
    }
  ]);
});
