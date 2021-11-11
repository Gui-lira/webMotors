const { Add } = require('../models');

const update = async (params, elements) => Add.update(elements, { where: { params } });

module.exports = update;