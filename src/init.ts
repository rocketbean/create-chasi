#!/usr/bin/env node
import Kernel from './commands/kernel.js';

let kernel = new Kernel("init");
kernel.exec();