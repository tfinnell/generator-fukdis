const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('componentName', { type: String, required: true });

    this.option('stateless', { type: Boolean, desc: 'Creates a stateless component', defaults: false });
    this.option('nostyles', { type: Boolean, desc: 'Does not generate styles', defaults: false});
  },
  paths: function () {
  },
  packageFile: function () {
    this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath(`src/components/${this.componentName}/package.json`),
        { packageName: this.componentName });
  },
  componentFile: function () {
    if (this.options.stateless == false) {
      this.fs.copyTpl(
        this.templatePath('ExtendedComponent.js'),
        this.destinationPath(`src/components/${this.componentName}/${this.componentName}.js`),
        { classname: this.componentName, nostyles: this.options.nostyles });
      return;
    }

    if (this.options.stateless == true) {
      this.fs.copyTpl(
        this.templatePath('StatelessComponent.js'),
        this.destinationPath(`src/components/${this.componentName}/${this.componentName}.js`),
        { constantName: this.componentName });
    }
  },
  styleFile: function () {
    if (this.options.nostyles == false && this.options.stateless == false) {
      this.fs.copyTpl(
        this.templatePath('ComponentStyles.css'),
        this.destinationPath(`src/components/${this.componentName}/${this.componentName}.css`));
    }
  },
  generate: function () {
    console.log(this.templatePath());
  }
});
