const deleteOne = require('../services/delete');

const deleteOneController = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteOne({ id });
        return res.status(201).end();
    } catch (e) {
        return res.status(401).json({ message: 'algo deu errado' })
    }
};

module.exports = deleteOneController;