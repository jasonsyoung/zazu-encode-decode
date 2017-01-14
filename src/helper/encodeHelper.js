module.exports = pluginContext => (query, env = {}) => new Promise((resolve, reject) => {
  resolve([
    {
      icon: 'fa-file-code-o',
      title: 'Encode',
      subtitle: 'Encodes a string into multiple formats (Usage: encode mystring)',
    },
  ]);
});
