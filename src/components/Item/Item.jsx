import React from 'react'
import { Link } from 'react-router-dom'
import "./item.css"

const Item = ({ producto }) => {


    return (

        <Link to={`/detalle/${producto.id}`}>

            <div key={producto.id} className='container'>
                <h2>{producto.nombre}</h2>
                {/* <img className="img-catalogo" src={producto.img} alt={producto.nombre} /> */}

                <img className={producto.categoria === 'Camisetas' ? 'img-catalogo-camiseta' : 'img-catalogo-entrada'} src={producto.img} alt={producto.nombre} />
            </div>

        </Link>
    )
}

export default Item