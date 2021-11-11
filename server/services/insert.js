const { Add } = require('../models');

const insert = async (...elements) => {
    const inserted = await Add.create({ elements });
    return inserted;
};

module.exports = insert;