import React, { useState, useEffect } from "react";
import Form from "./components/form";

function App() {
  const [adds, setAdds] = useState([]);
  const [editing, setEditing] = useState(false);
  const [ediAdd, setEditAdd] = useState({});

  const getAdds = async () => {
    const fetched = await fetch('http://localhost:4000/adds');
    const json = await fetched.json();
    setAdds([...json]);
  };  

  useEffect(() => {    
    getAdds();
  });

  const exclude = async ({ target }) => {
    const { value } = target;
    const response = await fetch(`http://localhost:4000/adds/${ value }`, { method: 'DELETE' });
    if (response.status !== 200) {
      console.log('ha algo errado');
    } else {
      getAdds();
    }
  };

  const pushAdd = async (add) => {
    if (editing) {
      await fetch('http://localhost:4000/adds', {
        method: 'POST',
        body: {
            ...add,
        }
      });
      setEditing(false);   
      getAdds();
    } else {
      const response = await fetch(`http://localhost:4000/adds/${ediAdd.id}`, {
        method: 'PUT',
        body: {
          ...add,
        },
      });
      if (response.status !== 200) {
        console.log('algo deu errado');
      }
    }    
  };

  const edit = ({ target }) => {
    const { value } = target;
    const add = adds.find((element) => element.id === value);
    setEditAdd(add);
    setEditing(true);
  };

  const renderAdds = () => adds.map((add) => (
    <div>
      <h1>{ add.modelo }</h1>
      <p>{ add.versao }</p>
      <h2>{ add.marca }</h2>
      <p>{ add.ano }</p>
      <p>{ add.quilometragem }</p>
      <p>{ add.comentario }</p>
      <button onClick={ exclude } value={ add.id }>Excluir</button>
      <button value={ add.id } onClick={ edit }>Editar</button>
    </div>
  ))

  return (
    <div className="App">
      { editing ? <Form editingValue={ ediAdd } pushAdd={ pushAdd } /> : <Form editingValue={ false } pushAdd={ pushAdd } /> }
      { adds.length > 0 ? renderAdds() : null }
    </div>
  );
}

export default App;
