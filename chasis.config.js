import controller from "./templates/Controller.js";
import model from "./templates/Model.js";
import middleware from "./templates/Middleware.js";
import provider from "./templates/Provider.js";
import path from "path";
Object.defineProperty(String.prototype, 'capitalize', {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});
const defaults = {
    controller: {
        key: "Controller",
        path: path.join(process.cwd(), '/src/container/controllers/'),
        parseContent: controller,
    },
    middleware: {
        key: ".mw",
        path: path.join(process.cwd(), '/src/container/middlewares/'),
        parseContent: middleware
    },
    provider: {
        key: "ServiceProvider",
        path: path.join(process.cwd(), '/src/container/services/'),
        parseContent: provider
    },
    model: {
        key: '',
        path: path.join(process.cwd(), '/src/container/models/'),
        parseContent: model
    }
};
export default {
    defaults,
    format: (option, name) => {
        return name.capitalize() + defaults[option].key;
    }
};
