import create from "./create/Create.js";
import init from "./init/Init.js";
export default class Kernel {
    command;
    options;
    args;
    constructor(command, options, args) {
        this.command = command;
        this.options = options;
        this.args = args;
    }
    async create() {
        Object.keys(this.options).forEach((key) => {
            try {
                let option = this.options[key];
                if (option)
                    create(key, this.args);
            }
            catch (e) {
                console.error(e.message);
            }
        });
    }
    async init() {
        init();
    }
    async exec() {
        await this[this.command]();
    }
}
