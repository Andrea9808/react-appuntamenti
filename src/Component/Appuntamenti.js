import React, {useState} from 'react';
import data from '../data';

const Appuntamenti = () => {

    const [appuntamenti, setAppuntamenti] = useState(data);

    //elimina tutti gli appuntamenti
    const removeAll = () => {
        setAppuntamenti([]);
    };

    //Ricarica la pagina
    const reload = () => {
        setAppuntamenti(data);
    };


    //rimuove un singolo appuntamento
    const removeAppuntamento = (id) => {
        const newAppuntamenti = appuntamenti.filter(item => item.id !== id);
        setAppuntamenti(newAppuntamenti);
    };

  return (
    <div className='container w-50'>
      <h1>I nostri appuntamenti</h1>
      <div className='row'>
        {appuntamenti.map((item) => {
          return (
            <div key={item.id} className='col-12'>
                <div className='card bg-dark text-white shadow-lg mb-4'>
                    <div className='d-flex align-items-center justify-content-around'>

                    <img
                    src={item.img}
                    alt={item.nome}
                    className='w-25 rounded-circle p-4'
                   
                    />
                    <div className='card-body'>
                    <h5 className='card-title'>{item.nome}</h5>
                    <p className='card-text'>{item.stato}</p>
                    </div>

                    <div>
                        <button onClick={() => removeAppuntamento(item.id)} className='btn btn-danger mx-4' >X</button>
                    </div>
                </div>
                </div>
            </div>
          );
        })}
      </div>

      <div className='d-flex justify-content-between mb-4'>
            <button onClick={reload} className='btn btn-info'>Ricarica</button>
            <button onClick={removeAll} className='btn btn-danger'>Elimina tutto</button>
      </div>
    </div>
  );
};

export default Appuntamenti;