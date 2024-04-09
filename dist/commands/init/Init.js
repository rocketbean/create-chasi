import readline from "readline";
import createApp from "./create-app.js";
const requestReadliner = () => {
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
};
const fields = {
    name: {
        value: '',
        prompt: (resolve, reject) => {
            let readliner = requestReadliner();
            return readliner.question('please provide a name for your app: ', (answer) => {
                fields.name.value = answer;
                readliner.close();
                resolve(answer);
            });
        }
    },
    description: {
        value: '',
        prompt: (resolve, reject) => {
            let readliner = requestReadliner();
            return readliner.question('a short description for your app: ', (answer) => {
                fields.description.value = answer;
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
    await createApp(fields);
};
