import React from 'react'
import {useSelector} from 'react-redux'
import Product from './Product'

const CategoryProducts = () => {
    const products = useSelector(state => state.products.ProductList)

    return (
        <div className='col-sm-6'>
            <div className="container pt-5">
                {products.map(product => {
                    return <Product product={product} key={product.id} />
                })}
            </div>
        </div>
    )
}

export default CategoryProducts
