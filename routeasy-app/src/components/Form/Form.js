import React from 'react';

const Form = () => {
  return (
    <div>
      <form>
       <input type='text' name='nome' placeholder= 'Nome do Cliente'></input>
       <input type='text' name='peso' placeholder= 'Peso da Entrega'></input>
       <input type='text' name='endereco' placeholder= 'Endereço do Cliente' ></input>
       <button type='button' id='search'>Buscar</button>
       <button type='submit'>CADASTRAR CLIENTE</button>
      </form>
      <div className="client-location">
        <input type='number' placeholder="Latitude" disabled />
        <input type='number'   placeholder="Longitude" disabled />
      </div>

      <button>Resetar Cadastro</button>
    </div>
  )
}

export default Form; 