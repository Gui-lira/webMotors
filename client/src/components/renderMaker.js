import React, { useEffect, useState } from 'react';

export default function RenderMaker({ setMaker, maker }) {
    const [makers, setMakers] = useState([]);
    useEffect(() => {
        const getMakers = async () => {
            const fetched = await fetch('https://desafioonline.webmotors.com.br/api/OnlineChallenge/Make');
            const json = await fetched.json();
            setMakers([...json]);
        };
        getMakers();
    }, []);
    const onChange = ({ target }) => {
        const { name, value } = target;
        setMaker({ Name: name, id: value });
    };

    return (
        <div>
            <select value={ maker } onChange={ onChange }>
                {
                    makers.map((mk) => <option name={ mk.Name } value={ mk.id }>{ mk.Name }</option>)
                }
            </select>
        </div>
    )
}