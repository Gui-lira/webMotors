import React, { useEffect, useState } from "react";

export default function RenderModel({ setModel, model, makerId }) {
    const [models, setModels] = useState([]);

    useEffect(() => {
        const getModels = async () => {
            const fetched = await fetch(`https://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${ makerId }`);
            const json = fetched.json();
            setModels([...json]);
        };
        getModels();
    }, []);
    const onChange = ({ target }) => {
        const { value, name } = target;
        setModel({ id: value, Name: name });
    }
    return (
        <div>
            <select value={ model.Name } onChange={ onChange }>
                { models.map((md) => <option name={ md.Name } value={ md.ID }>{ md.Name }</option>)}
            </select>
        </div>
    )
} 