const insert = require('../services/insert');

const insertOneController = async (req, res) => {
    const { marca, modelo, versao, ano, quilometragem, observacao } = req.body;    
    try {
        const inserted = await insert(marca, modelo, versao, ano, quilometragem, observacao);
        return res.status(200).json(inserted);
    } catch (e) {
        return res.status(401).json({ message: 'algo deu errado' });
    }
};

module.exports = insertOneController;