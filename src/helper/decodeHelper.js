module.exports = pluginContext => (query, env = {}) => new Promise((resolve, reject) => {
  resolve([
    {
      icon: 'fa-file-code-o',
      title: 'Decode',
      subtitle: 'Decodes a string into multiple formats (Usage: decode mystring)',
    },
  ]);
});
