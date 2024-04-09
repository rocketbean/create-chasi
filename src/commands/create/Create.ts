import chasi from "../../chasi.config.js"
import fs from "fs"
export default (option: string, name: string) => {
  let conf = chasi.defaults[option.toLowerCase()]
  let module = chasi.format(option, name);
  let content = conf.parseContent(module, name)
  try {
    let fullpath = `${conf.path}${module}.ts`
    if (!fs.existsSync(conf.path)){
      fs.mkdirSync(conf.path, { recursive: true });
    }
    if (fs.existsSync(fullpath)) throw Error(`[${module}] module already exist`)
    fs.writeFileSync(fullpath, content);
  } catch (err) { throw err; }
}