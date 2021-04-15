import React from 'react'
import Categories from '../store fronts/Categories'
import CategoryProducts from '../store fronts/CategoryProducts'
import Bags from '../store fronts/Bags'


const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <Categories />
                <CategoryProducts />
                <Bags />
            </div>
        </div>
    
    )
}

export default Home
