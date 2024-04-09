#!/usr/bin/env node
import { Command } from 'commander';
import Kernel, {createOptions} from './commands/kernel.js';
const program = new Command();

program.name("chasis")
  .description(`chasi cli tool`)
  .version(`1.0.0`);

program.command('create')
  .description(`create new file[s] [controller, model, middleware, provider ]`)
  .argument('<name>', 'specifies the name to use.')
  .option('-c , --controller', 'creates a new controller')
  .option('-m , --model', 'creates a new model')
  .option('-w , --middleware', 'creates a new middleware')
  .option('-p , --provider', 'creates a new service provider')
  .action((name: string, options: createOptions) => {
    let kernel = new Kernel("create", options, name);
    kernel.exec();
  });

program.command('init')
.description(`initializes chasi boilerplate`)
.action(async () => {
  let kernel = new Kernel("init");
  kernel.exec();
});
program.parse();

