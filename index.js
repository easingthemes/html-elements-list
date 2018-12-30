const findInFiles = require('find-in-files');

const getHtmlElements = async (dirPath = process.cwd(), ext = '.html') => {
  let searchResults = {};
  const statistic = {
    total: {},
    files: {}
  };

  try {
    searchResults = await findInFiles.find({'term': "(?<=\\<)([^!\\/\\s>]+)(?=\\s|>)+", 'flags': 'ig'}, dirPath, ext);
  } catch (error) {
    return console.error('Error getting results ...', error);
  }

  Object.keys(searchResults).map(filename => {
    const { matches } = searchResults[filename];
    const elements = {};

    for (let i = 0; i < matches.length; i++) {
      const el = matches[i];
      elements[el] = (elements[el] || 0) + 1;
      statistic.total[el] = (statistic.total[el] || 0) + 1;
    }

    statistic.files[filename] = elements;
  });

  return statistic;
};

module.exports = getHtmlElements;
