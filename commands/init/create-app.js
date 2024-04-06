import { exec } from "child_process";
import path from "path";
import { loader } from "../loader.js";
const giturl = 'https://github.com/rocketbean/chasi-ts.git';
const gitApp = async (props, send) => {
    return await new Promise(async (res, rej) => {
        try {
            let message = '';
            let git = await exec(`git clone --depth 1 ${giturl} ${props.name.value}`);
            git.stdout.on("data", (gitData) => {
                message += gitData;
                send(gitData);
            }).on("close", () => {
                send(message);
                res(true);
            });
        }
        catch (e) {
            rej(e);
        }
    });
};
const prepare = async (props, send) => {
    return await new Promise(async (res, rej) => {
        try {
            let message = '';
            let prep = await exec(`npm i`, {
                cwd: path.join(process.cwd(), props.name.value)
            });
            prep.stdout.on("data", (data) => {
                message += data;
            }).on("close", () => {
                send(message);
                res(true);
            });
        }
        catch (e) {
            rej(e);
        }
    });
};
const sanitizeApp = async (props, send) => {
    return await new Promise(async (res, rej) => {
        try {
            let message = '';
            let prep = await exec(`rm -rf .git && ls -la`, {
                cwd: path.join(process.cwd(), props.name.value)
            });
            prep.stdout.on("data", (data) => {
                send(data);
            }).on("close", () => {
                send(message);
                res(true);
            });
        }
        catch (e) {
            rej(e);
        }
    });
};
export default async (props) => {
    const send = (message) => {
        console.log(`\x1b[33m ${message.padStart(10)} \x1b[0m`);
    };
    loader.start("setting up your project");
    await gitApp(props, send).then(data => {
        loader.stop('project setup.... OK');
    });
    loader.start("installing dependencies");
    await prepare(props, send).then(data => {
        loader.stop('installed dependecies.... OK');
    });
    loader.start("configuring setup");
    await sanitizeApp(props, send).then(data => {
        loader.stop('configure... OK');
    });
    return true;
};
