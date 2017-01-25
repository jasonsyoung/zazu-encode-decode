const Entities = require('html-entities').AllHtmlEntities;
const querystring = require('querystring');

module.exports = pluginContext => (query, env = {}) => new Promise((resolve, reject) => {
  const entities = new Entities();
  const input = query || pluginContext.clipboard.readText();

  const base64 = new Buffer(input).toString('base64');
  const urlEncoded = querystring.escape(input);
  const htmlEncoded = entities.encode(input);

  resolve([
    {
      icon: 'fa-file-code-o',
      title: urlEncoded,
      subtitle: 'URL Encoded',
      value: urlEncoded
    },
    {
      icon: 'fa-file-code-o',
      title: htmlEncoded,
      subtitle: 'HTML Encoded',
      value: htmlEncoded
    },
    {
      icon: 'fa-file-code-o',
      title: base64,
      subtitle: 'Base64 encoded',
      value: base64
    }
  ]);
});
