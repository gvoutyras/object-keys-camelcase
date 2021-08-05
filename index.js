const camelCase = require("camelcase");

module.exports = (obj) => {
  for (const k in obj) {
    if (obj[k]) {
      Object.keys(obj[k]).forEach((key) => {
        const keyCamelCase = camelCase(key);

        obj[k][keyCamelCase] = obj[k][key];
        delete obj[k][key];
      });
    }
  }

  return obj;
};
