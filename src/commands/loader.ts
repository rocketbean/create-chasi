import readline from "readline";
import chalk  from "chalk";
export const loader = {
  prop: null,
  start: (message: string) => {
    loader.prop = loader.load(message)
  },
  stop: (message: string) => {
    readline.clearLine(process.stdout, 0)
    readline.cursorTo(process.stdout, 0, null)
    process.stdout.write(`\r > ${chalk.bgHex("484276").bold.white(message)}\n`)
    clearInterval(loader.prop);
  },
  load: (message) => {
    let h = ['|', '/', '-', '\\'];
    let i = 0;
  
    return setInterval(() => {
      i = (i > 3) ? 0 : i;
      let str = `\r > ${message}... ${h[i]}`;
      readline.clearLine(process.stdout, 0)
      readline.cursorTo(process.stdout, 0, null)
      process.stdout.write(chalk.green(str))
      i++;
    }, 90);
  }
}