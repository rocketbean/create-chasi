
export default (name) => {
  return `import Model from "../../package/statics/Model.js";
import mongoose from "mongoose";

export type ${name.capitalize()}ModelSchema = {
  name: string;
  password: string;
  alias: string;
  email: string;
};

var ${name.toLowerCase()}Schema = new mongoose.Schema<${name.capitalize()}ModelSchema>({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const ${name.capitalize()} = Model.connect("${name.toLowerCase()}", ${name.toLowerCase()}Schema);
export default ${name.capitalize()};
`
}