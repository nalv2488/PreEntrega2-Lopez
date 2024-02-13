import React from 'react'
import { useState, useEffect } from 'react'
import "./itemlistcontainer.css"
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';

// function ItemListContainer({ saludo }) {
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("/productos.json");
                const data = await response.json()

                if (categoryId) {
                    const filteredProducts = data.filter((p) => p.categoria == categoryId)
                    setProductos(filteredProducts)
                } else {
                    setProductos(data)
                }

            } catch (error) {
                console.log("Error en el fetch " + error)
            }
        }

        fetchData()

    }, [categoryId])
    return (
        <>
            <h1 className="h1-main"><strong>Tienda Oficial</strong></h1>
            <ItemList productos={productos} />


        </>
    )
}

export default ItemListContainer