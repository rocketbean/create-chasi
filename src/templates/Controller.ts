export default (name, key) => {
  return `import Controller from "../../package/statics/Controller.js";

export default class ${name} extends Controller {

  /**
   * creates (${key.capitalize()}) ObjectModel[index]
   * @param {request} [ExpressRequest] Object
   * @return {} translated as [ExpressResponse] Object
   * */
  async create(request, response) {
  }

  /**
   * refers to a single (${key.capitalize()}) ObjectModel[index]
   * @param {request} [ExpressRequest] Object
   * @return {Object} translated as [ExpressResponse] Object
   * */
  async index(request, response) {
  }

  /**
   * lists a (${key.capitalize()}) ObjectModel[index]
   * @param {request} [ExpressRequest] Object
   * @return {Object} translated as [ExpressResponse] Object
   *
   * */
  async list(request, response) {}

  /**
   * Delete/s a (${key.capitalize()}) ObjectModel[]
   * @param {request} [ExpressRequest] Object
   * @return {Bool} translated as [ExpressResponse] Object
   *
   * */
  async delete(request, response) {}

  /**
   * Updates a (${key.capitalize()}) ObjectModel[]
   * @param {request} [ExpressRequest] Object
   * @return {Object} translated as [ExpressResponse] Object
   * */
  async update(request, response) {}

}`
}