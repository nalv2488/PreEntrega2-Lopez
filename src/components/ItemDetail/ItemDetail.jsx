import React from 'react'
import "./itemdetail.css"

const ItemDetail = ({ producto }) => {

    return (
        <div>
            <h1>{producto.nombre}</h1>
            <img className={producto.categoria === 'Camisetas' ? 'img-catalogo-camiseta' : 'img-catalogo-entrada'} src={producto.img} alt={producto.nombre} />
            <h3 className="h3-itemd">Precio: {producto.precio}</h3>
            <h3 className="h3-itemd">Entradas disponibles: {producto.cantidad}</h3>
        </div>
    );
};

export default ItemDetail