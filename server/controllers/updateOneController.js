const update = require('../services/update');

const updateOneController = async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, versao, ano, quilometragem, observação } = req.body;
    try {
        await update({ marca, modelo, versao, ano, quilometragem, observacao }, { id });
        return res.status(201).end();
    } catch (e) {
        return res.statatus(401).json({ message: 'algo deu errado' });
    }
};

module.exports = updateOneController;