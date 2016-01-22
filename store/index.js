const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('storeName', { type: String, required: true });
  },
  paths: function () {
  },
  storeFile: function () {
    const storeName = this.storeName;
    this.fs.copyTpl(this.templatePath('Store.js'),
                    this.destinationPath(`src/stores/${this.storeName}Store.js`),
                    { storeName });
    console.log(this.templatePath());
  },
  utilitiesFile: function () {
    const storeUtilsName =`${this.storeName}StoreUtilities`;
    this.fs.copyTpl(this.templatePath('StoreUtilities.js'),
                    this.destinationPath(`src/stores/${this.storeName}StoreUtilities.js`),
                    { storeUtilsName });
    console.log(this.templatePath());
  },
  testFile: function() {
    const storeName = this.storeName;
    this.fs.copyTpl(this.templatePath('Store-test.js'),
                    this.destinationPath(`src/stores/__tests__/${storeName}Store-test.js`),
                    { storeName });
    console.log(this.templatePath());
  },
  constantsFile: function() {
    const storeName = this.storeName;
    this.fs.copyTpl(this.templatePath('Constants.js'),
                    this.destinationPath(`src/constants/${storeName}Constants.js`),
                    { storeName });
  },
  actionsFile: function() {
    const storeName = this.storeName;
    this.fs.copyTpl(this.templatePath('Actions.js'),
                    this.destinationPath(`src/actions/${storeName}Actions.js`),
                    { storeName });
  },
});
