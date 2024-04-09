import { exec } from "child_process";
import { readFile, writeFile } from 'fs/promises';
import { loader } from "../loader.js";
import path from "path";
const giturl = 'https://github.com/rocketbean/chasi-ts.git';
const fieldLabel = (field, key) => {
    return field[key].value || field[key].default;
};
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
                res(message);
            });
        }
        catch (e) {
            rej(e);
        }
    });
};
const configurePackage = async (props, send) => {
    return await new Promise(async (res, rej) => {
        try {
            let strpath = path.join(process.cwd(), props.name.value, "package.json");
            let packageData = JSON.parse((await readFile(strpath)).toString());
            packageData.name = props.name.value;
            packageData.description = fieldLabel(props, "description");
            packageData.version = fieldLabel(props, "version");
            packageData.author = fieldLabel(props, "author");
            packageData.email = fieldLabel(props, "email");
            await writeFile(strpath, JSON.stringify(packageData, null, 2));
            res(true);
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
                message += data;
            }).on("close", () => {
                res(message);
            });
        }
        catch (e) {
            rej(e);
        }
    });
};
export default async (props) => {
    const send = (message) => {
        if (message)
            console.log(`\x1b[33m ${message.padStart(10)} \x1b[0m`);
    };
    loader.start("setting up your project");
    await gitApp(props, send).then(data => {
        loader.stop('project setup.... OK');
    });
    loader.start("configuring package info");
    await configurePackage(props, send).then(r => {
        loader.stop('configuration setup.... OK');
    });
    loader.start("installing dependencies");
    await prepare(props, send).then(data => {
        loader.stop('installed dependecies.... OK');
        if (data)
            send(data);
    });
    loader.start("finishing setup");
    await sanitizeApp(props, send).then(data => {
        loader.stop('sanitation... OK');
        if (data)
            send(data);
    });
    return true;
};
