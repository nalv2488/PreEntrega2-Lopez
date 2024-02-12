import React from 'react'

const ItemDetail = ({ producto }) => {

    return (
        <div>
            <h1>{producto.nombre}</h1>
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.precio}</h3>
            <h3>{producto.cantidad}</h3>
        </div>
    );
};

export default ItemDetail