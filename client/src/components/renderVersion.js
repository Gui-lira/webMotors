import React, { useEffect, useState } from "react";

export default function RenderVersion({ setVersion, modelId, version }) {
    const [versions, setVersions] = useState([]);

    useEffect(() => {
        const getVersions = async () => {
            const fetched = await fetch(`https://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${ modelId }`);
            const json = await fetched.json();
            setVersions([...json]);
        };
        getVersions();
    });

    const onChange = ({ target }) => {
        const { name } = target;
        setVersion(name);
    };

    return (
        <div>
            <select onChange={ onChange } value={ version } >
                { versions.map((vs) => <option value={ vs.Name }>{ vs.Name }</option>)}
            </select>
        </div>
    )
}