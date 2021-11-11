const find = require('../services/find');

const findAllController = async (_req, res) => {
    try {
        const allAdds = await find({});
        return res.status(200).json({ allAdds });
    } catch (error) {
        return res.status(401).end();
    }
};

module.exports = findAllController;