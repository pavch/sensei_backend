import SaltModel from '../models/salts';

const Salt = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Salt object
   */
  create(req, res) {
    if (!req.body.number && !req.body.name && !req.body.keywords) {
      return res.status(400).send({'message': 'All fields are required'})
    }
    const salt = SaltModel.create(req.body);
    return res.status(201).send(salt);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Salts array
   */
  getAll(req, res) {
    return SaltModel.findAll().then(salts => res.status(200).send(salts));
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} Salts object
   */
  getOne(req, res) {
    const salt = SaltModel.findOne(req.params.name);
    if (!salt) {
      return res.status(404).send({'message': 'Salts not found'});
    }
    return res.status(200).send(salt);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} updated Salts
   */
  update(req, res) {
    const salt = SaltModel.findOne(req.params.name);
    if (!salt) {
      return res.status(404).send({'message': 'Salt not found'});
    }
    const updatedSalt = SaltModel.update(req.params.name, req.body)
    return res.status(200).send(updatedSalt);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {void} return statuc code 204
   */
  delete(req, res) {
    const salt = SaltModel.findOne(req.params.name);
    if (!salt) {
      return res.status(404).send({'message': 'Salt not found'});
    }
    const ref = SaltModel.delete(req.params.name);
    return res.status(204).send(ref);
  }
}

export default Salt;
