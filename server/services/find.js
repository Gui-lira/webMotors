const { Add } = require('../models');

const find = async (params) => {
    const values = await Add.findAll({ where: params });
    return values;
};

module.exports = find;