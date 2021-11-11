const { Add } = require('../models');

const deleteOne = async (params) => Add.destroy({ where: { params } });

module.exports = deleteOne;