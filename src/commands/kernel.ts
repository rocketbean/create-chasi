import create from "./create/Create.js"
import init from "./init/Init.js"
export type createOptions = {
  controller?: boolean,
  model?: boolean,
  provider?: boolean,
  middleware?: boolean,
}

export type command = "create" | "init"

export default class Kernel {
  constructor (
    public command: command, 
    public options?: createOptions, 
    public args?: any) {}
  
  async create () {
    Object.keys(this.options).forEach((key: string) => {
      try {
        let option = this.options[key];
        if(option) create(key, this.args)
      } catch (e:any) {
        console.error(e.message);
      }
    })
  }

  async init () {
    init()
  }

  async exec() {
    await this[this.command]();
  }
}