var generators = require('yeoman-generator')

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('componentName', { type: String, required: true });

    this.option('stateful', { type: Boolean, desc: 'Toggles whether to generate a stateless or stateful component', defaults: true });
    this.option('styles', { type: Boolean, desc: 'Toggles whether a stylesheet and decorator is added to the component', defaults: true});
  },
  paths: function () {
  },
  writing: function () {
    this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath(`src/components/${this.componentName}/package.json`),
        { packageName: this.componentName }
        );

    this.fs.copyTpl(
      this.templatePath('ExtendedComponent.js'),
      this.destinationPath(`src/components/${this.componentName}/${this.componentName}.js`),
      { classname: this.componentName, styles: this.option.styles });

    if (this.option.styles != false) {
      this.fs.copyTpl(
        this.templatePath('ComponentStyles.css'),
        this.destinationPath(`src/components/${this.componentName}/${this.componentName}.css`));
    }
  },
  generate: function () {
    console.log(this.templatePath());
  }
});
