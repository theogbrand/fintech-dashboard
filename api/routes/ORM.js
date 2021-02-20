const fs = require('fs');

/**
 * Gets all quotes
 * @param None
 */
function getData() {
  return new Promise((resolve, reject) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const json = JSON.parse(data);
        resolve(json);
      }
    });
  });
}

module.exports = {
  getData,
};
