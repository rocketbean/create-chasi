import readline from "readline";
export const loader = {
    prop: null,
    start: (message) => {
        loader.prop = loader.load(message);
    },
    stop: (message) => {
        readline.clearLine(process.stdout, 0);
        readline.clearLine(process.stdout, 0);
        readline.cursorTo(process.stdout, 0, null);
        console.log(`\r > ${message}`);
        clearInterval(loader.prop);
    },
    load: (message) => {
        let h = ['|', '/', '-', '\\'];
        let i = 0;
        return setInterval(() => {
            i = (i > 3) ? 0 : i;
            let str = `\r > ${message}... ${h[i]}`;
            readline.clearLine(process.stdout, 0);
            readline.cursorTo(process.stdout, 0, null);
            process.stdout.write(str);
            i++;
        }, 90);
    }
};
