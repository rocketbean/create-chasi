
export default (name) => {
  return `import Model from "../../package/statics/Model.js";
import mongoose from "mongoose";

export interface ${name.capitalize()}Interface extends Document {
  name: string;
}

export interface ${name.capitalize()}Model extends mongoose.Model<${name.capitalize()}Interface> {}

var ${name.toLowerCase()}Schema = new mongoose.Schema<${name.capitalize()}Interface>({
    name: {
      type: String,
      required: true,
      trim: true,
    },
  }, 
  {
    timestamps: true,
  });

const ${name.capitalize()} = Model.connect<${name.capitalize()}Model>("${name.toLowerCase()}", ${name.toLowerCase()}Schema);
export type ModelType = ${name.capitalize()}Model;
export default ${name.capitalize()};
`;
}