export default (name) => {
return `import { ServiceProviderInterface } from "../../package/framework/Interfaces.js";
import Provider from "../../package/framework/Services/Provider.js";

export default class ${name}ServiceProvider extends Provider implements ServiceProviderInterface
{
  async boot() {
    
  }
}`
}