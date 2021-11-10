import React, { useEffect, useState } from 'react';

// realizar un formulario que le pida al usuario su edad y muestre un mensaje
// que diga si el usuario es mayor de edad o no

const Vehiculos = () => {
const [mostrarTabla, setMostrartabla]= useState(true);
const [textoBoton, setTextoBoton]= useState('Crear nuevo Vehiculo')
useEffect(()=>{
    if(mostrarTabla){
    setTextoBoton("Crear nuevo vehiculo");
        } else {
    setTextoBoton("Mostrar todos los vehiculos");
}
})
return (
  <div className='flex h-full w-full flex-col items-center justify-start p-8' >
      <div className='flex flex-col'>
          <h2 className='text-3xl font-extrabold text-gray-900'>Pagina de administracion de vehiculos</h2>
          <button 
            onClick={()=>{
            setMostrartabla(!mostrarTabla)
            }} 
            className='text-white bg-indigo-500 p-5 rounded-full m-6 w-28 self-end'>
              {textoBoton}
              </button>
              </div>
              {mostrarTabla ? <TablaVehiculos/> : <FormularioCreacionVehiculos/>}
  </div>

  );
};

const TablaVehiculos =()=>{
    return (
    <div className='flex flex-col items-center justify-center'> 
<h2 className='text-2xl font-extrabold text-gray-800'>Todos lo vehiculos</h2>
<table className=''>
    <thead>
        <tr className=''>
            <th> Nombre vehiculo</th>
            <th> Marca vehiculo</th>
            <th> Modelo vehiculo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th> Corolla</th>
            <th> Toyota</th>
            <th> 1997</th>
        </tr>
    </tbody>


</table>
</div>
    )
};

const FormularioCreacionVehiculos =()=>{
    return (
    <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo vehículo</h2>
<form>
    <input className="bg-gray-200 border-gray-500 rounded-lg m-2" type="text"></input>
    <input className="bg-gray-200 border-gray-500 rounded-lg m-2" type="text"></input>
    <input className="bg-gray-200 border-gray-500 rounded-lg m-2" type="text"></input>
    <input className="bg-gray-200 border-gray-500 rounded-lg m-2" type="text"></input>
    <button className="col-span-2 bg-green-400 p-2 rounded-md">Guardar vehiculo</button>
</form>

    </div>
    )
}
export default Vehiculos;