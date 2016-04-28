const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('testName', { type: String, required: true });
  },
  paths: function () {
  },
  testFile: function () {
    this.fs.copyTpl(
      this.templatePath('Test.js'),
      this.destinationPath(`src/components/${this.testName}/${this.testName}.test.js`),
      { testName: this.testName }
    );
    return;
  },
  generate: function () {
    console.log(this.templatePath());
  }
});
