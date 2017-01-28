const Entities = require('html-entities').AllHtmlEntities;
const querystring = require('querystring');

module.exports = pluginContext => (query, env = {}) => new Promise((resolve, reject) => {
  const entities = new Entities();
  const input = query || pluginContext.clipboard.readText();

  const base64 = new Buffer(input, 'base64').toString('ascii');
  const url = querystring.unescape(input);
  const html = entities.decode(input);

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
