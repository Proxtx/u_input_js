export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.arg1 = this.document.getElementById("arg1");
    this.initPromise = this.init();
  }

  async init() {
    await uiBuilder.ready(this.arg1);
    await this.arg1.component.inputDefinition({
      type: "text",
      name: "Code",
      placeholder: "Code",
    });
  }

  setConfig(config) {
    this.config = config;
  }

  async setValue(value) {
    await this.initPromise;
    await this.arg1.component.setValue(value.code);
  }

  async getValue() {
    return {
      evaluate: true,
      code: await this.arg1.component.getValue(),
      type: "js",
    };
  }
}
