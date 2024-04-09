import readline from "readline";
import createApp from "./create-app.js";
import chalk from "chalk";
const requestReadliner = () => {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
};
const fields = {
    name: {
        value: '',
        default: 'chasi',
        label: ' > please provide a name for your project: ',
        prompted: false,
        prompt: (resolve, reject) => {
            let readliner = requestReadliner();
            readliner.question(chalk.magenta(fields.name.label), (answer) => {
                fields.name.value = answer || fields.name.default;
                console.log(chalk.gray(`\r - name: ${fields.name.value}`));
                readliner.close();
                resolve(answer);
            });
        }
    },
    description: {
        value: '',
        default: 'A Chasi Project',
        label: ' > short description for your app: ',
        prompt: (resolve, reject) => {
            let readliner = requestReadliner();
            return readliner.question(chalk.magenta(fields.description.label), (answer) => {
                fields.description.value = answer || fields.description.default;
                console.log(chalk.gray(`\r - description: ${fields.description.value}`));
                readliner.close();
                resolve(answer);
            });
        }
    },
    version: {
        value: '',
        default: '1.0.0',
        label: ' > app version: ',
        prompt: (resolve, reject) => {
            let readliner = requestReadliner();
            return readliner.question(chalk.magenta(fields.version.label), (answer) => {
                fields.version.value = answer || fields.version.default;
                console.log(chalk.gray(`\r - version: ${fields.version.value}`));
                readliner.close();
                resolve(answer);
            });
        }
    },
    author: {
        value: '',
        default: 'n/a',
        label: ' > project author: ',
        prompt: (resolve, reject) => {
            let readliner = requestReadliner();
            return readliner.question(chalk.magenta(fields.author.label), (answer) => {
                fields.author.value = answer || fields.author.default;
                console.log(chalk.gray(`\r - author: ${fields.author.value}`));
                readliner.close();
                resolve(answer);
            });
        }
    },
    email: {
        value: '',
        default: 'n/a',
        label: ' > email: ',
        prompt: (resolve, reject) => {
            let readliner = requestReadliner();
            return readliner.question(chalk.magenta(fields.email.label), (answer) => {
                fields.email.value = answer || fields.email.default;
                console.log(chalk.gray(`\r - email: ${fields.email.value}`));
                readliner.close();
                resolve(answer);
            });
        }
    }
};
export default async () => {
    for (let field in fields) {
        await new Promise((res, rej) => {
            fields[field].prompt(res, rej);
        });
    }
    console.clear();
    await createApp(fields);
};
