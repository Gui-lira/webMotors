import React, { useState, useEffect } from 'react';
import RenderMaker from './renderMaker'
import RenderModel from './renderModel'
import RenderVersion from './renderVersion'


export default function Form({ editingValue, pushAdd }) {
    const [maker, setMaker] = useState({ Name: '', id: '' });
    const [model, setModel] = useState({ Name: '', id: '' });
    const [version, setVersion] = useState('');
    const [generalState, setState] = useState({
        quilometers: 0,
        year: 0,
        comment: '',
    })
    useEffect(() => {
        const checkEditing = async () => {
            if (editingValue) {
                setMaker({ maker: {
                    name: editingValue.fabricante,
                }});
                setModel({ model: { name: editingValue.modelo } });
                setVersion({ version: { name: editingValue.version } });
            };
        };
        checkEditing();
    }, [editingValue]);

    const onChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...generalState,
            [name]: value,
        })
    }

    const onClick = () => {
        pushAdd({
            fabricante: maker.Name,
            modelo: model.Name,
            versao: version,
            ano: generalState.year,
            quilometragem: generalState.quilometers,
            observacao:generalState.comment,
        });
    };
    return (
        <div>
            <RenderMaker setMaker={ setMaker} maker={ maker } />
            { maker.id ? <RenderModel model={ model } setModel={ setModel } makerId={ maker.id} /> : null }
            { model.id ? <RenderVersion version={ version } setVersion={ setVersion } modelId={ model.id } /> : null }
            <input type="number" name="quilometers" onChange={ onChange } value={ generalState.quilometers } />
            <input type="text" name="comment" onChange={ onChange } value={ generalState.comment } />
            <input type="number" name="year" onChange={ onChange } value={ generalState.year } />
            <button type="button" onClick={ onClick }>Salvar</button>
        </div>
    )
} 